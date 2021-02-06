import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <Footer title="Real Madrid" postcode={100900} isOpen />
    </div>
  );
}

export default App;
