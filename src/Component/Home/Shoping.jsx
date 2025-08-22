import React from "react";
import Head from "../../common/head";
import { shopingData } from "../../data/data";

function Shoping() {

  return (

    <div className="xl:my-24 md:my-20 my-16  py-5 ">
    <div className="container md:w-[85%] w-[95%] mx-auto ">
      <div>
        <Head className="mx-auto mb-6">What are you in the mood for?</Head>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 mb-10 container bg-[#F5FAFF] gap-4 rounded-2xl shadow-2xl">
        {shopingData.map((item, index) => (
          <div key={index} className=" my-5 lg:p-4 md:p-6 p-7 flex flex-col justify-center mx-auto " >
            <img className=" w-[100px] rounded-2xl mx-auto " src={item.img} />

            <div className="mx-auto text-center">
              <h4 className="text-[22px] md:text-[27px] lg:text-[32px] text-center font-bold mt-7 lgmax-w-[295px]">{item.title}</h4>
              <p className="lg:text-[24px] md:text-[18px] text-base lg:max-w-[358px]  mt-3.5 font-sans">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Shoping;
