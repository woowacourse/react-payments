import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import CardForm from '../components/cardForm/CardForm';

type CardFormProps = {
  onChangeForm: (
    cardNumber: string[],
    expirationDate: string[],
    name: string
  ) => void;
};

const meta: Meta<CardFormProps> = {
  title: 'Payment/cardForm/CardForm',
  component: CardForm,
  tags: ['autodocs'],
};

const Template: Story<CardFormProps> = ({ onChangeForm }) => (
  <BrowserRouter>
    <CardForm onChangeForm={onChangeForm} />
  </BrowserRouter>
);

export const Primary: Story<CardFormProps> = Template.bind({});
Primary.args = {
  onChangeForm: () => {},
};

export default meta;
