import type { Meta, StoryObj } from '@storybook/react';
import CardExpirationSection from '../components/CardExpirationSection/CardExpirationSection';

const meta: Meta<typeof CardExpirationSection> = {
  title: 'CardExpirationSection',
  component: CardExpirationSection
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CardExpirationSection />
};
export const Valid: Story = {
  parameters: {
    formContext: {
      expiration: {
        month: { value: '12', errorMessage: '' },
        year: { value: '29', errorMessage: '' }
      }
    }
  },
  render: () => <CardExpirationSection />
};
export const InvalidMonth: Story = {
  parameters: {
    formContext: {
      expiration: {
        month: { value: '13', errorMessage: '1~12 사이 입력' },
        year: { value: '', errorMessage: '' }
      }
    }
  },
  render: () => <CardExpirationSection />
};
export const InvalidYear: Story = {
  parameters: {
    formContext: {
      expiration: {
        month: { value: '10', errorMessage: '' },
        year: { value: '20', errorMessage: '현재보다 과거' }
      }
    }
  },
  render: () => <CardExpirationSection />
};
