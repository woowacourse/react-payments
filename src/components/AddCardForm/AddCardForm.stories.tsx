import { Meta } from '@storybook/react';
import AddCardForm from './AddCardForm';

const meta = {
  component: AddCardForm,
  title: 'Section/AddCardForm',
  tags: ['autodocs'],
} satisfies Meta<typeof AddCardForm>;

export default meta;

export const AddCardFormStory = () => {
  return <AddCardForm />;
};

AddCardFormStory.args = {};
