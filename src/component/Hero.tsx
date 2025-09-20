import Card from "./Card";


const Hero = () => {
  return (
    <div id="hero">
      <div id="advert"></div>
      <div id="bar">
        <div id="left_side">
          <div id="total_items">
            <span>13</span>Items
          </div>

          <div id="sort">
            <h2>Sort By:</h2>
            <select name="sorting" id="sorting">
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="popular">Popular</option>
              <option value="lowtohigh">Price: Low to High</option>
              <option value="hightolow">Price: High to Low</option>
            </select>
          </div>

          <div id="total_products">
            <h2>Show:</h2>
            <select name="show" id="show">
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        <div id="right_side">
          <div id="grid">
            <img src="grid.svg" alt="grid" />
          </div>
          <div id="list">
            <img src="list.svg" alt="list" />
          </div>
        </div>
      </div>
      <div id="products">
        <Card
          title="Nike Air Max 270"
          price={150}
          oldPrice={200}
          discount={25}
          image="/images/shoe_1.png"
          rating={4.5}
          isHot={true}
        />
        <Card
          title="Nike Air Max 270"
          price={150}
          oldPrice={200}
          discount={25}
          image="/images/purse.png"
          rating={4.5}
          isHot={true}
        />
        <Card
          title="Nike Air Max 270"
          price={150}
          oldPrice={200}
          discount={25}
          image="/images/purse_2.png"
          rating={4.5}
          isHot={true}
        />
        <Card
          title="Nike Air Max 270"
          price={150}
          oldPrice={200}
          discount={25}
          image="/images/shoe_2.png"
          rating={4.5}
          isHot={true}
        />
        <Card
          title="Nike Air Max 270"
          price={150}
          oldPrice={200}
          discount={25}
          image="/images/shoe_3.png"
          rating={4.5}
          isHot={true}
        />
        <Card
          title="Nike Air Max 270"
          price={150}
          oldPrice={200}
          discount={25}
          image="/images/shoe_1.png"
          rating={4.5}
          isHot={true}
        />

      </div>
    </div>
  );
};

export default Hero;
