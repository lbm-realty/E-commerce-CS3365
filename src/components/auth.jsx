import { useState } from 'react';

const UserAuthentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock user data
  const mockUsers = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'test@test.com', password: 'test123' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (isLogin) {
      // Login logic
      const user = mockUsers.find(
        user => user.email === formData.email && user.password === formData.password
      );
      
      if (user) {
        setSuccess('Login successful!');
        setError('');
        setIsAuthenticated(true);
        // In a real app, you would set auth tokens/state here
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Register logic (mock)
      if (mockUsers.some(user => user.email === formData.email)) {
        setError('Email already in use');
      } else {
        setSuccess('Registration successful! You can now login.');
        setIsLogin(true);
        // In a real app, you would add the user to the database
      }
    }
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-blue-50 py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-green-600 text-3xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-black">Welcome back!</h2>
            <p className="text-gray-600 mb-6">You are now logged in as {formData.email}</p>
            <div className="flex gap-4 justify-center">
              <button 
                className="bg-purple-600 text-white font-bold py-3 px-8 rounded-xl"
                onClick={() => window.location.href = "/shop"}
              >
                Go to Shop
              </button>
              <button 
                className="border-2 border-purple-600 text-purple-600 font-bold py-3 px-8 rounded-xl"
                onClick={() => setIsAuthenticated(false)}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">
          {isLogin ? 'Login' : 'Create Account'}
        </h1>
        
        <div className="bg-purple-100 p-6 rounded-2xl shadow-md">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
              {success}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
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
                <label className="block mb-1 font-medium text-black">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl text-black"
                  required
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button 
                type="submit" 
                className="w-full bg-purple-600 text-white font-bold py-3 px-8 rounded-xl"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </button>
            </div>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-black">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setSuccess('');
                  setFormData({ email: '', password: '' });
                }}
                className="text-purple-600 font-medium"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
          
          {isLogin && (
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm">
                Demo credentials: user@example.com / password123
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserAuthentication;