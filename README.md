SweatSwag is a lightweight, React-based e-commerce website built for simplicity and aesthetics. This project was created as a demo/mock implementation to showcase frontend e-commerce functionality without relying on backend payment processing services like Stripe.
Show Image
Features

Clean Homepage - Welcoming interface with featured products and categories
Shopping Cart - Simple product selection with size variants
Checkout Process - Streamlined single-page checkout
User Authentication - Mock login/signup system
Responsive Design - Mobile-first approach using Tailwind CSS

Tech Stack

React - Frontend library for building user interfaces
Tailwind CSS - Utility-first CSS framework
Local Storage - For cart persistence across sessions

Getting Started
Prerequisites

Node.js (v14.0.0 or higher)
npm or yarn

Installation

Clone the repository:
bashgit clone https://github.com/yourusername/shopease.git
cd shopease

Install dependencies:
bashnpm install
# or
yarn install

Start the development server:
bashnpm start
# or
yarn start

Navigate to http://localhost:3000 in your browser

Project Structure
shopease/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Homepage.jsx
│   │   ├── Shop.jsx
│   │   ├── Checkout.jsx
│   │   └── UserAuthentication.jsx
│   ├── App.js
│   └── index.js
└── README.md
Personal Notes & Learnings
During the development of this project, I encountered several challenges and learnings:

Initially tried using Lucide React icons, but simplified to avoid additional dependencies
Struggled with the layout of the product cards before settling on the current design
Learned about conditional rendering in React when implementing the size selector
Spent way too much time picking the perfect shade of purple! (totally worth it though)
Had to refactor the checkout form three times before getting it right

The most enjoyable part was actually styling with Tailwind – it's amazing how quickly you can prototype once you get the hang of the utility classes. I was against it at first, but now I'm converted!
Testing Credentials
For testing the authentication:

Email: user@example.com
Password: password123

Known Issues & Future Improvements

 Cart quantity indicator in navigation
 Product detail pages
 Order history for authenticated users
 Dark mode toggle (started but not completed)
 The checkout form validation could be more robust

Demo Data Attribution
The product images used in this demo are placeholder images. In a production environment, you would replace these with actual product images.