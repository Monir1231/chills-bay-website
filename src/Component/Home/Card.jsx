import React from "react";
import Head from "../../common/head";
import { cardData } from "../../data/data";

function AllCard() {

  return (

    <div className="xl:my-24 md:my-20 my-16 bg-[#F5FAFF] py-5 ">
    <div className="container md:w-[85%] w-[95%] mx-auto">
      <div>
        <Head className="mx-auto mb-4">What are you in the mood for?</Head>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mb-10 container gap-4">
        {cardData.map((item, index) => (
          <div key={index} className=" my-5 " >
            <img className=" w-full object-cover h-[250px] rounded-2xl " src={item.img} />

            <div>
              <h4 className="text-[14px] md:text-[17px] lg:text-[22px] text-center font-bold mt-7">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default AllCard;
