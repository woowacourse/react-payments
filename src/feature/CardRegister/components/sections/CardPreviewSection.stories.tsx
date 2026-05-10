import type {Meta, StoryObj} from '@storybook/react-vite';

import CardPreviewSection from './CardPreviewSection';
import CardPreviewContainer from '../preview/CardPreviewContainer';

const emptyPreviewSlot = (
  <CardPreviewContainer cardNumbers={['', '', '', '']} brand={null} expiryDate={['', '']} selectedCompany={null} />
);

const filledPreviewSlot = (
  <CardPreviewContainer
    cardNumbers={['4123', '5678', '1234', '5678']}
    brand={null}
    expiryDate={['12', '30']}
    selectedCompany={null}
  />
);

const meta = {
  title: 'feature/CardRegister/components/sections/CardPreviewSection',
  component: CardPreviewSection,
  tags: ['autodocs'],
  args: {
    previewSlot: emptyPreviewSlot,
  },
} satisfies Meta<typeof CardPreviewSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    previewSlot: filledPreviewSlot,
  },
};
