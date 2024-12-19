import { useState } from "react";
import { dessertsImage } from "../dessertsuggessition/DessertsImg";
import YourCart from "../yourcart/YourCart";

const HomePage = () => {
  const [selectedDessert, setSelectedDessert] = useState([]);
  const [clickedItem, setClickedItem] = useState();

  const handleSelected = (ind: number, item) => {
    console.log(ind, item);
    setSelectedDessert((prev) => [...prev, item]);
    setClickedItem(ind);
  };
  console.log(selectedDessert);
  return (
    <main className="p-8">
      <section className="">
        <h1 className="text-4xl font-bold py-2">Desserts</h1>
      </section>
      <section className="flex max-sm:block">
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          {dessertsImage.map((item, ind) => (
            <div key={ind} className="relative">
              <img
                src={item.image}
                alt="desserts"
                className={`w-auto rounded-xl cursor-pointer ${
                  clickedItem === ind
                    ? "border-2 border-orange-600"
                    : clickedItem
                }`}
                onClick={() => handleSelected(ind, item)}
              />
              <div className="flex justify-center absolute bottom-20 right-14 max-sm:bottom-20 max-sm:left-20">
                <p className="">{item.cart}</p>
              </div>
              <div className="mt-8">
                <h1 className="text-red-400">{item.fname}</h1>
                <p className="font-bold">{item.ingredients}</p>
                <span className="text-orange-500 font-semibold">
                  {item.cost}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="ml-6 max-sm:ml-auto">
          <YourCart />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
