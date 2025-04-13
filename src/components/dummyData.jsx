import { useState, useEffect } from "react";
import ShopComponent from "./shopComponent";
import merch1 from "../images/merch1.png";
import merch2 from "../images/merch2.png";
import merch3 from "../images/merch3.png";
import merch4 from "../images/merch4.png";
import merch5 from "../images/merch5.png";
import merch6 from "../images/merch6.png";
import merch7 from "../images/merch7.png";
import merch8 from "../images/merch8.png";
import merch9 from "../images/merch9.png";
import merch10 from "../images/merch10.png";
import merch11 from "../images/merch11.png";
import merch12 from "../images/merch12.png";
import FilterOptions from "./filterOptions";
import SearchBar from "./searchBar";
import Navbar from "./navbar";

const DummyData = () => {
    const allProducts = [
        { id: 1, source: merch1, name: "Basic Tee", price: 19.99, quantity: 0, productSize: "" },
        { id: 2, source: merch2, name: "Premium Hoodie", price: 89.99, quantity: 0, productSize: "" },
        { id: 3, source: merch3, name: "Classic Sweater", price: 39.99, quantity: 0, productSize: "" },
        { id: 4, source: merch4, name: "Luxury Cashmere", price: 129.99, quantity: 0, productSize: "" },
        { id: 5, source: merch5, name: "Sport Pullover", price: 45.99, quantity: 0, productSize: "" },
        { id: 6, source: merch6, name: "Summer Tank", price: 14.99, quantity: 0, productSize: "" },
        { id: 7, source: merch7, name: "Winter Parka", price: 199.99, quantity: 0, productSize: "" },
        { id: 8, source: merch8, name: "Designer Blouse", price: 79.99, quantity: 0, productSize: "" },
        { id: 9, source: merch9, name: "Denim Jacket", price: 59.99, quantity: 0, productSize: "" },
        { id: 10, source: merch10, name: "Silk Scarf", price: 24.99, quantity: 0, productSize: "" },
        { id: 11, source: merch11, name: "Leather Gloves", price: 34.99, quantity: 0, productSize: "" },
        { id: 12, source: merch12, name: "Wool Coat", price: 149.99, quantity: 0, productSize: "" },
    ];
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [filters, setFilters] = useState({
        priceRange: null,
        searchQuery: ""
    });

    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addToCart = (item) => {
        // console.log(`Items from cart: ${item[1].productSize}`);
        setCartItems(prevItem => {
            return item.filter(prod => prod.quantity > 0);
        });
        // setCartTotal(prevTotal => {
        //     prevTotal = cartItems.map(item => item.quantity + prevTotal)
        //     return prevTotal;
        // })
    }


    const applyFilters = () => {
        let results = [...allProducts];
        
        // Apply search filter
        if (filters.searchQuery && filters.searchQuery.trim() !== "") {
            const lowercasedQuery = filters.searchQuery.toLowerCase();
            results = results.filter(product => 
                product.name.toLowerCase().includes(lowercasedQuery)
            );
        }
        
        setFilteredProducts(filteredProducts);
    };

    // Update state and then apply filters
    const handleSearch = (query) => {
        console.log(`Search Query: ${query}`)
        setFilteredProducts(prev => {
            // const newFilters = { ...prev, searchQuery: query };
            // return newFilters;
            var newSearch = query;
            filteredProducts.map(product => {
                console.log("Product here: ", product)
                for (let i = 0; i < product.name.length; i++) {
                    if (product.name[i] == query[i]) {
                        newSearch = product.name;
                        return;
                    }
                }
                console.log(`New Search: ${newSearch}`)
            })
            var updatedList;
            updatedList = allProducts.filter(prod => prod.name == newSearch);
            return updatedList;
        });
    };

    const handleFilterChange = (newFilters) => {
        setFilteredProducts(prevProds => {
            const newList = [...allProducts];
            console.log(`NewList: ${Object.getOwnPropertyNames(prevProds[0]), newList.length}`)
            const updatedList = newList.filter(prod => prod.price < newFilters.priceRange)
            console.log(`Updated list: ${updatedList.length}`)
            return updatedList
        })
    };

    useEffect(() => {
        applyFilters();
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setCartTotal(total);
        console.log("Cart items", cartTotal);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        // console.log(filteredProducts);
    }, [filters, filteredProducts, cartItems]); 

    return (
        <>
        <Navbar 
        cartTotal={cartTotal}
        cartItems={cartItems}
        />
        <div className="flex bg-blue-100">
            <FilterOptions 
                onFilterChange={handleFilterChange} 
                currentFilters={filters}
            />
            <div className="flex-1 ml-64">
                <SearchBar onSearch={handleSearch} />
                <ShopComponent 
                    data={filteredProducts}
                    addToCart={addToCart} 
                />
            </div>
        </div>
        </>
    );
};

export default DummyData;