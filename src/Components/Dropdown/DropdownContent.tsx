// DropdownContent.tsx
import React from 'react'
import './DropdownContent.css'

interface DropdownContentProps {
  children: React.ReactNode;
  open: boolean;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({ children, open }) => {
  return (
    <div className={`dropdown-content ${open ? 'content-open' : ""}`}>
      {children}
    </div>
  )
}