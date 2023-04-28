import Cards from "./components/Cards";
import FirstComponent from "./components/FirstComponent";
import Footer from "./components/Footer";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";
import Final from "./components/Final";
import Header from "./components/Header";

function App() {
  return (
    <div className=" container-bg App">
      <div className="containers">
        <Header />
        <FirstComponent />
        <ThirdComponent />
        <FourthComponent />
        <Cards />
        <Final />
        <Footer />
      </div>
    </div>
  );
}

export default App;
