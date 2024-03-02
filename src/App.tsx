import "./normalize.css";
import Hero from "./components/Hero/hero";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;
