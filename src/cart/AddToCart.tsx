import { MdAddShoppingCart } from "react-icons/md";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa";

const AddToCart = () => {
  return (
    <section>
      <div className="w-[150px] flex gap-4 items-center justify-center border border-black py-3 px-3 rounded-full cursor-pointer bg-white">
        <MdAddShoppingCart className="text-red-600 text-xl" />
        <p className="text-sm font-medium">Add to Cart</p>
      </div>
      {/* <div>
        <FaPlus />
        <FaMinus />
      </div> */}
    </section>
  );
};

export default AddToCart;
