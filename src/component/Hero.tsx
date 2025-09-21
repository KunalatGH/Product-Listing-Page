import { useEffect, useState } from "react";
import Card from "./Card";
// import SideBar from "./SideBar";
import { useSearchParams } from "react-router-dom";

const products = [
  {
    title: "Nike Air Max 270",
    price: 150,
    image: "/images/shoe_1.png",
    rating: 4.5,
    category: "Nike",
    isHot: true,
  },
  {
    title: "Nike Runner",
    price: 120,
    image: "/images/shoe_2.png",
    rating: 4.2,
    category: "Nike",
  },
  {
    title: "Adidas Classic",
    price: 140,
    image: "/images/purse_1.png",
    rating: 4.3,
    category: "Adidas",
  },
  {
    title: "Adidas Street",
    price: 160,
    image: "/images/purse_2.png",
    rating: 4.6,
    category: "Adidas",
  },
  {
    title: "Airmax Zoom",
    price: 180,
    image: "/images/shoe_3.png",
    rating: 4.7,
    category: "Airmax",
  },
  {
    title: "Nike Air Max 270",
    price: 150,
    image: "/images/shoe_1.png",
    rating: 4.5,
    category: "Nike",
    isHot: true,
  },
  {
    title: "Nike Runner",
    price: 120,
    image: "/images/shoe_2.png",
    rating: 4.2,
    category: "Nike",
  },
  {
    title: "Adidas Classic",
    price: 140,
    image: "/images/purse_1.png",
    rating: 4.3,
    category: "Adidas",
  },
  {
    title: "Adidas Street",
    price: 160,
    image: "/images/purse_2.png",
    rating: 4.6,
    category: "Adidas",
  },
  {
    title: "Airmax Zoom",
    price: 180,
    image: "/images/shoe_3.png",
    rating: 4.7,
    category: "Airmax",
  },
];

const ITEMS_PER_PAGE = 6;

const Hero = ({ selectedColor, selectedCategory = "All" }) => {
  let filteredProducts = products;
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortOption, setSortOption] = useState(
    searchParams.get("sort") || "featured"
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  useEffect(() => {
    setSearchParams({ sort: sortOption, page: String(currentPage) });
  }, [sortOption, currentPage, setSearchParams]);

  // Filter by category (or show all)
  // let filteredProducts = products;
  if (selectedCategory !== "All") {
    filteredProducts = products.filter((p) => p.category === selectedCategory);
  }

  // Sorting logic
  const sortProducts = (items) => {
    switch (sortOption) {
      case "nameAsc":
        return [...items].sort((a, b) => a.title.localeCompare(b.title));
      case "nameDesc":
        return [...items].sort((a, b) => b.title.localeCompare(a.title));
      case "lowtohigh":
        return [...items].sort((a, b) => a.price - b.price);
      case "hightolow":
        return [...items].sort((a, b) => b.price - a.price);
      case "featured":
      default:
        return [...items].sort((a, b) => (b.isHot ? -1 : 1)); // HOT first
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const slotsp = [...currentProducts];
  while (slotsp.length < ITEMS_PER_PAGE) {
    slotsp.push({ placeholder: true });
  }

  return (
    <div id="hero">
      <div id="advert">
        <div id="box1">
          <h3>Adidas Men Running Sneakers</h3>
          <p>Performance and design. Taken right to the edge.</p>
          <a href="">SHOP NOW</a>
        </div>
        <div id="box2">
          <img src="/images/advertshoe.png" alt="image" />
        </div>
      </div>
      <div id="bar">
        <div id="left_side">
          <div id="total_items">
            <span>{filteredProducts.length}</span>Items
          </div>

          <div id="sort">
            <h2>Sort By:</h2>
            <select
              name="sorting"
              id="sorting"
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="featured">Featured</option>
              <option value="nameAsc"> A to Z</option>
              <option value="nameDesc"> Z to A</option>
              <option value="lowtohigh"> Low to High</option>
              <option value="hightolow"> High to Low</option>
              <option value="popular">Popularity</option>
            </select>
          </div>

          <div id="total_products">
            <h2>Show:</h2>
            <select name="show" id="show">
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
            </select>
          </div>
        </div>
        <div id="right_side">
          <div id="grid">
            <img src="/images/menu.png" alt="grid" />
          </div>
          <div id="list">
            <img src="/images/main-menu.png" alt="list" />
          </div>
        </div>
      </div>

      <div className="app">
        <div id="products">
          {slotsp.map((product, index) =>
            product.placeholder ? (
              <div key={index} className="card placeholder">
                <button className="view-more">View More</button>
              </div>
            ) : (
              <Card
                key={index}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
                isHot={true}
                bgColor={selectedColor}
              />
            )
          )}
        </div>
      </div>
      {/* Pagination */}
      <div id="navigate">
        {[...Array(totalPages)].map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              cursor: "pointer",
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
            }}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
