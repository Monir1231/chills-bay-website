import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MyModral from "./PayModal";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../Redux/features/carts/cartSlice";

function MyPayment() {
  
const carts = useSelector((state)=> state.carts)
console.log(carts)


const dispatch = useDispatch()
  
// cart dec 
const HandleDec = (id) =>{
 dispatch(decreaseQuantity(id))
}

// cart Inc
const HandleInc = (id) =>{
  dispatch(increaseQuantity(id))
}

// cart delete

const RemoveCart = (id) =>{
dispatch(removeFromCart(id))
}

// add new product 

const Addnewitem = () =>{

}




  // const Addnewitem = () => {
  //   const newItem = {
  //     id: CardItem.length + 1,
  //     image: "person1.png",
  //     title: "The 90s with Dj Neptune",
  //     date: "Dec 12 2022",
  //     Location: "Quilox Club",
  //     price: "4500",
  //     time: "9:00 PM",
  //     quantity: 1,
  //   };
  //   setCardItem([...CardItem, newItem]);
  // };




  return (
    <section className="flex flex-col lg:flex-row gap-6 w-[90%] mx-auto mt-24">
      {/* right side  */}
      <div className="flex-1 p-6">
        <h2 className="text-base font-semibold text-[#969DAA]">Your Cart</h2>

        {carts.map((Item) => (
          <div
            key={Item.id}
            className="flex items-center gap-4 mb-6 p-4 border-b-1"
          >
            <img className="w-24 h-24 rounded-lg" src={Item.img} />
            <div className="flex-1">
              <h3>{Item.title}</h3>

              <div className="mt-4">
                <div className="flex gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src="/Calendar.png" />
                    <p className="text-sm text-gray-600">date</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src="/Calendar.png" />
                    <p className="text-sm text-gray-600">loca</p>
                  </div>
                </div>

                <div className=" flex items-center gap-2 mt-1">
                  <img className="w-4 h-4" src="/Clock.png" />
                  <p className="text-sm text-gray-600">time</p>
                </div>
              </div>

              {/* quantuty  */}
              <div className="flex items-center gap-4 mt-4 bg-gray-100 rounded w-fit">
                <button
                  className="py-1 px-2 hover:bg-gray-300"
                  onClick={() =>HandleDec(Item.id)}
                >
                  -
                </button>
                <span>{Item.quantity}</span>
                <button
                  className="py-1 px-2 hover:bg-gray-300 w-fit"
                  onClick={()=>HandleInc(Item.id)}
                >
                  +
                </button>
              </div>

              <p className="mt-2 text-lg font-bold">
                ₦{Item.price * Item.quantity}
              </p>
            </div>
            <button
              onClick={()=>RemoveCart(Item.id)}
              className="py-1.5 px-4 rounded-full bg-red-500 text-base text-white"
            >
              delete
            </button>
          </div>
        ))}

        <button
          onClick={Addnewitem}
          className="py-1.5 px-2 rounded-md bg-primary-500 text-white text-lg"
        >
          Add new button
        </button>
      </div>

      {/* left side  */}
      <div className="flex-1 p-6 border-l-1">
        {/* account section  */}
        <div className="pb-6 mb-6 border-b-1 ">
          <h3 className="text-lg font-semibold mb-2 flex gap-2">
            <img src="/check.png" />
            Account information
          </h3>

          <div className="ms-8 ">
            <p>Tunde Chukwu</p>
            <p>tundechukwu12@gmail.com</p>
          </div>
        </div>

        {/* Phone number section  */}
        <div className="pb-6 mb-6  border-b-1 ">
          <h3 className="text-lg font-semibold mb-2 flex gap-2">
            <img src="/check.png" />
            Phone number
          </h3>

          <div className="ms-8 ">
            <p>+2341123465799</p>
          </div>
        </div>

        {/* payment fieild */}

        {/* <div>
          <h3
            onClick={() => setShowpayment(!Showpayment)}
            className="text-lg font-semibold mb-2 flex gap-2"
          >
            <img src="/check.png" />
            Payment <span className="font-normal text-[#969DAA]">card</span>
            <div className="text-[#969DAA] text-xl">
              <IoIosArrowDown />
            </div>
          </h3>

          {Showpayment && (
            <div className="grid grid-cols-2 gap-2 mt-5 ">
              <input
                type="number"
                placeholder="Card Name"
                className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Card Holder Name"
                className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />

              <input
                type="date"
                placeholder="MM/YY"
                className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="CVV"
                className="w-full p-2 mb-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
        </div> */}

        <div className="bg-gray-100 p-4 rounded-lg mt-5">
          <ul>
            {carts.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.title} {item.quantity}
                </span>
                <span>₦{item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>


             {/* Subtotal */}
          <hr className="my-2" />
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>
              ₦
              {carts.reduce(
                (sum, item) => sum  + item.price * item.quantity,0
              ).toLocaleString()}
            </span>
          </div>

       {/* text  */}
          <div className="flex justify-between mt-2">
            <span>Tax(5%):</span>
            <span>
              ₦
              {(
                carts.reduce((sum, item) => sum + item.price * item.quantity, 0) * 0.05
              ).toLocaleString()}
            </span>
          </div>
           {/* total */}
            <hr className="my-2" />
           <div className="flex justify-between font-bold">
           <span className="text-base text-teal-500">Total aumont:</span>
            <span className="text-base text-red-500">Total ₦{(carts.reduce((sum,item)=> sum + item.price * item.quantity,0) * 1.05).toLocaleString()}</span>

           </div>
           <MyModral/>


        </div>
      </div>
    </section>
  );
}

export default MyPayment;
