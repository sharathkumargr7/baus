import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import './Button.scss';

export interface ButtonProps extends Omit<MuiButtonProps, 'startIcon' | 'endIcon'> {
  label: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  startIcon,
  endIcon,
  variant = 'contained',
  color = 'primary',
  ...props
}) => {
  return (
    <MuiButton
      className="button"
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {label}
    </MuiButton>
  );
}; 