import React from 'react';
import './Button.scss';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label} Tes1ttt
    </button>
  );
}; 