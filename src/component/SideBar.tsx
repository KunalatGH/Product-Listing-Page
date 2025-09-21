import React, { useState } from "react";

interface SideBarProps{
  onColorChange:(color: string) => void;
  onCategoryChange:(category: string) => void;
  selectedCategory : string;
}

const colors = [
  "#000000",
  "#FFFFFF",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
];

const categories = ["All", "Nike", "Adidas", "Airmax", "Van", "All Stars"];

const SideBar: React.FC<SideBarProps> = ({ onColorChange, onCategoryChange, selectedCategory }) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const [openCategory, setOpenCategory] = useState<string | null>("All");

  const handleCategoryClick = (category: string) => {
    const newCategory = openCategory === category ? null : category;
    setOpenCategory(newCategory);
    onCategoryChange(category);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <>
      <div id="sidebar">
        <div id="first">
          <div id="hotdeals">
            <h2>Hot Deals</h2>
          </div>
          <div id="categories">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`cat_head ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <h2>{category}</h2>
                <span>{index + 4}</span>
                {/* Expandable sub-items */}
                {openCategory === category && (
                  <div className="subcategory">
                    <p>{category} Shoes</p>
                    <p>{category} Sneakers</p>
                    <p>{category} Sports</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div id="second">
          <div id="prices">
            <h2>Prices</h2>
          </div>
          <div id="randediv">
            <div id="range">
              <h2>Range: </h2>
              <span>$13.99 - $25.99</span>
            </div>
            <div id="slider">
              <input type="range" name="slider" id="slider" />
            </div>
          </div>
        </div>
        <div id="third">
          <div id="color">
            <h2>Color</h2>
          </div>
          <div id="randediv">
            <div id="colors_">
              {colors.map((color, index) => {
                const isSelected = selectedColor === color;
                return (
                  <div
                    key={index}
                    className={` rounded-4xl h-8 w-8 ${
                      isSelected ? "selected" : ""
                    }`}
                    style={{
                      backgroundColor: color,
                      border: isSelected ? "3px solid #000" : "1px solid #ccc",
                    }}
                    onClick={() => handleColorClick(color)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>

        <div id="fourth">
          <div id="brands">
            <h2>Brands</h2>
          </div>
          <div id="categories">
            <div className="cat_head">
              <h2>Nike</h2>
              <span>99</span>
            </div>
            <div className="cat_head">
              <h2>Adidas</h2>
              <span>99</span>
            </div>
            <div className="cat_head">
              <h2>Airmax</h2>
              <span>99</span>
            </div>
          </div>
        </div>

        <div id="fifth">
          <div id="more">
            <h2>More</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
