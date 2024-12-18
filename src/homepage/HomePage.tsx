import { dessertsImage } from "../dessertsuggessition/DessertsImg";
import YourCart from "../yourcart/YourCart";

const HomePage = () => {
  return (
    <main>
      <section>
        <h1 className="text-4xl font-bold">Desserts</h1>
      </section>
      <section className="border-2 border-yellow-500">
        <div className="grid grid-cols-3 gap-4">
          {dessertsImage.map((item) => (
            <div className="relative">
              <img
                src={item.image}
                alt="desserts"
                className="w-auto rounded-xl"
              />
              <div className="flex justify-center absolute bottom-20 right-24 max-lg:bottom-10 max-lg:left-24">
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
        {/* <div className="flex">
          <YourCart />
        </div> */}
      </section>
    </main>
  );
};

export default HomePage;
