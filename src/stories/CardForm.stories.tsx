import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import CardForm from '../components/cardForm/CardForm';
import { BrowserRouter } from 'react-router-dom';

type CardFormProps = {
  onChangeForm: (
    cardNumber: string[],
    expirationDate: string[],
    name: string
  ) => void;
};

const meta: Meta<CardFormProps> = {
  title: 'Payment/cardForm',
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

export const InputChange = Template.bind({});
InputChange.args = {
  onChangeForm: action('onChangeForm'),
};

export default meta;
