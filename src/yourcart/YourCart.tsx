import { useState } from "react";
import illustration from "../assets/illustration-empty-cart.jpg";
import DialogConfirm from "../dialog/DialogConfirm";
import carbon from "../assets/icon-carbon-neutral.jpg";
// import { dessertsImage } from "../dessertsuggessition/DessertsImg";
import remove from "../assets/icon-remove-item.jpg";
import { desert } from "../types/dessert";

const YourCart = ({
  selectedDessert,
  selectedItem,
  setSelectedDessert,
  setSelectedItem,
}: {
  selectedDessert: desert[];
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
  setSelectedDessert: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const dialogOpen = () => {
    setIsDialogOpen(true);
  };

  const selectedDessertItem = selectedDessert.find(
    (dessert) => dessert.id === selectedItem
  );

  const handleDelete = (itemId: number) => {
    // console.log(selectedItem);
    const filteredData = selectedDessert.filter((item) => item.id !== itemId);
    setSelectedDessert(filteredData);
    // Clear selectedItem if it matches the deleted item
    if (selectedItem === itemId) {
      setSelectedItem(0); // or null, based on your logic
    }
    console.log("Deleting item ID:", itemId);
    console.log("Updated Cart:", filteredData);
  };

  // console.log(selectedDessert);
  const overallTotal = selectedDessert.reduce((total, num) => {
    return total + (num.total || 0);
  }, 0);

  const defaultTotal = selectedDessert.reduce(
    (total, num) => total + parseFloat(num.cost.replace(/[^0-9.]/g, "")),
    0
  );

  console.log(defaultTotal);

  return (
    <main>
      {selectedDessertItem ? (
        <section className="w-[400px] h-auto shadow-xl rounded-lg">
          <h1 className="text-red-500 text-3xl font-bold p-2 max-sm:text-xl">
            Your Cart ({selectedDessert.length})
          </h1>
          <div className="p-6">
            {selectedDessert.map((item) => (
              <div
                key={item.id}
                className="flex justify-between p-2 border-b border-b-red-100"
              >
                <div>
                  <p className="font-semibold">
                    <h1>{item.fname}</h1>
                  </p>
                  <div className="grid grid-cols-[auto_1fr_1fr] gap-3">
                    <span className="text-orange-600">{item.count || 1}x</span>
                    <span className="font-[300] text-sm content-center place-content-center">
                      &#64;{item.cost}
                    </span>
                    <span className="text-red-400 font-medium">
                      {item.total ||
                        parseFloat(item.cost.replace(/[^0-9.]/g, "")).toFixed(
                          2
                        )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src={remove}
                    alt="remove"
                    className="w-[20px] p-1 border-2 border-red-400 rounded-full cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center p-4">
              <span>Order Total</span>
              <span className="text-3xl font-bold">
                ${overallTotal > 0 ? overallTotal : defaultTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-center gap-2 bg-yellow-50 p-3 mt-4 rounded-xl">
              <img
                src={carbon}
                alt="tree"
                className="w-[20px] bg-transparent"
              />
              <p>
                This is a <b>carbon neutral</b> delivery
              </p>
            </div>
            <div className="flex justify-center mt-3 bg-orange-700 p-2 rounded-3xl cursor-pointer">
              <button
                type="button"
                onClick={dialogOpen}
                className="text-white border-none outline-none cursor-pointer"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="">
          <div className="shadow-2xl w-[350px] h-auto p-4 rounded-lg max-sm:w-[320px]">
            <h1 className="text-red-500 text-3xl font-bold py-4 max-sm:text-xl">
              Your Cart (0)
            </h1>
            <div className="flex justify-center flex-col items-center">
              <img
                src={illustration}
                alt="cartimg"
                className="text-xl w-[150px] h-[150px]"
              />
              <p className="text-red-500 text-lg font-medium max-sm:text-sm">
                Your added items will appear here
              </p>
            </div>
          </div>
        </section>
      )}
      <DialogConfirm
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        selectedDessert={selectedDessert}
        setSelectedDessert={setSelectedDessert}
      />
      {/* <AddToCart
        selectedDessert={selectedDessert}
        setSelectedDessert={setSelectedDessert}
        selectedItem={selectedItem}
      /> */}
    </main>
  );
};

export default YourCart;
