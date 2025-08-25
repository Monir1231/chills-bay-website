import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function MyModral() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" className="w-full p-4 mt-4 lg:mt-7">Book Tickets</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" className="w-full" >
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold text-2xl text-center">Thanks for Order</ModalHeader>
              <ModalBody>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar parturient vel et odio. Est urna, sit curabitur cras -d adipiscing consequat. Urna tortor congue commodo ultricies tellus fermentum, nibh aliquet. 
Tristique faucibus feugiat etiam ac. Dictumst et in mi varius pellentesque nisl molestie mauris aliquam. Ipsum egestas nunc aliquam vitae leo elementum etiam commodo. 
Malesuada velit sed adipiscing convallis adipiscing aenean. At massa aliquam quis adipiscing ut. Sit eget et egestas sed vitae sollicitudin. Pellentesque id non sapien, cursus vestibulum fusce malesuada. Habitasse nullam turpis posuere nunc, platea enim lacinia lorem. Bibendum enim ante purus consectetur euismod.

.</p>
              </ModalBody>
             
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
