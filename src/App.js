
// import Accordian from './component/Accordion';
// import Randomcolor from './component/Random-color';
// import StarRating from './component/Star-rating';
// import ImageSlider from "./component/imageSlider";
// import LoadMoreData from "./component/LoadMoreData.js";
import ScrollIndicator from "./component/ScrollIndicator";
function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <Randomcolor/> */}
      {/* <StarRating/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"}  page={"1"} limit={"10"}/> */}
      {/* <LoadMoreData /> */}
      <ScrollIndicator url ={"https://dummyjson.com/products?limit=100"}/>

    </div>
  );
}

export default App;
