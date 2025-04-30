import { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import CompletePage from '../pages/CompletePage';

const meta = {
  title: 'Pages/CompletePage',
  component: CompletePage,
  tags: ['autodocs'],
} satisfies Meta<typeof CompletePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    window.history.pushState({}, 'Complete', '/complete?brand=BC&number=1234');
    return <CompletePage />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const img = await canvas.findByAltText('Complete');
    expect(img).toBeDefined();

    const heading = canvas.getByRole('heading');
    expect(heading).toHaveTextContent('1234로 시작하는');
    expect(heading).toHaveTextContent('BC카드가 등록되었어요.');

    const button = canvas.getByRole('button', { name: /확인/ });
    expect(button).toBeDefined();
  },
};
