import { useEffect, useState } from 'react';
import '../css/navbar.css'
import '../css/cart.css'
import logo from '../images/msa-logo.png'
import { Link, useLocation } from 'react-router-dom';

function Navbar({ cartTotal, cartItems }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])
  const [amount, setAmount] = useState(new Array(3).fill(0))
  const [total, setTotal] = useState(0);

  const handleCartClick = () => {
    // setProducts(products);
    // console.log(products);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = "/cart"
    // navigate("/cart");
  };

  function toggleClick() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
      <div>
        <div className="bg-white p-10 flex justify-between fixed z-10 w-full m-0">
          <div className="logo-desc">
            <img src={logo} className="logo" /><Link to='/'></Link>
          </div>
          {/* <div className="flex"> */}
          {/* <ul 
          id="menuList" 
          className={`menuList-${menuOpen ? 'open' : 'closed'}`}
          className='flex gap-4'
          > */}
            <div>
            <li className="text-white text-4xl"><Link to='/'>Home</Link></li>
            <li className="text-white text-4xl"><Link to='/shop'>Shop</Link></li>
            </div>
            {/* <div className="cart-shop">
              <button
                onClick={handleCartClick}
                className="cart-shop-btn"
              >
                {total > 0 && (
                  <div className="cart-circle">{total}</div>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  width="48px"
                  height="48px"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.7c.72 0 1.34-.38 1.66-.97l3.86-7.73c.27-.53.08-1.17-.43-1.47-.51-.3-1.17-.13-1.49.38L16.5 10H7.3L6.27 8H2V6h4.38L9.4 12l-1.14 2.03c-.2.36-.07.82.32 1.03.39.21.85.07 1.06-.27l1.38-2.47H16.5l3.53-7H7.27l-.94-2H1V2h5.21l1.61 3.4L7.16 14z" />
                </svg>
              </button>
            </div> */}
            <div className="cart-shop">
                <button
                    onClick={handleCartClick}
                    className="cart-shop-btn"
                >
                    {cartTotal > 0 && (
                        <div className="cart-circle">{cartTotal}</div>
                    )}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        width="48px"
                        height="48px"
                    ><li className="text-white text-4xl"><Link to='/cart'></Link></li>
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.7c.72 0 1.34-.38 1.66-.97l3.86-7.73c.27-.53.08-1.17-.43-1.47-.51-.3-1.17-.13-1.49.38L16.5 10H7.3L6.27 8H2V6h4.38L9.4 12l-1.14 2.03c-.2.36-.07.82.32 1.03.39.21.85.07 1.06-.27l1.38-2.47H16.5l3.53-7H7.27l-.94-2H1V2h5.21l1.61 3.4L7.16 14z" />
                    </svg>
                </button>
            {/* </div> */}
          {/* </ul> */}
          {isMobile && (
           <div id="menu-icon" onClick={toggleClick} className='menu-icon'>
            <div className="mobile-hyperlink"></div>
            <div className="mobile-hyperlink"></div>
            <div className="mobile-hyperlink"></div>
          </div> 
          )} 
          </div>
        </div>
      </div>
    );
}

export default Navbar;