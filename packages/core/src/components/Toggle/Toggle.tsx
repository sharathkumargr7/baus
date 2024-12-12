import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import './Toggle.scss';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export interface ToggleProps {
  label?: string;
  defaultChecked?: boolean;
  onStateLabel?: string;
  offStateLabel?: string;
  disabled?: boolean;
  onToggle?: (isChecked: boolean) => void;
}

export interface ToggleRef {
  isChecked: boolean;
  toggle: () => void;
  setChecked: (checked: boolean) => void;
}

export const Toggle = forwardRef<ToggleRef, ToggleProps>(({
  label,
  defaultChecked = false,
  onStateLabel = 'On',
  offStateLabel = 'Off',
  disabled = false,
  onToggle,
}, ref) => {
  const [checked, setChecked] = useState(defaultChecked);

  useImperativeHandle(ref, () => ({
    isChecked: checked,
    toggle: () => {
      if (!disabled) {
        setChecked(prev => !prev);
        onToggle?.(!checked);
      }
    },
    setChecked: (newValue: boolean) => {
      if (!disabled) {
        setChecked(newValue);
        onToggle?.(newValue);
      }
    }
  }));

  const stateLabel = checked ? onStateLabel : offStateLabel;
  const combinedLabel = label ? `${label} - ${stateLabel}` : stateLabel;

  return (
    <div className="toggle-container">
      <FormControlLabel
        control={
          <IOSSwitch
            checked={checked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (!disabled) {
                setChecked(e.target.checked);
                onToggle?.(e.target.checked);
              }
            }}
            disabled={disabled}
          />
        }
        label={combinedLabel}
      />
    </div>
  );
});

Toggle.displayName = 'Toggle'; 