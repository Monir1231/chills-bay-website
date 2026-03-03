import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Button } from "@heroui/react";

function Info() {
  return (
    <>
      <section className="lg:w-[75%] w-[95%] mx-auto flex flex-col lg:flex-row gap-11 mt-24  ">
        {/* left  */}
        <div className="lg:w-1/2 ">
          <h2 className="text-[42px] font-bold mb-4 text-[#26395C] max-w-[416px]">
            Contact Us
          </h2>
          <p className="text-base text-[#656B89] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc,
            quisque ultricies netus elit massa aliquam quis cras. Enim leo, in
            massa sapien facilisi netu.
          </p>

          <div className="flex items-center gap-2 mb-2.5 ">
            <div className="text-[#0E8BFF] text-lg">
              {" "}
              <IoMdCall />
            </div>
            <p className="text-base text-[#26395C]">(840) 371 - 2514</p>
          </div>

          <div className="flex items-center gap-2 ">
            <div className="text-[#0E8BFF] text-lg">
              {" "}
              <MdEmail />{" "}
            </div>
            <p className="text-base text-[#26395C]">(840) 371 - 2514</p>
          </div>
        </div>

        {/* right  */}
        <div className="lg:w-1/2">
          <form className="p-3  shadow-blue-100 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="p-3">
                <label className="text-base ">Name:</label> <br />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#F5FAFF] text-[#969DAA] py-2 px-3 outline-none rounded-lg mt-2"
                />
              </div>

              <div className="p-3">
                <label className="text-base ">Last Name:</label> <br />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-[#F5FAFF] text-[#969DAA] py-2 px-3 outline-none rounded-lg mt-2"
                />
              </div>

              <div className="p-3">
                <label className="text-base ">Email Address:</label> <br />
                <input
                  type="email"
                  placeholder="Full Name"
                  className="w-full bg-[#F5FAFF] text-[#969DAA] py-2 px-3 outline-none rounded-lg mt-2"
                />
              </div>

              <div className="p-3">
                <label className="text-base ">Phone number:</label> <br />
                <input
                  type="number"
                  placeholder="Full Name"
                  className="w-full bg-[#F5FAFF] text-[#969DAA] py-2 px-3 outline-none rounded-lg mt-2"
                />
              </div>
            </div>

            <div className="p-3">
              <select className="w-full bg-[#F5FAFF] text-[#969DAA] py-2 px-3 outline-none rounded-lg mt-2">
                <option>Select Option</option>
                <option>programmer</option>
              </select>
            </div>

            <div className="p-3">
              <label className="text-base ">Massage:</label> <br />
              <textarea className="w-full bg-[#F5FAFF] text-[#969DAA] py-10 px-3 outline-none rounded-lg mt-2" />
            </div>

            <Button color="primary" className="w-full mt-2">
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Info;
