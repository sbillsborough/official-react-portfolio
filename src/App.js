import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/ui/home/home";
import Projects from "./components/ui/projects/projects";

import Header from "./components/ui/header/header";
import Footer from "./components/ui/footer/footer";

import { Banner } from "./components/ui/animatedIcons/Banner";

const images = [
  "fa-brands fa-html5",
  "fa-brands fa-css3-alt",
  "fa-brands fa-js",
  "fa-brands fa-react",
  "fa-brands fa-bootstrap",
  "fa-brands fa-node",
  "fa-brands fa-npm",
  "fa-brands fa-github",
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Banner images={images} speed={2000} />
      <Footer />
    </>
  );
}

export default App;
