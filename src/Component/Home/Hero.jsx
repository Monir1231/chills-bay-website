import React from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { Button } from "@heroui/react";

function Hero() {
  return (
    <section className="bg-[url('hero.png')] bg-no-repeat bg-center bg-cover md:py-28  py-20 lg:text-start text-center">
      <div className="container lg:w-[80%] md:w-[90%] w-[85%]  mx-auto md:text-[#FFFFFF] bg-white md:bg-transparent p-6 md:p-0 rounded-2xl lg:mb-20 mb-9  ">
        <h1 className="xl:text-[62px] lg:mx-0 lg:text-[50px] md:text-[42px] md:mx-auto md:max-w-[600px]   font-bold xl:max-w-[694px] hidden md:flex">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>

        <h1 className=" text-[24px]  max-w-[264px] font-bold text-start  md:hidden">
          Find amazing things to do in Lagos.
        </h1>

        <div className="lg:w-[726px] lg:mx-0 md:w-[650px] md:mx-auto md:py-8 lg:py-9 bg-[#FBFCFF] rounded-md lg:mt-12 md:mt-4 md:p-4 p-2 lg:mb-5">
          <div className="grid  grid-cols-1 lg:grid-cols-4  md:grid-cols-4  lg:gap-2 md:gap-3 gap-4">
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                className="w-[100%] text-[12px]"
              >
                <AutocompleteItem variant="Oshodi" className="text-black  ">
                  Oshodi
                </AutocompleteItem>

                <AutocompleteItem
                  variant="hublu programmer"
                  className="text-black"
                >
                  Hublu programmer
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                className="w-[100%] text-[12px]"
              >
                <AutocompleteItem variant="Date" className="text-black ">
                  Date
                </AutocompleteItem>

                <AutocompleteItem
                  variant="hublu programmer"
                  className="text-black"
                >
                  Hublu programmer
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Activities"
                placeholder="Activities"
                className="w-[100%] text-[12px]"
              >
                <AutocompleteItem variant="Activities" className="text-black ">
                  Activities
                </AutocompleteItem>

                <AutocompleteItem
                  variant="hublu programmer"
                  className="text-black"
                >
                  Hublu programmer
                </AutocompleteItem>
              </Autocomplete>
            </div>

            <div>
              <Button color="primary" className="w-full p-7 text-base mt-3">
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
