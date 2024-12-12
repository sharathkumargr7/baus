import React from 'react';
import { Chip as MuiChip } from '@mui/material';
import './Chip.scss';

export interface ChipProps {
  label: string;
  onDelete?: () => void;
  icon?: React.ReactElement;
  variant?: 'filled' | 'outlined';
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export const Chip: React.FC<ChipProps> = ({
  label,
  onDelete,
  icon,
  variant = 'filled',
  color = 'default'
}) => {
  return (
    <MuiChip
      className="chip"
      label={label}
      onDelete={onDelete}
      icon={icon}
      variant={variant}
      color={color}
    />
  );
}; 