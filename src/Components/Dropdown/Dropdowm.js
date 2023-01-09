import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const Dropdowm = ({bid, delBoard}) => {
  return (
    <DropdownButton id="dropdown-basic-button" title="" size="sm">
      <Dropdown.Item onClick={() => delBoard(bid)} >Delete</Dropdown.Item>
    </DropdownButton>
  );
};
