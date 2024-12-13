import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { Icons, type IconName } from '../../assets/icons';
import { ElementType } from 'react';
import './CustomIcon.scss';

export interface CustomIconProps extends Omit<SvgIconProps, 'component'> {
  svg: IconName;
}

export const CustomIcon: React.FC<CustomIconProps> = ({ svg, className, ...props }) => {
  const Icon = Icons[svg] as ElementType;
  const sizeClass = svg.includes('--') ? `icon--${svg.split('--')[1]}` : '';
  
  return (
    <SvgIcon 
      component={Icon} 
      className={`${sizeClass} ${className || ''}`}
      {...props} 
    />
  );
}; 