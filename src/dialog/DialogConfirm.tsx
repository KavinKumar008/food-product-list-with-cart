import tick from "../assets/icon-order-confirmed.jpg";
import { dessertsImage } from "../dessertsuggessition/DessertsImg";
import * as Dialog from "@radix-ui/react-dialog";

const DialogConfirm = ({ isDialogOpen, setIsDialogOpen }) => {
  return (
    <Dialog.Root open={isDialogOpen}>
      {/* <Dialog.Trigger asChild></Dialog.Trigger> */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <section className="">
            <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
              <div className="flex flex-col gap-4">
                <div>
                  <img
                    src={tick}
                    alt="orderconfirmed"
                    className="w-8 h-auto cursor-pointer"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-black">Order Confirmed</h1>
                  <p className="text-red-400 text-[12px]">
                    We hope you enjoyed your food!
                  </p>
                </div>
              </div>
            </Dialog.Title>
            <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11"></Dialog.Description>
            <div className=" bg-yellow-50 p-6 rounded-lg mt-4">
              {dessertsImage.map((item, ind) => (
                <div
                  key={ind}
                  className="grid grid-cols-[1fr_auto] text-center p-2 border-b border-gray-200"
                >
                  {/* <div className="flex gap-4 justify-start items-center">
                    <div className="flex justify-center items-center">
                      <img
                        src={item.image}
                        alt=""
                        className="w-[50px] h-auto"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[12px]">
                        {item.ingredients}
                      </p>
                      <span className="text-[12px] text-red-400">
                        &#64;{item.cost}
                      </span>
                    </div>
                  </div>
                  <div className="grid content-center place-content-end">
                    <p>{item.total}</p>
                  </div> */}
                </div>
              ))}
              <div className="flex justify-between mt-6">
                <p className="text-red-500 text-sm">Order Total</p>
                <span className="font-bold text-2xl">$85.00</span>
              </div>
            </div>
            <div className="flex justify-center mt-3 bg-orange-700 p-2 rounded-3xl cursor-pointer">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="text-white border-none outline-none"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Start New Order
                </button>
              </Dialog.Close>
            </div>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogConfirm;
