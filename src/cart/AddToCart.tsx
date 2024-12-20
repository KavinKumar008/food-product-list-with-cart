import { MdAddShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { desert } from "../types/dessert";
// import increment from "../assets/icon-increment-quantity.jpg";
// import decrement from "../assets/icon-decrement-quantity.jpg";

const AddToCart = ({
  selectedDessert,
  setSelectedDessert,
  selectedItem,
}: {
  selectedDessert: desert[];
  setSelectedDessert: React.Dispatch<React.SetStateAction<any[]>>;
  selectedItem: number;
}) => {
  const [count, setCount] = useState(1);

  const selectedDessertItem = selectedDessert.find(
    (dessert) => dessert.id === selectedItem
  );

  const handleIncrement = () => {
    setCount((curr) => curr + 1);
  };

  const handleDecrement = () => {
    setCount((curr) => Math.max(curr - 1, 0));
  };

  console.log(selectedDessertItem);

  return (
    <section>
      {/* <div className="w-[150px] flex gap-4 items-center justify-center border border-black py-3 px-3 rounded-full cursor-pointer bg-white max-lg:py-3 max-lg:px-3">
        <MdAddShoppingCart className="text-red-600 text-xl max-sm:text-lg max-lg:text-sm" />
        <p className="text-sm font-semibold max-sm:text-sm max-lg:text-[12px]">
          Add to Cart
        </p>
      </div> */}
      {selectedDessertItem ? (
        <div className="w-[150px] bg-orange-600 flex justify-between items-center text-sm text-white py-3 px-3 rounded-full cursor-pointer">
          <FaMinus
            className="border border-white rounded-full"
            onClick={handleDecrement}
          />
          <p className="text-white font-medium">{count}</p>
          <FaPlus
            className="border border-white rounded-full"
            onClick={handleIncrement}
          />
        </div>
      ) : (
        <div className="w-[150px] flex gap-4 items-center justify-center border border-black py-3 px-3 rounded-full cursor-pointer bg-white max-lg:py-3 max-lg:px-3">
          <MdAddShoppingCart className="text-red-600 text-xl max-sm:text-lg max-lg:text-sm" />
          <p className="text-sm font-semibold max-sm:text-sm max-lg:text-[12px]">
            Add to Cart
          </p>
        </div>
      )}
    </section>
  );
};

export default AddToCart;
