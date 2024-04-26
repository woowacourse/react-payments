import { Meta, StoryObj } from '@storybook/react';
import CardOwnerNameInputField from './CardOwnerNameInputField';

const meta: Meta = {
  title: 'form/CardOwnerNameInputField',
  component: CardOwnerNameInputField,
};

export default meta;

type InputProps = {};

export const Default: StoryObj<InputProps> = () => (
  <CardOwnerNameInputField ownerName={'PAKXE'} handleOwnerName={() => {}} errorMessage='' />
);

Default.args = {};
