import React from "react";
import { Button, cn } from "@heroui/react";

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
  copyRight: `${new Date().getFullYear()} Copyright By Monir `,
};

const Menusection = ({ title, menus,isDark }) => {
  return (
    <div>
      <h2 className= {cn("text-base font-bold text-[#26395C] border-b-1 w-fit mb-5 py-3",isDark && " text-white")} >{title}</h2>
      <div className="flex gap-12 text-base">
        {menus.map((menu, index) => (
          <ul key={index}>
            {menu.items.map((item, ind) => (
              <li key={ind} className=  {cn("mb-3 text-[#656B89]",isDark && " text-[#E4E7EC]")}  >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

function Footer({isDark}) {
  const { socalIcon, sections, partnerSection, logo, copyRight } = footerData;
  return (
    <footer className= {cn("my-10 md:p-3 p-12 bg-white",isDark && " bg-[#9A9FBF1A]")} >
      <div className="container md:w-[95%] w-[95%] mx-auto  grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* left */}
        <div className=" col-span-1">
          <img className="w-fit" src={logo} />
          <p className= {cn("text-sm mb-4 text-[#26395C]",isDark && " text-white")} >{copyRight}</p>
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
            <div className= {cn(" bg-[#F5FAFF]  rounded-2xl  p-5",isDark && " bg-[#D0D8E71A]/10")}>
              <img src={partnerSection.img} />
              <h3 className= {cn("text-2xl font-bold text-[#26395C] mt-2",isDark && " text-white")} >
                {partnerSection.title}
              </h3>
              <p className=  {cn("text-md text-[#656B89] py-4",isDark && " text-[#969DAA]")}  >{partnerSection.des}</p>
              <Button color="primary"  className="w-full">Join Now</Button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
export default Footer;
