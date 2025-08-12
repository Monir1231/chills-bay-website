import React from "react";
import Head from "../common/head";

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
    <div className="xl:my-24 md:my-20 my-16 container md:w-[85%] w-[95%] mx-auto">
      <div>
        <Head className="mx-auto mb-4">What are you in the mood for?</Head>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mb-10 container p-4  ">
        {imgdata.map((item, index) => (
          <div key={index} className="md:py-5 py-4  " >
            <img className="w-full lg:h-[533px] md:h-[500px] h-[164px]" src={item.img} />

            <div>
              <h4 className="text-[21px] md:text-[text-24px] lg:text-[31px] text-center font-bold mt-4">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
