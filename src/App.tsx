import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import SideBar from "./component/SideBar";
import Hero from "./component/Hero";
import { useState } from "react";
function App() {
  const [selectedColor, setSelectedColor] = useState<string>("#ffffff"); // default white

  const [selectedCategory, setSelectedCategory] = useState<string>("All"); // default

  return (
    <>
      <Navbar />
      <div className="layout">
        <SideBar
          onColorChange={setSelectedColor}
          onCategoryChange={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <Hero
          selectedColor={selectedColor}
          selectedCategory={selectedCategory}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
