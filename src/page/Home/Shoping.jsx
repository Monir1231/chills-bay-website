
import Head from "../../common/head";
import { shopingData } from "../../data/data";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Shoping() {
  return (
    <div className="lg:my-[50px] md:my-16 my-10 py-5 ">
      <div className="container lg:w-[85%] w-[95%] mx-auto ">
        <div>
          <Head className="mx-auto mb-6 text-center lg:text-start">Why Use Chillsbay?</Head>
        </div>

       {/* pc  */}
        <div className=" hidden lg:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 mb-10 container bg-[#F5FAFF] gap-4 rounded-2xl shadow-2xl">
          {shopingData.map((item, index) => (
            <div
              key={index}
              className=" my-5 lg:p-4 md:p-6 p-7 flex flex-col justify-center mx-auto gap-4 "
            >
              <img className=" w-[96px] rounded-2xl mx-auto " src={item.img} />

              <div className="mx-auto text-center">
                <h4 className="text-[22px] md:text-[27px] lg:text-[32px] text-center font-bold mt-7 lgmax-w-[295px]">
                  {item.title}
                </h4>
                <p className="lg:text-[24px] md:text-[18px] text-base lg:max-w-[358px]  mt-3.5 font-sans">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>

           {/* mobile  */}

        <div className=" lg:hidden flex   ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
             pagination={{
          clickable: true,
        }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          
            modules={[Autoplay, Pagination, ]}
            className="mySwiper"
          >
             {shopingData.map((item, index) => (
            <SwiperSlide
              key={index}
              className=" my-5 lg:p-4 md:p-6 p-7 flex flex-col justify-center mx-auto gap-4 bg-[#F5FAFF] "
            >
              <img className=" w-[96px] rounded-2xl mx-auto " src={item.img} />

              <div className="mx-auto text-center">
                <h4 className="text-[22px] md:text-[27px] lg:text-[32px] text-center font-bold mt-7 lgmax-w-[295px]">
                  {item.title}
                </h4>
                <p className="lg:text-[24px] md:text-[18px] text-base lg:max-w-[358px]  mt-3.5 font-sans">
                  {item.des}
                </p>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}

export default Shoping;
