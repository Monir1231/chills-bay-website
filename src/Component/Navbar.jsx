import React, { useState } from "react";
import { PiShoppingCartBold, PiShoppingCartLight } from "react-icons/pi";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";

import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import MYMordal from "./Mordal";
import MYdropdown from "./Dropdown";
import { ThemeColor } from "../lib/utils";
import { useSelector } from "react-redux";


function MyNavbar({isDark}) {

   const carts = useSelector((state)=>state.carts)
  console.log(carts)

  const cartItemNo = carts.reduce((total,product) => total + product.quantity, 0)

  const [isOpenMenu, setOpenMenu] = useState(false);
  let value = true



  return (
    <section className=" py-3">
      <Navbar
        isMenuOpen={isOpenMenu}
        onMenuOpenChange={setOpenMenu}
        maxWidth="2xl"
         className={ThemeColor(isDark)}
       
      >
        {/* Mobile Menu Toggle */}
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        {/* Desktop Navbar */}
        <NavbarContent className="sm:flex hidden gap-6 w-full justify-center items-center">
          {/* Logo */}
          <NavbarBrand>
            <NavLink to="/">
              <img className="w-44" src="/logo.png" alt="logo" />
            </NavLink>
          </NavbarBrand>

          {/* Eat & Drink */}
          <NavbarItem>
            <NavLink
            
              to="/drink"
             
              className={({ isActive }) =>
                isActive ? "text-[#0E8BFF]" : isDark ? " text-white": "text-black" 
              }
            >
              Eat & Drink
            </NavLink>
          </NavbarItem>

          {/* Club */}
          <NavbarItem>
            <NavLink
              to="/club"
              className={({ isActive }) =>
                isActive ? "text-white" : isDark ? " text-white": "text-black" 
              }
            >
              Club
              <sup className="ml-1 py-[2px] px-[4px] rounded-full bg-[#0E8BFF] text-[8px] text-white">
                +Hot
              </sup>
            </NavLink>
          </NavbarItem>

          {/* Dropdown */}
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="light" className={isDark ? " text-white": "text-black" } >
                  Things to do <FaChevronDown />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions" >
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete">Delete file</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          {/* Cart */}
          <NavbarItem>
            <NavLink className={" relative"} to={"/cart"}>
             {isDark ? <PiShoppingCartLight className=" size-6" />:  <PiShoppingCartBold className=" size-6" /> }
             <sup className= " absolute top-[-6px] right-[-6px] flex items-center justify-center size-4 rounded-full bg-[#0E8BFF] text-[10px] text-white">
              {cartItemNo}
              </sup>
            </NavLink>
          </NavbarItem>

          {/* User Toggle */}
          <NavbarItem>
       
              { value === false ? <MYdropdown /> : <MYMordal />}
        
          </NavbarItem>

          {/* Contact Button */}
          <NavbarItem>
            <NavLink to="/contact">
              <Button color="primary">Contact Now</Button>
            </NavLink>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        
        <NavbarMenu className="bg-[#F5FAFF] pt-10 ">
         
          <div className=" space-y-4 pt-3">
            {/* Eat & Drink */}
          <NavbarItem>
            <NavLink
              to="/drink"
              className={({ isActive }) =>
                isActive ? "text-[#0E8BFF]" : "text-[#26395C]"
              }
            >
              Eat & Drink
            </NavLink>
          </NavbarItem>

          {/* Club */}
          <NavbarItem>
            <NavLink
              to="/club"
              className={({ isActive }) =>
                isActive ? "text-[#0E8BFF]" : "text-[#26395C]"
              }
            >
              Club
              <sup className=" py-[2px] px-[4px] rounded-full bg-[#0E8BFF] text-[8px] text-white">
                +Hot
              </sup>
            </NavLink>
          </NavbarItem>


            <NavbarItem className=" mt-5">
          <NavLink to="/contact">
            <Button
              className=" lg:hidden flex  py-1 px-4 text-[10px] font-semibold"
              color="primary"
            >
              Contact Now
            </Button>
          </NavLink>
        </NavbarItem>

       
          </div>
          <NavLink to={"/"}>
            <img className="w-30  lg:hidden mt-1" src="/logo.png" alt="logo" />
          </NavLink>
        </NavbarMenu>



          {/* User Toggle */}
          <NavbarItem className=" lg:hidden flex">
           
              { value === false ? <MYdropdown /> : <MYMordal />}
         
          </NavbarItem>

        

           {/* Dropdown */}
          <NavbarItem className=" lg:hidden flex">
            <Dropdown>
              <DropdownTrigger>
                <Button  className=" bg-gray-100">
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

        {/* cart  */}
        <NavbarItem className=" flex md:hidden">
          <NavLink className={" relative"} to="/cart">
             {isDark ? <PiShoppingCartLight className=" size-6 font-bold" />:  <PiShoppingCartBold className=" size-6" /> }

            <sup className= " absolute top-[-6px] right-[-6px] flex items-center justify-center size-4 rounded-full bg-[#0E8BFF] text-[10px] text-white">
              {cartItemNo}
              </sup>
          </NavLink>
        </NavbarItem>
      </Navbar>
    </section>
  );
}

export default MyNavbar;
