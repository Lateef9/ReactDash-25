import ImageSlider from "./component/imageSlider";

// import Accordian from './component/Accordion';
// import Randomcolor from './component/Random-color';
// import StarRating from './component/Star-rating';
function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <Randomcolor/> */}
      {/* <StarRating/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"}  page={"1"} limit={"10"}/>
    </div>
  );
}

export default App;
