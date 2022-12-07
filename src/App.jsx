import CarosuelContainer from "./components/CarosuelContainer";
import CoinInfo from "./components/CoinInfo";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-8 mb-6 px-[5%]">
        <CarosuelContainer />
      </div>
      <div className="md:px-[10%] px-4">
        <CoinInfo />
      </div>
    </>
  );
}

export default App;
