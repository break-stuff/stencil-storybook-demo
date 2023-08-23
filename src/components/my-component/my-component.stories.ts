import type { StoryObj } from '@storybook/web-components';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';
import { MyComponent } from './my-component';

const { events, args, argTypes, template } = getWcStorybookHelpers('my-component');

const meta = {
  component: 'my-component',
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};
export default meta;

type Story = StoryObj<MyComponent & typeof args>;

export const Primary: Story = {
  render: (args) => template(args),
  args: {
    first: 'Abe',
    last: 'Froman',
  },
};
