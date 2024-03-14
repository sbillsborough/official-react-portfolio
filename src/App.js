import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/ui/home/home.js";

import Header from "./components/ui/header/header.js";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
