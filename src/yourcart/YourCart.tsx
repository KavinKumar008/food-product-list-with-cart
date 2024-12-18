import illustration from "../assets/illustration-empty-cart.jpg";

const YourCart = () => {
  return (
    <div className="shadow-2xl w-[500px] h-[300px] rounded-lg">
      <h1 className="text-red-500 text-4xl font-bold p-4">Your Cart (0)</h1>
      <div className="flex justify-center flex-col items-center">
        <img
          src={illustration}
          alt=""
          className="text-xl w-[200px] h-[200px]"
        />
        <p className="text-red-500 text-xl font-bold">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
};

export default YourCart;
