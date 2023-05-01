import { Meta, StoryObj } from '@storybook/react';
import { SelectCardCompany } from '../../addCardPage/SelectCardCompany';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};

export const Bank: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: <SelectCardCompany onCardCompanySelectClick={() => {}} />,
  },
};
