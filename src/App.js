import Cards from "./components/Cards";
import FirstComponent from "./components/FirstComponent";
import Footer from "./components/Footer";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";
import Final from "./components/Final";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container-bg">
        <Header />
        <FirstComponent />
        <SecondComponent />
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
