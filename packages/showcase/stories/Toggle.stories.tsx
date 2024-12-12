import React, { useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggle, ToggleProps, ToggleRef } from '@components/core';
import { Source } from '@storybook/blocks';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'An iOS-style toggle switch with customizable labels.',
      },
    },
  },
} as Meta;

const Template: Story<ToggleProps> = (args) => {
  const toggleRef = useRef<ToggleRef>(null);

  return (
    <div>
      <Toggle 
        {...args} 
        ref={toggleRef}
        onToggle={(isChecked) => console.log('Toggle state:', isChecked)}
      />
      <button onClick={() => toggleRef.current?.toggle()}>
        Toggle Programmatically
      </button>
      <button onClick={() => console.log('Current state:', toggleRef.current?.isChecked)}>
        Get Current State
      </button>
      <Source
        language='tsx'
        code={`
// Example usage with ref:
const toggleRef = useRef<ToggleRef>(null);

<Toggle
  label="${args.label}"
  defaultChecked={${args.defaultChecked}}
  onStateLabel="${args.onStateLabel}"
  offStateLabel="${args.offStateLabel}"
  disabled={${args.disabled}}
  ref={toggleRef}
  onToggle={(isChecked) => console.log('Toggle state:', isChecked)}
/>

// Access toggle methods:
toggleRef.current?.toggle();
toggleRef.current?.setChecked(true);
console.log(toggleRef.current?.isChecked);
        `}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Notifications',
  defaultChecked: false,
  onStateLabel: 'Enabled',
  offStateLabel: 'Disabled',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Airplane Mode',
  defaultChecked: true,
  disabled: true,
}; 