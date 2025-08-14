import React, { useState } from 'react'
import {Input} from "@heroui/input";
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
  const [isOpen,setisOpen] = useState(false)
  const handleOpen = () =>{
    setisOpen(true)
  }
  const handleClose = () => {
    setisOpen(false)
  }
  return (
    <section>
      <div className='flex flex-wrap gap-3'>
      <Button variant='flat' onPress={handleOpen} className='text-gray-500 w-4 h-4'>
        <FaRegUser/>
      </Button>
      </div>

      <Modal isOpen={isOpen} backdrop='blur' onClose={handleClose} size='5xl' placement='top'>
        <ModalContent>
          <ModalBody>
            <div className='flex flex-col md:flex-row h-full w-full overflow-y-auto md:overflow-visible'>

              {/* left side  */}
              <div className='bg-[url("LoginImg.png")] bg-cover bg-no-repeat bg-center flex-col text-white w-full md:h-1/3'>
              <h1>Sign Up</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam maecenas. Enim sed tortor morbi ut suspendisse.</p>

              </div>
              {/* right side  */}
              <div></div>


            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  )
}

export default MYMordal