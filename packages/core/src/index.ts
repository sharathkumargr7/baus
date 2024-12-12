export * from './components/Button/Button'; 
export * from './components/Table/Table'; 
export * from './components/Chip/Chip';
export * from './components/Toggle/Toggle';
import ArrowDownXs from './assets/icons/arrow-down-xs.svg';
import ArrowDownSm from './assets/icons/arrow-down-sm.svg';
import ArrowDownMd from './assets/icons/arrow-down-md.svg';

export const Icons = {
  'arrow-down-xs': ArrowDownXs,
  'arrow-down-sm': ArrowDownSm,
  'arrow-down-md': ArrowDownMd,
} as const; 