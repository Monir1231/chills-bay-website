import React, { useState } from "react";
import Head from "../../common/head";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Button, slider } from "@heroui/react";

const CarouselData = [
  {
    id: 1,
    image: "cara.png",
    Heading: "Wizkid made in lagos tour",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    Calendarimg: "Calendar.png",
    Calendartitle: "JAN 12 2025",
      Markimg: "Mark.png",
      Marktitle: "TBS  Lagos",
      Clockimg: "Clock.png",
    Clocktitle: "9:00 PM ",
      Tagimg: "Tag.png",
    Tagtitle: "N20,000",
  },
  {
    id: 2,
    image: "DrinkCarosel.png",
    Heading: "Welcome to our hostal",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    Calendarimg: "Calendar.png",
    Calendartitle: "Dec 12 2025",
      Markimg: "Mark.png",
      Marktitle: "TBS  Lagos",
      Clockimg: "Clock.png",
    Clocktitle: "10:00 PM ",
      Tagimg: "Tag.png",
    Tagtitle: "N40,000",
  },
  {
    id: 3,
    image: "cara.png",
    Heading: "Welcome to our shop",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    Calendarimg: "Calendar.png",
    Calendartitle: "FUB 12 2026",
      Markimg: "Mark.png",
      Marktitle: "TBS  Lagos",
      Clockimg: "Clock.png",
    Clocktitle: "9:40 PM ",
      Tagimg: "Tag.png",
    Tagtitle: "N10,000",
  },
  
];


function MyCarousel() {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const handaleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const CurrentSlider = CarouselData[CurrentIndex];

  const handlePrev = () => {
    setCurrentIndex((prv) => (prv === 0 ? CarouselData.length - 1 : prv - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prv) => (prv === CarouselData.length - 1 ? 0 : prv + 1));
  };

  return (
    <section className="my-12 lg:mt-[50px]">
      <Head className="hidden lg:flex items-center justify-center text-start lg:text-center md:text-5xl mt-20 mb-2 px-8 py-6">
        See How People are Chilling On Chillsbay
      </Head>

   
        <Head className=" lg:hidden flex text-start  lg:mt-16  mb-2 px-8 ">
      Upcoming events <br/> this weekend
      </Head>

           

      <div className="relative w-full max-w-screen-2xl mx-auto overflow-x-hidden">
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            className="text-[#26395C] absolute left-0 transform translate-x-6 lg:flex items-center justify-center md:text-5xl text-xl hidden md:flex "
          >
            <BsChevronLeft />
          </button>
          
          
          <div className="flex flex-col lg:flex-row items-center gap-6 w-full mx-auto lg:px-20 px-8">
            {/* right  */}
            <div className="w-full lg:w-1/2">
              <img
                className="object-cover w-full h-auto rounded-2xl mt-5"
                src={CurrentSlider.image}
              />

               <div className="lg:hidden flex items-center justify-center gap-2 mt-2">
          {CarouselData.map((_, index) => (
            <button
              onClick={() => handaleDotClick(index)}
              className={`size-3 rounded-full ${
                index === CurrentIndex ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

            </div>

            {/* left  */}

            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl lg:text-5xl font-bold max-w-[385px] leading-tight">
                {CurrentSlider.Heading}
              </h2>
              <p className="md:text-[20px] text-base text-[#26395C]  ">
                {CurrentSlider.des}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-4">
                 <div  className="flex items-center gap-2">
                    <img src={CurrentSlider.Calendarimg} />
                    <h4 className="text-[20px] font-bold">{CurrentSlider.Calendartitle}</h4>
                      </div>

                      <div  className="flex items-center gap-2">
                    <img src={CurrentSlider.Markimg} />
                    <h4 className="text-[20px] font-bold">{CurrentSlider.Marktitle}</h4>
                      </div>


                      <div  className="flex items-center gap-2">
                    <img src={CurrentSlider.Clockimg} />
                    <h4 className="text-[20px] font-bold">{CurrentSlider.Clocktitle}</h4>
                      </div> 

                      <div  className="flex items-center gap-2">
                    <img src={CurrentSlider.Tagimg} />
                    <h4 className="text-[20px] font-bold">{CurrentSlider.Tagtitle}</h4>
                      </div>

                {/* {date.map((item, id) => (
                  <div key={id} className="flex items-center gap-2">
                    <img src={item.img} />
                    <h4 className="text-[20px] font-bold">{item.title}</h4>
                  </div>
                ))} */}

                <div className="flex flex-row gap-5 mt-4">
                  <Button variant="bordered" color="primary" size="lg">
                    Add to cart
                  </Button>
                  <Button color="primary" size="lg">
                    Book Now
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <p>Connect with us on:</p>
                <div className="flex items-center  gap-5">
                  <img src="Twitter.png" />
                  <img src="instra.png" />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="text-[#26395C] absolute right-0 transform translate-y-6 lg:flex items-center justify-center md:text-5xl text-xl hidden md:flex "
          >
            <BsChevronRight />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {CarouselData.map((_, index) => (
            <button
              onClick={() => handaleDotClick(index)}
              className={`size-3 rounded-full ${
                index === CurrentIndex ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyCarousel;
