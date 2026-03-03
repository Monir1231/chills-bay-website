import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Button } from "@heroui/react";

const herodata = [
  { title: "Club Quilox ", des: "Amaarae & Tems on June 3rd " },
  { title: "Our top pick for the week!", des: "Nok by Alara" },
];

const Hero = () => {
  return (
    <section className=' lg:bg-[url("hero3.png")] bg-[url("modile3.png")] bg-no-repeat bg-center bg-cover h-[441px] md:h-[555px]'>
      <Swiper  autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            
            }}
          
            modules={[Autoplay, Pagination,Navigation ]}
             navigation={true} 
            className="mySwiper"
            
             >
        {herodata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="lg:w-[85%] md:w-[90%] w-[90%] pt-8 lg:pt-20  mx-auto flex items- lg:justify-normal justify-center   ">
              <div className="lg:bg-black/40 bg-black/60  text-white w-[327px] lg:w-[558px] h-auto rounded-md p-4 md:p-6 ">
                <h1 className="lg:text-[42px] md:text-[30px] text-[25px] max-w-[600px] font-bold">
                  {item.title}
                </h1>
                <h2 className="lg:text-[32px] md:text-[24px] text-lg max-w-[600px] text-start font-semibold md:mt-2 mt-3">
                  {item.des}
                </h2>

                <div className=" flex items-center justify-end lg:justify-end ">
                  <Button color="primary" className="mt-6 font-semibold ">
                    Book A Section Now
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
