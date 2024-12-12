import React from 'react';
import './Button.scss';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      {label} test
    </button>
  );
}; 