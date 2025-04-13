import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Shop from "./pages/shop";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import UserAuthentication from "./components/auth";
// import ShopComponent from "./components/shopComponent";
// import DummyData from "./components/dummyData";

function App() {
  return (
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />    
          <Route path="/shop" element={<Shop />} />    
          <Route path="/cart" element={<Cart /> } />      
          <Route path="/checkout" element={<Checkout /> } />      
          <Route path="/profile" element={<UserAuthentication /> } />                
        </Routes>
      </Router>
  );
}

export default App;
