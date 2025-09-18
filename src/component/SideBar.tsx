
const SideBar = () => {
  return (
    <>
    <div id="sidebar">
        <div id="first">
        <div id="hotdeals">
            <h2>Hot Deals</h2>
        </div>
        <div id="categories">
            <div class="cat_head">
            <h2>Nike</h2><span>2</span>
            </div>
            <div class="cat_head">
            <h2>Adidas</h2><span>2</span>
            </div>
            <div class="cat_head">
            <h2>Airmax</h2><span>2</span>
            </div>
            <div class="cat_head">
            <h2>Airmax</h2><span>2</span>
            </div>
            <div class="cat_head">
            <h2>Van</h2><span>2</span>
            </div>
            <div class="cat_head">
            <h2>All Stars</h2><span>2</span>
            </div>
        </div>
        </div>
        <div id="second">
        <div id="prices">
            <h2>Prices</h2>
        </div>
        <div id="randediv">
            <div id="range">
            <h2>Range: </h2><span>$13.99 - $25.99</span>
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
            <div id="colors">
                <div class="color1">c1</div>
                <div class="color2">c2</div>
                <div class="color3">c3</div>
                </div>
        </div>
        </div>

        <div id="fourth">
        <div id="brands">
            <h2>Brands</h2>
        </div>
        <div id="categories">
            <div class="cat_head">
            <h2>Nike</h2><span>99</span>
            </div>
            <div class="cat_head">
            <h2>Adidas</h2><span>99</span>
            </div>
            <div class="cat_head">
            <h2>Airmax</h2><span>99</span>
            </div>
            <div class="cat_head">
            <h2>Airmax</h2><span>99</span>
            </div>
            <div class="cat_head">
            <h2>Van</h2><span>99</span>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default SideBar
