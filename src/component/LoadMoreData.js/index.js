import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledbutton, setDisabledbutton] = useState(false);

  async function fetchproducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
      console.log(result.products);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchproducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisabledbutton(true);
  }, [products]);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-4 gap-3">
        {products && products.length
          ? products.map((item) => (
              <div className="p-4 border" key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-48 h-48"
                />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className=" flex flex-col justify-center items-center">
        <button
          className={
            disabledbutton
              ? "bg-slate-50 text-gray-500"
              : "bg-slate-800 text-white"
          }
          disabled={disabledbutton}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disabledbutton ? <p>You have reached 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
