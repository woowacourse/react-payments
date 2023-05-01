import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import AddCardButton from '../components/CardListPageComponents/AddCardButton';

const meta = {
  title: 'Payment/cardListPageComponents/AddCardButton',
  component: AddCardButton,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof AddCardButton>;

interface AddCardButtonProps {
  onOpen: () => void;
}

const Template: Story<AddCardButtonProps> = (args) => (
  <BrowserRouter>
    <AddCardButton {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  onOpen: action('onOpen'),
};

export default meta;
