import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '@components/core';
import { ArrowDownMd } from '@components/core';
import { Source } from '@storybook/blocks';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A Material-UI based button component with customizable variants and icons.',
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} />
    <Source
      language='tsx'
      code={`
// Example usage:
<Button
  label="${args.label}"
  variant="${args.variant}"
  color="${args.color}"
  ${args.startIcon ? 'startIcon={<Icons.ArrowRight />}' : ''}
  ${args.endIcon ? 'endIcon={<Icons.ArrowRight />}' : ''}
/>
      `}
    />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'contained',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'contained',
  color: 'secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined Button',
  variant: 'outlined',
  color: 'primary',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'With Icon',
  endIcon: <ArrowDownMd />,
  variant: 'contained',
  color: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  variant: 'contained',
  color: 'primary',
  disabled: true,
}; 