import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MyModral from "./PayModal";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../Redux/features/carts/cartSlice";
import { Button } from "@heroui/react";

function MyPayment() {
  const [Showpayment, setShowpayment] = useState(false);

  const carts = useSelector((state) => state.carts);
  // console.log(carts);

  const dispatch = useDispatch();

  // cart dec
  const HandleDec = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // cart Inc
  const HandleInc = (id) => {
    dispatch(increaseQuantity(id));
  };

  // cart delete
  const RemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:w-[90%] w-[95%] mx-auto lg:mt-20 mt-10">
      {/* right side  */}
      <div className=" lg:w-[60%] w-full">
        <h2 className="text-base font-bold text-[#969DAA] ">Your Cart</h2>

        {carts.map((Item) => (
          <div
            key={Item.id}
            className="flex items-start lg:gap-9  pb-4  border-b-1 border-b-gray-200 mt-7"
          >
            <div className=" w-[30%]  mx-auto">
              <img className=" lg:w-full w-28 rounded-lg" src={Item.img} />
            </div>

            <div className="lg:w-[70%] mx-auto ">
              <div>
                <div className=" flex items-center justify-between gap-5">
                  <div className="">
                    <h3 className=" lg:text-[22px] text-[12px] font-semibold">
                      {Item.title}
                    </h3>
                  </div>

                  {/* quantuty  */}
                  <div className="flex items-center gap-4  bg-gray-100 rounded w-fit">
                    <button
                      className="lg:py-1 lg:px-2 py-0.5 px-1 hover:bg-gray-300 font-bold"
                      onClick={() => HandleDec(Item.id)}
                    >
                      -
                    </button>
                    <span className=" text-[10px] lg:text-base font-bold">
                      {Item.quantity}
                    </span>
                    <button
                      className="lg:py-1 lg:px-2 py-0.5 px-1 hover:bg-gray-300 w-fit font-bold"
                      onClick={() => HandleInc(Item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <p className=" lg:text-lg text-[12px] font-bold">
                      ₦{Item.price * Item.quantity}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-2">
                      <img className="lg:size-5 size-3.5" src="/Calendar.png" />
                      <p className="lg:text-sm text-[9px] font-bold text-[#26395C]">
                        {Item.Calendartitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img className="lg:Size-5 size-3.5" src="/Mark.png" />
                      <p className="lg:text-sm text-[9px] font-bold text-[#26395C]">
                        {Item.locationtitle}
                      </p>
                    </div>
                  </div>

                  <div className=" flex items-center justify-between">
                    <div className=" flex items-center gap-2 mt-3">
                      <img className=" lg:size-5 size-3.5" src="/Clock.png" />
                      <p className="lg:text-sm text-[9px] te font-bold text-[#26395C]">
                        {Item.Clocktitle}
                      </p>
                    </div>

                    <button onClick={() => RemoveCart(Item.id)} className="">
                      <RxCross1 className=" lg:size-7 size-5 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* left side  */}
      <div className=" lg:w-[40%] w-full p-4  border-l-1 border-l-gray-200">
        {/* account section  */}
        <div className="pb-6 mb-6  border-b-1 border-b-gray-200 ">
          <h3 className=" font-semibold mb-2 flex items-center gap-2">
            <img className=" lg:size-5 size-4" src="/check.png" />
            <span className=" text-base lg:text-lg font-bold text-[#26395C]">
              {" "}
              Account information
            </span>
          </h3>

          <div className="ms-8 ">
            <p className=" lg:text-base text-[#26395C] text-sm">Tunde Chukwu</p>
            <p className=" lg:text-base text-[#26395C] text-sm">
              tundechukwu12@gmail.com
            </p>
          </div>
        </div>

        {/* Phone number section  */}
        <div className="pb-6 mb-6   border-b-1 border-b-gray-200 ">
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <img className=" lg:size-5 size-4" src="/check.png" />
            <span className=" text-base lg:text-lg text-[#26395C]">
              Phone number
            </span>
          </h3>

          <div className="ms-8 ">
            <p className=" lg:text-base text-[#26395C] text-sm">
              +2341123465799
            </p>
          </div>
        </div>

        {/* payment fieild */}

        <div>
          <h3
            onClick={() => setShowpayment(!Showpayment)}
            className="text-lg font-semibold mb-2 flex items-center gap-2"
          >
            <img className="lg:size-5 size-4" src="/check.png" />
           <h4 className="text-base lg:text-lg text-[#26395C] font-bold"> Payment <span className=" font-normal text-[#969DAA] text-sm lg:text-base ">Card</span></h4>
            <div className="text-[#969DAA] lg:text-xl text-base">
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
        </div>

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
              {carts
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toLocaleString()}
            </span>
          </div>

          {/* text  */}
          <div className="flex justify-between mt-2">
            <span>Tax(5%):</span>
            <span>
              ₦
              {(
                carts.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0,
                ) * 0.05
              ).toLocaleString()}
            </span>
          </div>
          {/* total */}
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span className="text-base text-teal-500">Total aumont:</span>
            <span className="text-base text-red-500">
              Total ₦
              {(
                carts.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0,
                ) * 1.05
              ).toLocaleString()}
            </span>
          </div>
          <MyModral />
        </div>
      </div>
    </section>
  );
}

export default MyPayment;
