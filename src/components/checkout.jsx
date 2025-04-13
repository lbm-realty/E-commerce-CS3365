import { useState } from 'react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const retreivedItems = localStorage.getItem("cartItems");
  const items = retreivedItems ? JSON.parse(retreivedItems) : null;

  const [orderComplete, setOrderComplete] = useState(false);
  
  // Mock cart items
  const cartItems = [
    { id: 1, name: "Premium Tee", size: "L", price: 29.99, quantity: 1, source: "/api/placeholder/100/100" },
    { id: 2, name: "Classic Hoodie", size: "M", price: 49.99, quantity: 2, source: "/api/placeholder/100/100" }
  ];
  
  // Calculate order summary
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process order (mock)
    setTimeout(() => {
      setOrderComplete(true);
    }, 1000);
  };
  
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-green-600 text-3xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-black">Thank You For Your Order!</h2>
            <p className="text-gray-600 mb-6">Your order has been placed and is being processed.</p>
            <p className="font-medium mb-1 text-black">Order #: {Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</p>
            <p className="text-gray-600 mb-8">We've sent a confirmation email to {formData.email}</p>
            <button 
              className="bg-purple-600 text-white font-bold py-3 px-8 rounded-xl"
              onClick={() => window.location.href = "/"}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-blue-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">Checkout</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="bg-blue-200 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-black">Checkout Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-medium text-black">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-black">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-black">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-black">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block mb-1 font-medium text-black">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-black">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-black">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-black">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2 mt-4">
                    <h4 className="font-bold text-black mb-2">Payment Details</h4>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-1 font-medium text-black">Name on Card</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-1 font-medium text-black">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-black">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-black">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className="w-full p-3 border border-gray-300 rounded-xl text-black"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button 
                  type="submit" 
                  className="bg-purple-600 text-white font-bold py-3 px-8 rounded-xl"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-blue-200 p-6 rounded-2xl sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-black">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.source} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-medium text-black">{item.name}</h4>
                      <p className="text-sm text-gray-600">Size: {item.size} | Qty: {item.quantity}</p>
                      <p className="font-medium text-black">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-300 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-black">Subtotal</span>
                  <span className="text-black">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Shipping</span>
                  <span className="text-black">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Tax</span>
                  <span className="text-black">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-300">
                  <span className="text-black">Total</span>
                  <span className="text-black">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}