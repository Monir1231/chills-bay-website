import React, { useState } from "react";
import Head from "../../common/head";
import { cardData } from "../../data/data";

function AllCard() {

  const [vissable,setVissable] = useState(4)

  const LodeMore = () =>{
    setVissable((prv)=> prv + 4)
  }

  return (

    <div className="xl:my-24 md:my-20 my-12px bg-[#F5FAFF] py-8 ">
    <div className="container lg:w-[80%] md:w-[90%] w-[85%]  mx-auto">
      <div>
        <Head className="mx-auto md:mb-4 mb-2">What are you in the mood for?</Head>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mb-10 container gap-4 ">
        {cardData.slice(0,vissable).map((item, index) => (
          <div key={index} className=" my-5 " >
            <img className="w-full object-cover h-[250px]  rounded-2xl " src={item.img} />

            <div>
              <h4 className="text-[14px] md:text-[17px] lg:text-[22px] text-center font-bold mt-7">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
      {vissable < cardData.length && (
        <div className=" text-center mt-4">
       <button onClick={LodeMore} className="py-2 px-4 rounded-md font-semibold bg-gray-600 text-white">View Moro</button>
        </div>
      )}
    </div>
    </div>
  );
}

export default AllCard;
