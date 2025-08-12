import React, { useState } from "react";
import Head from "../common/head";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Button, slider } from "@heroui/react";

const CarouselData = [
  {
    id: 1,
    image: "cara.png",
    Heading: "Wizkid made in lagos tour",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 2,
    image: "cara.png",
    Heading: "welcome to our hostal",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 3,
    image: "cara.png",
    Heading: "welcome to our usa",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

const date = [
  {
    id: 1,
    img: "Calendar.png",
    title: "Dec 12 2022",
  },
  {
    id: 2,
    img: "Mark.png",
    title: "Dec 12 2022",
  },
  {
    id: 3,
    img: "Calendar.png",
    title: "Dec 12 2022",
  },
  {
    id: 4,
    img: "Calendar.png",
    title: "Dec 12 2022",
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
    <section className="my-12 lg:my-24">
      <Head className="text-start md:text-5xl mt-20 mb-2 px-8 py-6">
        See How People are Chilling On Chillsbay
      </Head>
      <div className="relative w-full max-w-screen-2xl mx-auto overflow-x-hidden">
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            className="text-[#26395C] absolute left-0 transform translate-x-6 lg:flex items-center justify-center md:text-5xl hidden  "
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
                {date.map((item, id) => (
                  <div key={id} className="flex items-center gap-2">
                    <img src={item.img} />
                    <h4 className="text-[20px] font-bold">{item.title}</h4>
                  </div>
                ))}

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
            className="text-[#26395C] absolute right-0 transform translate-y-6 lg:flex items-center justify-center md:text-5xl hidden "
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
