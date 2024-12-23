import { useState } from "react";
import { dessertsImage } from "../dessertsuggessition/DessertsImg";
import YourCart from "../yourcart/YourCart";
import AddToCart from "../cart/AddToCart";
import { desert } from "../types/dessert";

const HomePage = () => {
  const [selectedDessert, setSelectedDessert] = useState<desert[] | []>([]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleSelected = (item: any) => {
    setSelectedItem(item.id);
    setSelectedDessert((prev) => {
      const isAlreadySelected = prev.some((dessert) => dessert.id === item.id);
      if (isAlreadySelected) {
        // If the item is already selected, remove it from the array
        return prev.filter((dessert) => dessert.id !== item.id);
      } else {
        // Otherwise, add the item to the array
        return [...prev, item];
      }
    });
  };
  selectedDessert.some((dessert) => console.log(dessert.id));
  console.log(selectedItem);
  return (
    <main className="p-8">
      <section className="">
        <h1 className="text-4xl font-bold py-2">Desserts</h1>
      </section>
      <section className="flex max-sm:block">
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          {dessertsImage.map((item) => (
            <div key={item.id} className="relative">
              <img
                // onClick={() => setSelectedItem(ind)}
                src={item.image}
                alt="desserts"
                className={`w-auto rounded-xl cursor-pointer ${
                  selectedDessert.some((dessert) => dessert.id === item.id)
                    ? "border-2 border-orange-600"
                    : "border-transparent"
                }`}
                onClick={() => handleSelected(item)}
              />
              <div className="flex justify-center absolute bottom-20 right-14 max-sm:bottom-20 max-sm:left-20">
                <p className="">
                  {/* {item.cart} */}
                  <AddToCart
                    selectedDessert={selectedDessert}
                    setSelectedDessert={setSelectedDessert}
                    selectedItem={item.id}
                  />
                </p>
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
          <YourCart
            selectedDessert={selectedDessert}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setSelectedDessert={setSelectedDessert}
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
