import React from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/react";
import { FaRegUser } from "react-icons/fa";

function MYdropdown() {
  return (
    <>
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
    </>
  );
}

export default MYdropdown;
