// Map.jsx
import React from "react";

const MyMap = () => {
  return (
    <div className=" container lg:w-[90%]  w-[95%] mx-auto  lg:mt-20 mt-14 ">

      <div className="  w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
          
         className=" w-full lg:h-100 h-52"
         
         
        ></iframe>
      </div>
    </div>
  );
};

export default MyMap;