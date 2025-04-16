import { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import App from '../App';

const meta = {
  title: 'App',
  component: App,
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <App />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const previewComponent = await canvas.findByTestId('preview-component');
    expect(previewComponent).toBeDefined();

    const cardNumbersComponent = await canvas.findByTestId(
      'cardnumbers-component'
    );
    expect(cardNumbersComponent).toBeDefined();

    const expirationComponent = await canvas.findByTestId(
      'expiration-component'
    );
    expect(expirationComponent).toBeDefined();

    const cvcNumbersComponent = await canvas.findByTestId(
      'cvcnumbers-component'
    );
    expect(cvcNumbersComponent).toBeDefined();
  },
};
