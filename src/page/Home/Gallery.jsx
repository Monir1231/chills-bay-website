import React from "react";

import HeadALl from "../../Component/Head";

function Gallery() {
  const imgdata = [
    {
      img: "img1.png",
      title: "Eat & Drink",
    },
    {
      img: "img2.png",
      title: "Events",
    },
    {
      img: "img3.png",
      title: "Club",
    },
    {
      img: "img4.png",
      title: "Things to do",
    },
  ];
  return (
    <div className="lg:mt-[50px] mt-[40px]  container md:w-[85%] w-[95%] mx-auto">
      <div>
        <HeadALl className="mx-auto lg:mb-4 mb-2 text-center lg:text-start">What are you in the mood for?</HeadALl>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mb-10 container  ">
        {imgdata.map((item, index) => (
          <div key={index} className="md:py-5 py-4  " >
            <img className="w-full object-cover  lg:h-[533px]  h-[164px]" src={item.img} />

            <div>
              <h4 className="text-[21px] md:text-[text-24px] lg:text-[31px] text-center font-bold lg:mt-4  mt-2.5 text-[#26395C]">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
