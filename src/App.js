import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      {/* <Logo /> */}
      {/* <Header /> */}
      {/* <Footer title="Real Madrid" postcode={100900} isOpen /> */}
      {/* <Sidebar /> */}
      <Menu />
    </div>
  );
}

export default App;
