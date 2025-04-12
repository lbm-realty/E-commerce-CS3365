// const FilterOptions = () => {
//     return (
//         <div className="flex-col items-center bg-gray-100 fixed h-screen px-4 z-2">
//             <h2 className="text-black mt-80 text-2xl">Date</h2>
//             <h2 className="text-black text-2xl">Price</h2>
//         </div>
//     );
// }

import { useState } from "react";

// export default FilterOptions;

const FilterOptions = ({ onFilterChange, currentFilters }) => {
    const [light, setLight] = useState(new Array(4).fill(false))
    const handlePriceFilter = (index, price) => {
        // Toggle filter if the same range is clicked again
        // const newRange = currentFilters.priceRange === range ? null : range;
        console.log(light)
        onFilterChange({ priceRange: price });
        setLight(prev => {
            const newEffect = [...prev]
            newEffect.fill(false);
            newEffect[index] = !newEffect[index]
            return newEffect
        })
        // console.log(`Here, filtered options, ${range}`)
    };

    // const isActive = (range) => currentFilters.priceRange === range;

    return (
        <div className="w-64 pt-50 px-4 bg-gray-100 fixed h-screen">
            <h2 className="text-black text-2xl mb-6">Filters</h2>
            
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                    <button
                        onClick={() => handlePriceFilter(0, 25)}
                        style={{ background: "white" }}
                        className={`w-full py-2 px-4 rounded-lg text-left transition-colors ${
                            light[0] 
                            ? 'text-blue-400 border-solid border-blue-400' 
                            : 'text-black hover:bg-gray-200'
                        }`}
                    >
                        Under $25
                    </button>
                    <button
                        onClick={() => handlePriceFilter(1, 50)}
                        style={{ background: "white" }}
                        className={`w-full py-2 px-4 rounded-lg text-left transition-colors ${
                            light[1] 
                            ? 'text-blue-400 border-solid border-blue-400' 
                            : 'text-black hover:bg-gray-200'
                        }`}
                    >
                        Under $50
                    </button>
                    <button
                        onClick={() => handlePriceFilter(2, 100)}
                        style={{ background: "white" }}
                        className={`w-full py-2 px-4 rounded-lg text-left transition-colors ${
                            light[2] 
                            ? 'text-blue-400 border-solid border-blue-400' 
                            : 'text-black hover:bg-gray-2000'
                        }`}
                    >
                        Under $100
                    </button>
                    <button
                        onClick={() => handlePriceFilter(3, 10000)}
                        style={{ background: "white" }}
                        className={`w-full py-2 px-4 rounded-lg text-left transition-colors ${
                            light[4]
                            ? 'text-blue-400 border-solid border-blue-400' 
                            : 'text-black hover:bg-gray-200'
                        }`}
                    >
                        All Prices
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterOptions;