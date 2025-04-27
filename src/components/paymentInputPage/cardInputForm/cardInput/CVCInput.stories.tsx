import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import styles from '../../../common/inputForm/input/Input.module.css';
import CardCVCInput from './CVCInput';
import { CardProvider } from '../../../../contexts/CardContext';

const meta = {
  title: 'CardCVCInput',
  component: CardCVCInput,
  args: {
    isValid: true,
    setIsValid: () => {},
  },
  decorators: [
    (Story) => (
      <CardProvider>
        <Story />
      </CardProvider>
    ),
  ],
} satisfies Meta<typeof CardCVCInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    isValid: false,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText('123');

    await userEvent.type(firstInput, 'abc');
    expect(firstInput.className).toContain(styles.isNotValid);

    expect(canvas.getByText('숫자만 입력 가능합니다.')).toBeVisible();
  },
};
