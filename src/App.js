import Cards from "./components/Cards";
import FirstComponent from "./components/FirstComponent";
import Footer from "./components/Footer";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";
import Final from "./components/Final";
import Header from "./components/Header";
import LineGraph from "./components/LineGraph";

function App() {
  return (
    <div className=" container-bg App">
        <div
          class="alert bg-safety-orange alert-dismissible fade show text-center"
          role="alert"
        >
          <strong>Free 7 Day Trial Get Started Now</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      <div className="containers">
        <Header />
        <FirstComponent />
        <LineGraph />
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
