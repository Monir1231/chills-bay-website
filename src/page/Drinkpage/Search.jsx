import React from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { Button } from "@heroui/react";

function Search() {
  return (
    <>
      <div className="container lg:w-[85%] md:w-[90%] w-[85%] mx-auto  mt-10 ">
        
          <div className="grid  grid-cols-1 lg:grid-cols-6  items-center md:grid-cols-4   lg:gap-5 md:gap-3 gap-4 lg:shadow-none shadow-lg lg:p-0 p-6 rounded-md">
            <div>
              <Autocomplete
                labelPlacement="outside"
                label="Location"
                placeholder="Oshodi"
                className="w-[100%] text-[12px] "
              >
                <AutocompleteItem variant="Oshodi" className="text-black   ">
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
              <Button color="primary" className="w-full py-5 lg:py-7 lg:px-5 text-base mt-3 font-bold ">
                Search
              </Button>
            </div>


            
          </div>
       
      </div>
    </>
  );
}

export default Search;
