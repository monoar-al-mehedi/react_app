import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar title="My App" myHome="Home" aboutUs="About" />
      <div className="container my-3">
        {/* <TextForm heading="Enter Text" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
