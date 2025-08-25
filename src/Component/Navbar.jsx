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

import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import MYMordal from "./Home/Mordal";
import MYdropdown from "./Home/dropdown";

function MyNavbar() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const Menuitems = ["Events", "Club"];
  let value = true;

  return (
    <section className="my-3">
      <Navbar
        isMenuOpen={isOpenMenu}
        onMenuOpenChange={setOpenMenu}
        maxWidth="2xl"
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
              <NavLink to="/">
                {" "}
                <img className="w-44" src="logo.png" />
              </NavLink>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* destop  */}

        <NavbarContent className=" sm:flex hidden gap-4 w-full justify-center  ">
          <NavbarBrand>
            <NavLink to="/">
              {" "}
              <img className="w-44" src="logo.png" />
            </NavLink>
          </NavbarBrand>

          {/* Navitem  */}
          <NavbarItem>
            <NavLink
              to="/drink"
              className="foreground text-[#26395C]"
              style={({ isActive }) => ({
                color: isActive ? "#0E8BFF" : "black",
              })}
            >
              Eat & Drink
            </NavLink>
          </NavbarItem>

          <NavbarItem>
            <NavLink
              to="/club"
              className="foreground text-[#26395C]"
              style={({ isActive }) => ({
                color: isActive ? "#0E8BFF" : "black",
              })}
            >
              Club
              <sup className="py-[2px] px-[4px] rounded-full bg-[#0E8BFF] text-[8px] text-white">
                +Hot
              </sup>
            </NavLink>
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
              <NavLink to="/cart">
                <img className="w-24 " src="/shoping.png" alt="" />
              </NavLink>
            </Link>
          </NavbarItem>

          <NavbarItem>
            {value === true ? <MYMordal /> : <MYdropdown />}
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
