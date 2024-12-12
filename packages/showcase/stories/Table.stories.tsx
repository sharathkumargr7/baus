import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table, TableProps } from '@components/core';
import { Source } from '@storybook/blocks';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'A Material-UI based table component with customizable headers and data.',
      },
    },
  },
} as Meta;

const Template: Story<TableProps> = (args) => (
  <div>
    <Table {...args} />
    <Source
      language='tsx'
      code={`
// Example usage:
const headers = ${JSON.stringify(args.headers, null, 2)};
const data = ${JSON.stringify(args.data, null, 2)};

<Table headers={headers} data={data} />
      `}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Age', 'Email'],
  data: [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
  ],
};

export const WithMoreColumns = Template.bind({});
WithMoreColumns.args = {
  headers: ['Name', 'Age', 'Email', 'Role', 'Department'],
  data: [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
      role: 'Developer',
      department: 'Engineering'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      email: 'jane@example.com',
      role: 'Designer',
      department: 'UX'
    },
  ],
}; 