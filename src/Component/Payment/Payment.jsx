import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function MyPayment() {
  const [Showpayment, setShowpayment] = useState(false);
  const [CardItem, setCardItem] = useState([
    {
      id: 1,
      image: "person1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      Location: "Quilox Club",
      price: "4500",
      time: "9:00 PM",
      quantity: 1,
    },
    {
      id: 2,
      image: "person2.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      Location: "Quilox Club",
      price: "4500",
      time: "9:00 PM",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, increment) => {
    setCardItem((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + increment, 1),
              price:
                Math.max(item.quantity + increment, 1) *
                (item.price / item.quantity),
            }
          : item
      )
    );
  };

  const RemoveItem = (id) => {
    setCardItem(CardItem.filter((item) => item.id !== id));
  };

  const Addnewitem = () => {
    const newItem = {
      id: CardItem.length + 1,
      image: "person1.png",
      title: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      Location: "Quilox Club",
      price: "4500",
      time: "9:00 PM",
      quantity: 1,
    };
    setCardItem([...CardItem, newItem]);
  };
  return (
    <section className="flex flex-col lg:flex-row gap-6 w-[80%] mx-auto mt-24">
      {/* right side  */}
      <div className="flex-1 p-6">
        <h2 className="text-base font-semibold text-[#969DAA]">Your Cart</h2>

        {CardItem.map((Item) => (
          <div
            key={Item.id}
            className="flex items-center gap-4 mb-6 p-4 border-b-1"
          >
            <img className="w-24 h-24 rounded-lg" src={Item.image} />
            <div className="flex-1">
              <h3>{Item.title}</h3>

              <div className="mt-4">
                <div className="flex gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src="Calendar.png" />
                    <p className="text-sm text-gray-600">{Item.date}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img className="w-4 h-4" src="Calendar.png" />
                    <p className="text-sm text-gray-600">{Item.Location}</p>
                  </div>
                </div>

                <div className=" flex items-center gap-2 mt-1">
                  <img className="w-4 h-4" src="Clock.png" />
                  <p className="text-sm text-gray-600">{Item.time}</p>
                </div>
              </div>

              {/* quantuty  */}
              <div className="flex items-center gap-4 mt-4 bg-gray-100 rounded w-fit">
                <button
                  className="py-1 px-2 hover:bg-gray-300"
                  onClick={() => updateQuantity(Item.id, -1)}
                >
                  -
                </button>
                <span>{Item.quantity}</span>
                <button
                  className="py-1 px-2 hover:bg-gray-300 w-fit"
                  onClick={() => updateQuantity(Item.id, 1)}
                >
                  +
                </button>
              </div>

              <p className="mt-2 text-lg font-bold">
                ₦{Item.price.toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => RemoveItem(Item.id)}
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

        <div>
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
        </div>

        <div className="bg-gray-200 p-4 rounded-lg">
          <ul>
            {CardItem.map((item) => (
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
              {CardItem.reduce(
                (sum, item) => sum  + item.price,0
              ).toLocaleString()}
            </span>
          </div>

       {/* tex  */}
          <div className="flex justify-between mt-2">
            <span>Tax(5%):</span>
            <span>
              ₦
              {(
                CardItem.reduce((sum, item) => sum + item.price, 0) * 0.05
              ).toLocaleString()}
            </span>
          </div>
           {/* total */}
            <hr className="my-2" />
           <div className="flex justify-between font-bold">
           <span className="text-base text-teal-500">Total aumont:</span>
            <span className="text-base text-red-500">Total ₦{(CardItem.reduce((sum,item)=> sum + item.price,0) * 1.05).toLocaleString()}</span>

           </div>


        </div>
      </div>
    </section>
  );
}

export default MyPayment;
