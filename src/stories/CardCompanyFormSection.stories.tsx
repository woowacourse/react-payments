import type { Meta, StoryObj } from '@storybook/react';
import CardCompanyFormSection from '../components/CardCompanyFormSection';

const meta = {
  title: 'CardCompanyFormSection',
  component: CardCompanyFormSection,
} satisfies Meta<typeof CardCompanyFormSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { changeCardCompany: () => {}, changeIsValid: () => {} },
};
