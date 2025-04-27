import type {Meta, StoryObj} from '@storybook/react';
import CardPreview from './CardPreview';

const meta = {
  title: 'components/card',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardNumbers: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    expirationDate: {
      month: '',
      year: '',
    },
  },
};
export const VisaCard: Story = {
  args: {
    cardNumbers: {
      first: '4123',
      second: '1234',
      third: '5678',
      fourth: '9123',
    },
    expirationDate: {
      month: '02',
      year: '19',
    },
  },
};
export const MasterCard: Story = {
  args: {
    cardNumbers: {first: '5512', second: '1234', third: '5678', fourth: '9123'},
    expirationDate: {
      month: '05',
      year: '24',
    },
  },
};
