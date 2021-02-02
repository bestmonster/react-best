import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer title="Real Madrid" postcode={100900} isOpen />
    </div>
  );
}

export default App;
