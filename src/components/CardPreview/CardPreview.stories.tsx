import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numbers: { first: '', second: '', third: '', fourth: '' },
    cardLogo: '',
    expiration: { month: '', year: '' }
  },
  render: (args) => <CardPreview {...args} />
};

export const Basic: Story = {
  args: {
    numbers: { first: '1424', second: '2532', third: '5421', fourth: '1112' },
    cardLogo: '',
    expiration: { month: '11', year: '27' }
  },
  render: (args) => <CardPreview {...args} />
};

export const Visa: Story = {
  args: {
    numbers: { first: '4424', second: '2532', third: '5421', fourth: '1112' },
    cardLogo: 'visa',
    expiration: { month: '11', year: '27' }
  },
  render: (args) => <CardPreview {...args} />
};

export const Master: Story = {
  args: {
    numbers: { first: '5124', second: '2532', third: '5421', fourth: '1112' },
    cardLogo: 'master',
    expiration: { month: '11', year: '27' }
  },
  render: (args) => <CardPreview {...args} />
};
