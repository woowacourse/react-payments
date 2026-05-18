import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import CompletePage from './CompletePage';

const meta: Meta<typeof CompletePage> = {
  title: 'Components/CompletePage',
  component: CompletePage,
};

export default meta;

type Story = StoryObj<typeof CompletePage>;

export const Default: Story = {
  render: () => (
    <MemoryRouter
      initialEntries={[
        {
          pathname: '/complete',
          state: { cardNumberFirstSegment: '5511', cardBrand: 'BC' },
        },
      ]}
    >
      <Routes>
        <Route path="/complete" element={<CompletePage />} />
        <Route path="/" element={<div>홈으로 이동됨</div>} />
      </Routes>
    </MemoryRouter>
  ),
};
