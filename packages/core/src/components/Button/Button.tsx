import React from 'react';
import { Button as MuiButton } from '@mui/material';
import './Button.scss';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  startIcon,
  endIcon,
  variant = 'contained',
  color = 'primary'
}) => {
  return (
    <MuiButton
      className="button"
      onClick={onClick}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {label}
    </MuiButton>
  );
}; 