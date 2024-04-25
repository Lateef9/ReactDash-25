import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [scrollpercentage, setScrollpercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setData(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleScrollPercentage = () => {
    const howmuchscrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollpercentage((howmuchscrolled / height) * 100);
  };
  console.log(scrollpercentage);

  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.addEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center w-full top-0 h-8 bg-green-500 fixed ">
        <h1 className="">Custom Scroll Container </h1>
        <div className="bg-yellow-400 h-2 w-full ">
          <div
            className="bg-purple-600 h-2"
            style={{ width: `${scrollpercentage}%` }}
          ></div>
        </div>
      </div>
      {data && data.length > 0 ? data.map((item) => <p>{item.title}</p>) : null}
    </div>
  );
};

export default ScrollIndicator;
