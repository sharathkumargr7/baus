// This file is auto-generated. Do not edit manually

import { FunctionComponent, SVGProps } from 'react';

import ArrowDownMd from './arrow-down-md.svg';
export { ArrowDownMd };
import ArrowDownSm from './arrow-down-sm.svg';
export { ArrowDownSm };
import ArrowDownXs from './arrow-down-xs.svg';
export { ArrowDownXs };
import ArrowRight from './arrow-right.svg';
export { ArrowRight };
import Close from './close.svg';
export { Close };
import Menu from './menu.svg';
export { Menu };

export const Icons = {
  'arrow-down-md': ArrowDownMd,
  'arrow-down-sm': ArrowDownSm,
  'arrow-down-xs': ArrowDownXs,
  'arrow-right': ArrowRight,
  'close': Close,
  'menu': Menu,
} as const;

export type IconComponent = FunctionComponent<SVGProps<SVGSVGElement>>;
export type IconName = keyof typeof Icons;
