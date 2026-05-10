import type { Meta, StoryObj } from '@storybook/react-vite';

import { FullScreen } from './FullScreen';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/FullScreen',
  component: FullScreen,
} satisfies Meta<typeof FullScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

const lorem = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aut, suscipit dolorem architecto enim
          nesciunt ea rerum dolore vitae ad, praesentium aliquam. Impedit cupiditate cum voluptatem doloremque
          accusantium voluptatibus et.`;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <FullScreen.Content>{Array.from({ length: 10 }).map(() => lorem)}</FullScreen.Content>
        <FullScreen.Action>bottom</FullScreen.Action>
      </>
    ),
  },
};
