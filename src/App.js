import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/ui/home/home";
import Projects from "./components/ui/projects/projects";

import Header from "./components/ui/header/header";
import Footer from "./components/ui/footer/footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
