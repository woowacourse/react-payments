import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './CardCompanyModal';

const meta = {
  component: Modal,
  title: 'Section/Modal',
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalStory: Story = {
  args: {},
};
