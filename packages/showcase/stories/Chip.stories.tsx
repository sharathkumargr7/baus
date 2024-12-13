import React from 'react';
import { Chip, CustomIcon, Menu } from '@components/core';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    icon: {
      control: false
    },
    onDelete: {
      control: false
    }
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    label: 'Chip',
    variant: 'filled',
    color: 'default',
  },
};

export const WithIcon: Story = {
  render: () => (
    <Chip
      label="With Icon"
      icon={<Menu/>}
      variant="filled"
      color="primary"
    />
  ),
};

export const WithIconIndex: Story = {
  render: () => (
    <Chip
      label="With Icon (Index)"
      icon={<CustomIcon svg="arrow-down-xs" />}
      variant="filled"
      color="primary"
    />
  ),
};

export const WithDelete: Story = {
  render: () => (
    <Chip
      label="Deletable"
      onDelete={() => {}}
      icon={<CustomIcon svg="arrow-down-xs" />}
      variant="outlined"
      color="secondary"
    />
  ),
}; 