import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";

import { FaChevronDown, FaRegUser } from "react-icons/fa";

import { useState } from "react";

function MyNavbar() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const Menuitems = ["Events", "Club"];
  return (
    <section className="mt-3">
      <Navbar
        isMenuOpen={isOpenMenu}
        onMenuOpenChange={setOpenMenu}
    
        className="w-full "
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-level={isOpenMenu ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden md:flex pr-3">
          <NavbarBrand>
            <Link to="/">
              <img className="w-44 " src="/logo.png" alt="" />{" "}
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* destop  */}

        <NavbarContent className="hidden sm:flex gap-4 w-full justify-center  ">
          <NavbarBrand>
            <img className="w-44" src="logo.png"/>
          </NavbarBrand>

          {/* Navitem  */}
          <NavbarItem>
            <Link className="foreground text-[#26395C]">Eat & Drink</Link>
          </NavbarItem>

          <NavbarItem>
            <Link className="foreground text-[#26395C]">
              Club
              <sup className="py-[10px] px-[10px] rounded-full bg-[#0E8BFF] text-white">
                +Hot
              </sup>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="none">
                  Things to do <FaChevronDown />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete">Delete file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem>
            <Link className="foreground">
              <img src="shoping.png" />
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="none">
                  <FaRegUser /> Account
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem>Delete file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem className="w-full justify-center">
            <Button color="primary">Contact Now</Button>
          </NavbarItem>
        </NavbarContent>

          <div className="lg:hidden">
        <NavbarContent className="w-full" justify="end">
          <NavbarItem className="hidden lg:flex"> </NavbarItem>

          <NavbarItem>
            <img src="/shoping.png" alt="" />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-[#F5FAFF]">
          {Menuitems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link className="w-full text-black capitalize ">{item}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>


        
      </Navbar>
    </section>
  );
}

export default MyNavbar;
