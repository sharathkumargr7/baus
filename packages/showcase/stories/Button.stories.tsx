import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@components/core';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    variant: 'contained',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click me',
    variant: 'outlined',
    color: 'secondary',
  },
};

export const Error: Story = {
  args: {
    label: 'Click me',
    variant: 'contained',
    color: 'error',
  },
}; 