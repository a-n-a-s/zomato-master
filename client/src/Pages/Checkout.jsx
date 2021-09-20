import React from "react";
import FoodItem from "../Components/Cart/FoodItem";
import AddressList from "../Components/Checkout/AddressList";
const Checkout = () => {
  const address = [
    {
      name: "Home",
      address: "India",
    },
    {
      name: "Gym",
      address: "India",
    },
    {
      name: "Work",
      address: "India",
    },
  ];

  return (
    <div className="my-3  flex flex-col gap-3 items-center ">
      <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
      <div className="w-full md:w-3/5 rounded-lg py-3 shadow-lg bg-white flex flex-col items-center">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="w-full flex flex-col gap-2 items-center">
          <h5 className="tracking-wider text-base">Order From</h5>
          <div className="w-full flex flex-col items-center text-gray-400 ">
            <h4>Dominmo's Pizza</h4>
            <small>Gt Worls , Magadi Road , Bangolore</small>
          </div>
          <div className="my-4 px-4 w-full md:w-3/5 flex gap-2 flex-col">
            <FoodItem name="Pizza" price={200} quantity={5} />
            <FoodItem name="Pizza" price={200} quantity={5} />
            <FoodItem name="Pizza" price={200} quantity={5} />
          </div>
          <div className=" w-full md:w-3/5 flex gap-2 flex-col">
            
              <AddressList address={address}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
