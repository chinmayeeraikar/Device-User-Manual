// DropdownItem.tsx
import React from 'react'
import './DropdownItem.css'

interface DropdownItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  return (
    <div className='dropdown-item' onClick={onClick}>
      {children}
    </div>
  )
}