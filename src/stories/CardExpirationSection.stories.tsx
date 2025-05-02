import type { Meta, StoryObj } from '@storybook/react';
import CardExpirationSection from '../components/CardExpirationSection/CardExpirationSection';
import { useRef, useState } from 'react';
import { ExpirationKey, ExpirationType } from '../types';

const meta: Meta<typeof CardExpirationSection> = {
  title: 'CardExpirationSection',
  component: CardExpirationSection
};
export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: { expiration: ExpirationType }) => {
  const [expiration, setExpiration] = useState(args.expiration);
  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  const handleExpirationChange = (field: ExpirationKey, value: string) => {
    setExpiration((prev) => ({
      ...prev,
      [field]: { value, errorMessage: '' }
    }));
  };

  return <CardExpirationSection expiration={expiration} expirationRef={{ month: monthRef, year: yearRef }} handleExpirationChange={handleExpirationChange} />;
};

export const Default: Story = {
  render: () =>
    Template({
      expiration: {
        month: { value: '', errorMessage: '' },
        year: { value: '', errorMessage: '' }
      }
    })
};

export const Valid: Story = {
  render: () =>
    Template({
      expiration: {
        month: { value: '12', errorMessage: '' },
        year: { value: '29', errorMessage: '' }
      }
    })
};

export const InvalidMonth: Story = {
  render: () =>
    Template({
      expiration: {
        month: { value: '13', errorMessage: '1~12 사이 입력' },
        year: { value: '', errorMessage: '' }
      }
    })
};

export const InvalidYear: Story = {
  render: () =>
    Template({
      expiration: {
        month: { value: '10', errorMessage: '' },
        year: { value: '20', errorMessage: '현재보다 과거' }
      }
    })
};
