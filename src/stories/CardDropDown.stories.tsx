import { Meta, StoryObj } from '@storybook/react';
import CardDropDown from '../components/CardDropDown';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/testing-library'; // 추가된 import 문

export default {
  title: 'Components/CardDropDown',
  component: CardDropDown,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ padding: '3rem' }}>{Story()}</div>],
} satisfies Meta<typeof CardDropDown>;

const Template: StoryObj<typeof CardDropDown> = {
  args: {
    handleInput : {
      handleUpdateCardBrand: action(' '),
      handleUpdateCardBrandIsNextField: action(' '),
    }
  },
};

export const Default = Template;

export const DropdownClicked = {
  args: {
    ...Template.args,
    view: true, // Simulate dropdown being open by default
    selected: '카드사를 선택해주세요',
  },
  play: async ({ canvasElement } : {canvasElement : HTMLElement}) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('카드사를 선택해주세요'));
  },
};

export const ItemSelected = {
  args: {
    ...Template.args,
    selected: 'BC카드',
  },
  play: async ({ canvasElement } : {canvasElement : HTMLElement}) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('카드사를 선택해주세요'));
    await userEvent.click(canvas.getByText('BC카드')); // Simulating item selection
  },
};
