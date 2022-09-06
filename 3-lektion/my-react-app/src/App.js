import './App.css';
import { Image, Flexform, Table, List, Car, Garage } from "./components"
import BackToTop from "react-back-to-top-button";

function App() {
  const a = 2;

  return (
    <div className="App">

      <List />
      <Image />

      <Car initialCarColor={"gray"} />
      <Garage
        nrOfCars={3}
        carColorsArray={["green", "pink", "blue"]}
      />

      <Flexform />
      <Table />
      

      <BackToTop
        showOnScrollUp={false}
        showAt={100}
        speed={100}
        easing="easeInOutSine"
      >
        <span>^</span>
      </BackToTop>

    </div>
  );
}

export default App;
