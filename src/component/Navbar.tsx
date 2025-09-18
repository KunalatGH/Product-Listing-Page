const Navbar = () => {
  return (
    <>
    
    <nav
      id="navbar"
      className=""
    >
      <div id="left" className="flex items-center text-center">
        <div id="logo" className="">
          <svg
            width="51"
            height="44"
            viewBox="0 0 51 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="51" height="44" rx="16" fill="#40BFFF" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.0035 20.2715C37.11 21.2261 37.11 22.7739 36.0035 23.7285L27.5035 31.0618C26.397 32.0164 24.603 32.0164 23.4965 31.0618L14.9965 23.7285C13.8901 22.7739 13.8901 21.2261 14.9965 20.2715L23.4965 12.9382C24.603 11.9836 26.397 11.9836 27.5035 12.9382L36.0035 20.2715ZM25.5 18.1236L21.0069 22L25.5 25.8764L29.9931 22L25.5 18.1236Z"
              fill="white"
            />
          </svg>
        </div>
        <div id="ecom" className="">
          E-Comm
        </div>
      </div>
      <div id="center" className="flex gap-8 text-white text-lg font-semibold">
        <a href="Home">HOME</a>
        <a href="Bag">BAG</a>
        <a href="Snickers">SNICKERS</a>
        <a href="Snickers">BELT</a>
        <a href="Contact">CONTACT</a>
      </div>
      <div id="cart">
        <div id="cart_img">
          <svg
            width="31"
            height="34"
            viewBox="0 0 31 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4.89478" width="26.1053" height="34" fill="white" />
            <path
              d="M8.59404 27.6958C8.88463 27.6958 9.12021 27.4996 9.12021 27.2575C9.12021 27.0155 8.88463 26.8193 8.59404 26.8193C8.30344 26.8193 8.06787 27.0155 8.06787 27.2575C8.06787 27.4996 8.30344 27.6958 8.59404 27.6958Z"
              fill="#22262A"
              stroke="#22262A"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9604 27.6958C16.251 27.6958 16.4865 27.4996 16.4865 27.2575C16.4865 27.0155 16.251 26.8193 15.9604 26.8193C15.6698 26.8193 15.4342 27.0155 15.4342 27.2575C15.4342 27.4996 15.6698 27.6958 15.9604 27.6958Z"
              fill="#22262A"
              stroke="#22262A"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.80627 13.6708H4.91094L7.01561 24.1896H17.539L19.6436 16.3005H5.96328"
              stroke="#22262A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div id="items">
        Items 
        </div>
        <div id="price">$0.00</div>
      </div>
    </nav>
  <div id="divider"></div>
  </>
  );
};

export default Navbar;
