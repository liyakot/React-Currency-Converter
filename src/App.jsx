import "./App.css";
import Header from "./components/Header";
import Converter from "./components/Converter";

function App() {
  return (
    <div className="app">
      <Header />
      <h1 className="title">Currency Converter</h1>
      <Converter />
    </div>
  );
}

export default App;
