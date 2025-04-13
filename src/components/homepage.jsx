import { useState, useEffect } from 'react';
import merch1 from "../images/merch1.png";
import merch4 from "../images/merch4.png";
import merch12 from "../images/merch12.png";
// import merch1 from "../images/merch1.png";

import Navbar from './navbar';
// import { ShoppingBag, Search, ChevronRight } from 'lucide-react';

export default function Homepage() {
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      name: "Premium Tee",
      price: 29.99,
      source: "/api/placeholder/400/500"
    },
  ]);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-blue-50 pt-40 text-black">
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Style</h1>
            <p className="text-lg mb-8">Explore our collection of premium clothing and accessories.</p>
            <div className="flex space-x-4">
              <button onClick={() => {window.location.href = '/shop'}} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl flex items-center">
                Shop Now 
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-20">
        <div className="mx-auto w-fit-content">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop Now!</h2>
          <div className="flex justify-center sm:grid-cols-1 md:grid-cols-1 gap-6">
              {[merch1,  merch4, merch12].map((item) => {
                return (
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-purple-100 flex items-center justify-center">
                  <img 
                    src={item} 
                    className="h-48 w-60 object-cover"
                  />
                </div>
                <div 
                onClick={() => {window.location.href = '/shop'}}
                className="p-4">
                  <h3 className="font-bold text-xl">Latest Merch</h3>
                  <button className="mt-2 text-purple-600 font-medium flex items-center">
                    View All 
                  </button>
                </div>
              </div>
              )
              })}
          </div>
        </div>
      </div>

      <div className="py-16 px-8 bg-purple-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Join Our Newsletter</h2>
          <p className="mb-6 max-w-lg mx-auto">Stay updated with the latest products, exclusive offers and more.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-xl flex-1"
            />
            <button className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}