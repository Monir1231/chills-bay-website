import React from "react";
import { Autocomplete, AutocompleteItem, DateInput } from "@heroui/react";
import {CalendarDate, parseDate} from "@internationalized/date";
import { Button } from "@heroui/react";

function Hero() {
  return (
    <section className="lg:bg-[url('hero.png')] bg-[url('mobile.png')]  bg-no-repeat bg-center bg-cover lg:py-28 md:py-24 py-16 lg:text-start text-center">
      <div className="container lg:w-[80%] md:w-[90%] w-[80%]  mx-auto md:text-[#FFFFFF] bg-white md:bg-transparent p-6 md:p-0 rounded-2xl lg:mb-20 mb-9  ">
        <h1 className=" lg:mx-0 lg:text-[62px] md:text-[42px] md:mx-auto md:max-w-[600px]   font-bold xl:max-w-[694px] hidden md:flex">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>

        <h1 className=" text-[24px]  max-w-[264px] text-[#26395C] font-bold text-start  md:hidden">
          Find amazing things to do in Lagos.
        </h1>

        <div className="lg:w-[726px] lg:mx-0 md:w-[650px] md:mx-auto md:py-8 lg:py-9 bg-[#FBFCFF] rounded-md lg:mt-12 md:mt-4 md:p-4 p-2 lg:mb-5">
          <div className="grid  grid-cols-1 lg:grid-cols-4  md:grid-cols-4  lg:gap-5 md:gap-3 gap-4">
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                className="w-[100%] text-[12px] text-[#26395C]"
              >
                <AutocompleteItem variant="Oshodi" className="text-[#656B89]  ">
                  Oshodi
                </AutocompleteItem>

                <AutocompleteItem
                  variant="hublu programmer"
                  className="text-[#656B89]"
                >
                
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <div className="text-[#26395C]">
             <DateInput
         
          label="Date Input"
          labelPlacement="outside"
          placeholderValue={new CalendarDate(1995, 11, 6)}
         className="w-[100%] text-[12px] text-start"
        />
            </div>

            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Activities"
                placeholder="Activities"
                className="w-[100%] text-[12px] text-[#26395C]"
              >
                <AutocompleteItem variant="Activities" className="text-[#656B89] ">
                  Activities
                </AutocompleteItem>

                <AutocompleteItem
                  variant="hublu programmer"
                  className="text-[#656B89]"
                >
                Night Clubs
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <div>
              <Button color="primary" className="w-full py-6 px-4 text-base mt-5">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
