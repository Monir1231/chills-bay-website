import React from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { Button } from "@heroui/react";

function Search() {
  return (
    <>
      <div className="container lg:w-[85%] md:w-[90%] w-[85%]  mt-10 ">
        <div className="lg:w-[1140px] lg:mx-0 md:w-[650px]  md:py-8 lg:py-9 bg-[#FBFCFF] rounded-md lg:mt-12 md:mt-4 md:p-4 p-2 lg:mb-5">
          <div className="grid  grid-cols-2 lg:grid-cols-6  md:grid-cols-4  lg:gap-5 md:gap-3 gap-4">
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
                label="Time"
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
    </>
  );
}

export default Search;
