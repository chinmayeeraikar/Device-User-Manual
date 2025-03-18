// DropdownButton.tsx
import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './DropdownButton.css'

interface DropdownButtonProps {
  children: React.ReactNode;
  open: boolean;
  toggle: () => void;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({ children, open, toggle }) => {
  return (
    <div onClick={toggle} className={`dropdown-btn ${open ? "button-open" : ""}`}>
      {children}
      <span className='toggle-icon'>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </div>
  )
}