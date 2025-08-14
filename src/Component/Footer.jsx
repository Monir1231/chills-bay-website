import React from "react";
import { Button } from "@heroui/react";

const footerData = {
  socalIcon: [
    "fb.png",
    "Twitter.png",
    "instra.png",
    "linkdin.png",
    "yt.png",
    "tiktok1.png",
  ],
  sections: [
    {
      title: "Menu",
      menus: [
        { items: ["Home", "Eat", "Drink", "Events", "Club", "Recreation"] },
        { items: ["Blog", "Careers", "Contact", "FAQs"] },
      ],
    },
    {
      title: "Utility Pages",
      menus: [
        {
          items: [
            "Start Here",
            "Pay with Crypto",
            "Style Guide",
            "Password Protected",
            "404 Not FoundClub",
            "Licenses",
            "Changelog",
          ],
        },
      ],
    },
  ],

  partnerSection: {
    img: "partner.png",
    title: "Become a Partner",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",
  },
  logo: "logo.png",
  copyRight: `${new Date().getFullYear()}Copyright 2022 ©`,
};

const Menusection = ({ title, menus }) => {
  return (
    <div>
      <p className="text-2xl font-semibold border-b-1 w-fit mb-5 py-3">{title}</p>
      <div className="flex gap-12 text-xl">
        {menus.map((menu, index) => (
          <ul key={index}>
            {menu.items.map((item, ind) => (
              <li key={ind} className="mb-3">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

function Footer() {
  const { socalIcon, sections, partnerSection, logo, copyRight } = footerData;
  return (
    <footer className="my-10 md:p-3 p-12">
      <div className="container md:w-[95%] w-[95%] mx-auto  grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* left */}
        <div className=" col-span-1">
          <img className="w-fit" src={logo} />
          <p className="text-sm mb-4">{copyRight}</p>
          <div className="flex items-center space-x-2">
            {socalIcon.map((item, index) => (
              <a key={index} href="#">
                <img className="w-4 h-4" src={item} />
              </a>
            ))}
          </div>
        </div>
        {/* right  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 ms-auto col-span-3">
          {sections.map((section, index) => (
            <Menusection
              key={index}
              title={section.title}
              menus={section.menus}
            />
          ))}

          <div className=" w-full">
            <div className=" bg-[#F5FAFF]  rounded-2xl  p-5">
              <img src={partnerSection.img} />
              <h3 className="text-2xl font-bold text-[#26395C] mt-2">
                {partnerSection.title}
              </h3>
              <p className="text-md text-gray-400 py-4">{partnerSection.des}</p>
              <Button color="primary"  className="w-full">Join Now</Button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
export default Footer;
