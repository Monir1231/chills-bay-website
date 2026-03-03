import Head from "../../Component/common/head";
import { cardData } from "../../data/data";
// Import Swiper React components
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function AllCard() {
  const [vissable, setVissable] = useState(8);

  const LodeMore = () => {
    setVissable((prv) => prv + 4);
  };

  return (
    <div className="lg:mt-[50px] mt-10   bg-[#F5FAFF] lg:py-8 py-4 ">
      <div className="container lg:w-[80%] md:w-[90%] lg:pl-0  pl-4  mx-auto">
        <div>
          <Head className="mx-auto mt-5 md:mb-4 mb-2 text-center lg:text-start">
            Top things to do in Lagos
          </Head>
        </div>

        <div className=" hidden lg:grid  lg:grid-cols-4 space-y-7   ">
          {cardData.slice(0, vissable).map((item, index) => (
            <div key={index} className="">
              <div className=" max-w-[158px] lg:max-w-[295px] lg:max-h-[270px] max-h-[144px] mx-auto">
                <img
                  className=" w-full h-full  object-cover  rounded-2xl "
                  src={item.img}
                />
              </div>

              <div>
                <h4 className="text-[14px] md:text-[17px] lg:text-[22px] text-center font-bold ">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className=" lg:hidden flex w-full  ">
          <Swiper
            slidesPerView={2.2}
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          
            modules={[Autoplay, Pagination, ]}
            className="mySwiper"
          >
            {cardData.map((item, index) => (
              <SwiperSlide key={index} className="  ">
                <img
                  className=" w-full h-full  object-cover  rounded-2xl "
                  src={item.img}
                />

                <div>
                  <h4 className="text-[14px] md:text-[17px] lg:text-[22px] text-center font-bold ">
                    {item.title}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {vissable < cardData.length && (
          <div className=" text-center my-4 hidden lg:flex items-center justify-center">
            <button
              onClick={LodeMore}
              className="py-2 px-4 rounded-md font-semibold bg-gray-600 text-white"
            >
              View Moro
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllCard;
