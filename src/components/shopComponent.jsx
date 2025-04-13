import { useEffect, useState } from "react";

const ShopComponent = ({ data, addToCart }) => {
  const sizes = ["S", "M", "L", "XL"];
  const [selectSize, setSelectSize] = useState(new Array(12).fill(false));
  const [size, setSize] = useState(new Array(12).fill(""))
  const [amount, setAmount] = useState(new Array(12).fill(0))
  const [total, setTotal] = useState(0);
  console.log(`Props in shopcomp: ${data.length}`)
  const current_products = data;
  const [products, setProducts] = useState(data);

  useEffect(() => {
      setTotal(() => {
        return amount.reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0);
      })
      const updatedProducts = data.map((product, index) => ({
        ...product,
        quantity: amount[index],
        productSize: size[index]
      }));
      setProducts(updatedProducts)
      addToCart(updatedProducts)
  }, [amount, size, data]); 

  const handleCartAmount = (index1) => {
    if (size[index1] === "") {
      alert("Please select a size");
      return;
    }
    setAmount((prevAmount) => {
      const newAmount = [...prevAmount];
      newAmount[index1] += 1
      return newAmount
    })
  }
  const handleSizeSelection = (index1, index, uniqueSize) => {
    setSize((prevSize) => {
      const currSize = [...prevSize];
      currSize[index1] = sizes[index];
      return currSize
    });
    setSelectSize((prevSize) => {
      const newSize = [...prevSize];
      newSize[index1] = !newSize[index1];
      return newSize
    })    
    console.log(selectSize);
  }
  
  return (
      <div className="flex bg-blue-100 p-0">
        <div className="py-20 px-10 ml-1">
          <div className="flex flex-wrap justify-center gap-5 p-2">
            {products.map((product, index1) => (
              <div className="bg-purple-100 p-4 rounded-2xl flex flex-col items-center">
                <img
                  className="h-80"
                  src={product.source}
                  alt="merch1"
                />
                <h3 className="text-black font-bold text-2xl">{product.name}</h3>
                <h3 className="text-black font-bold text-2xl">${product.price}</h3>
                <div className="flex gap-2">
                  <div>
                  <button className="flex-none text-white px-2 items-center flex border-white border-solid border-2"
                    onClick={() => handleCartAmount(index1)}
                    >Add to cart
                  </button>
                  </div>
                  <div className="flex">
                    {!selectSize[index1] && (
                      <>
                    <button 
                      className="text-white px-2"
                      onClick={() => handleSizeSelection(index1)}
                      >Size
                      </button>
                      </>
                      )}
                    {selectSize[index1] && (
                      <div className="flex flex-col bg-black px-2 items-center rounded-lg">
                        <div>----</div>
                        {sizes.map((uniqueSize, index) => (
                        <>
                          <div className="cursor-pointer" onClick={() => handleSizeSelection(index1, index, uniqueSize)}>{uniqueSize}</div>
                          <div>----</div>
                        </>
                      ))}
                      </div>
                    )}
                    {size[index1] && (
                        <div className="ml-1 px-2 bg-black rounded-full font-bold">{size[index1]}</div>
                       )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ShopComponent;
