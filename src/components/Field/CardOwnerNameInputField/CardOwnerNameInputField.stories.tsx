import { Meta, StoryObj } from '@storybook/react';
import CardOwnerNameInputField from './CardOwnerNameInputField';

const meta: Meta = {
  title: 'form/CardOwnerNameInputField',
  component: CardOwnerNameInputField,
};

export default meta;

type InputProps = {
  value: string;
  isError: boolean;
};

export const Default: StoryObj<InputProps> = (args: any) => <CardOwnerNameInputField ownerName={'PAKXE'} />;
