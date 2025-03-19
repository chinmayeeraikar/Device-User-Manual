import React, { useState } from "react";
import { DropdownButton } from "./DropdownButton";
import { DropdownContent } from "./DropdownContent";
import "./Dropdown.css";

interface DropdownProps {
  buttonText: string | React.ReactNode;
  content: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ buttonText, content }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setOpen((open) => !open);
  };

  return (
    <div className="dropdown">
      <DropdownButton toggle={toggleDropdown} open={open}>
        {buttonText}
      </DropdownButton>
      <DropdownContent open={open}>{content}</DropdownContent>
    </div>
  );
};
