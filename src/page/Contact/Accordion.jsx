import { Accordion, AccordionItem } from "@heroui/react";

export default function MyAccordion() {


  return (
    <div className="lg:w-[65%] w-[80%] mx-auto mt-24">
      <div className="text-center">
        <h2 className="lg:text-[32px] md:text-[26px] text-xl font-bold text-[#26395C]">
          Frequently Asked Questions
        </h2>
        <p className="lg:text-base text-sm text-[#656B89] mt-2 max-w-[631px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nunc,
          purus est sem volutpat at at. Ultricies erat leo risus, eget venenatis
          tristique morbi.
        </p>
      </div>

      <Accordion className="my-14 py-6" variant="splitted" defaultExpandedKeys={["1"]}  >
        <AccordionItem key="1" aria-label="Do you offer refunds for purchased products?" title="Do you offer refunds for purchased products?" className="font-bold">
          <p className="text-sm font-normal text-[#656B89]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
        </AccordionItem>
        <AccordionItem key="2" aria-label="How does Chillsbay work?" title="How does Chillsbay work?"  className="font-bold" >
         <p className="text-sm font-normal text-[#656B89]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
        </AccordionItem>
        <AccordionItem key="3" aria-label="How does Chillsbay work?" title="How does Chillsbay work?"  className="font-bold">
         <p className="text-sm font-normal text-[#656B89]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
        </AccordionItem>

        <AccordionItem key="3" aria-label="How does Chillsbay work?" title="How does Chillsbay work?"  className="font-bold">
         <p className="text-sm font-normal text-[#656B89]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum adipiscing tristique ut blandit massa tellus amet at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc. Enim ultrices platea morbi.</p>
        </AccordionItem>

      </Accordion>
    </div>
  );
}
