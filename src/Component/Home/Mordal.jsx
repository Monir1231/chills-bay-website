import React, { useState } from "react";
import { Input } from "@heroui/input";
import { FaRegUser } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

function MYMordal() {
  const [isOpen, setisOpen] = useState(false);
  const handleOpen = () => {
    setisOpen(true);
  };
  const handleClose = () => {
    setisOpen(false);
  };
  return (
    <section>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="flat"
          onPress={handleOpen}
          className="text-gray-500 w-4 h-4"
        >
          <FaRegUser />
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        backdrop="blur"
        onClose={handleClose}
        size="5xl"
        placement="top"
      >
        <ModalContent>
          <ModalBody className="px-0 py-0">
            <div className="flex flex-col md:flex-row h-full w-full overflow-y-auto md:overflow-visible">
              {/* left side  */}
              <div className='bg-[url("LoginImg.png")] bg-cover bg-no-repeat bg-center flex-col text-white w-full md:w-1/3 p-8'>
                <h1 className="text-4xl text-start mb-5 mt-10 font-bold">
                  Sign Up
                </h1>
                <p className="text-sm max-w-[391px] mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tellus ullamcorper hendrerit quis purus pellentesque. Ac
                  sagittis, convallis non tincidunt interdum eu nullam aliquam
                  maecenas. Enim sed tortor morbi ut suspendisse.
                </p>
              </div>
              {/* right side  */}
              <div className="w-full p-8 md:w-2/3 bg-white">
                <div>
                  <img className="w-fit mx-auto" src="logo.png" />
                  <h2 className="text-2xl font-bold text-[#26395C] mt-5 mb-2">
                    Sign up and get exploring!
                  </h2>
                  <p>
                    Already have an account?{" "}
                    <span className="text-[#0E8BFF]">Sign In</span>
                  </p>
                </div>

                <div className="mt-7">
                  <button className="flex justify-center items-center gap-2 w-full py-3 px-4 border border-[#0E8BFF] rounded-2xl mt-7">
                    {" "}
                    <img className="w-5 h-5" src="google.png" />
                    Sign Up with Google{" "}
                  </button>

                  <button className="flex justify-center items-center gap-2 w-full py-3 px-4 border border-[#0E8BFF] rounded-2xl mt-4">
                    {" "}
                    <img className="w-5 h-5" src="facebook.png" />
                    Sign Up with facebook{" "}
                  </button>

                  <button className="flex justify-center items-center gap-2 w-full py-3 px-4 border border-[#0E8BFF] rounded-2xl mt-4">
                    {" "}
                    <img className="w-5 h-5" src="apple.png" />
                    Sign Up with Apple{" "}
                  </button>
                </div>

                {/* devider  */}

                <div className="flex items-center my-6 text-center text-gray-600">
                  <div className=" flex-grow gray-300 border-t"></div>
                  <div className="px-3 text-gray-600">or continue with</div>
                  <div className=" flex-grow gray-300 border-t"></div>
                </div>

                {/* form   */}

                <form className="mt-10">
                  <div className="mb-6">
                    <Input
                      type="email"
                      label="email"
                      placeholder="Enter your email"
                      labelPlacement="outside"
                    />
                  </div>

                  <div className="mb-6 mt-10">
                    <Input
                      type="password"
                      label="password"
                      placeholder="**********"
                      labelPlacement="outside"
                    />
                  </div>

                  <Button color="primary" className="w-full font-bold">
                    Sign Up
                  </Button>
                  <p className="text-[12px] mt-2 text-center">
                    By creating an account, you agree to our{" "}
                    <a className="text-[#0E8BFF]" href="#">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#0E8BFF]">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}

export default MYMordal;
