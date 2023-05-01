import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { SelectCardCompany } from '../../addCardPage/SelectCardCompany';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
};

export const Bank: Story = {
  args: {
    children: <SelectCardCompany onCardCompanySelectClick={() => {}} />,
  },
};
