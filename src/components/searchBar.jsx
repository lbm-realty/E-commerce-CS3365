import { useEffect, useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    useEffect(() => {
        setQuery(query);
        handleSearch();
        console.log(query)
    }, [query])
    const handleSearch = () => {
        onSearch(query); // Pass the query to parent component
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="pt-40 px-20 flex justify-center bg-blue-100">
            <div className="relative w-full max-w-2xl">
                <input
                    className="border-gray-500 border-2 px-4 py-3 w-full text-gray-700 rounded-3xl pr-12"
                    type="text"
                    placeholder="Search for a product..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={handleSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;