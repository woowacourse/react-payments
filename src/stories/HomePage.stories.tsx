import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import HomePage from '../pages/HomePage';

const meta = {
  title: 'Pages/HomePage',
  component: HomePage,
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <HomePage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByTestId('preview-component')).toBeDefined();

    expect(canvas.getByTestId('numbers-component')).toBeDefined();
    expect(canvas.queryByTestId('brand-component')).toBeNull();
    expect(canvas.queryByTestId('expiration-component')).toBeNull();
    expect(canvas.queryByTestId('cvcnumbers-component')).toBeNull();
    expect(canvas.queryByTestId('password-component')).toBeNull();

    expect(canvas.queryByRole('button')).toBeNull();
  },
};

export const AfterNumberInputs: Story = {
  render: () => <HomePage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const numbersContainer = canvas.getByTestId('numbers-component');
    const inputs = within(numbersContainer).getAllByRole('textbox');
    for (const input of inputs) {
      await userEvent.click(input);
      await userEvent.type(input, '4242');
    }

    expect(canvas.getByTestId('brand-component')).toBeDefined();
  },
};

export const FullFlow: Story = {
  render: () => <HomePage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const numbersContainer = canvas.getByTestId('numbers-component');
    const numberInputs = within(numbersContainer).getAllByRole('textbox');
    for (const input of numberInputs) {
      await userEvent.click(input);
      await userEvent.type(input, '4242');
    }

    const brandContainer = canvas.getByTestId('brand-component');
    const select = within(brandContainer).getByRole('combobox');
    await userEvent.selectOptions(select, 'BC');

    const expiryContainer = canvas.getByTestId('expiration-component');
    const expiryInputs = within(expiryContainer).getAllByRole('textbox');
    await userEvent.click(expiryInputs[0]);
    await userEvent.type(expiryInputs[0], '12');
    await userEvent.click(expiryInputs[1]);
    await userEvent.type(expiryInputs[1], '25');

    const cvcContainer = canvas.getByTestId('cvcnumbers-component');
    const cvcInput = within(cvcContainer).getByRole('textbox');
    await userEvent.click(cvcInput);
    await userEvent.type(cvcInput, '123');

    const pwdContainer = canvas.getByTestId('password-component');
    const pwdInput = within(pwdContainer).getByPlaceholderText('**');
    await userEvent.click(pwdInput);
    await userEvent.type(pwdInput, '12');

    const button = canvas.getByRole('button', { name: /확인/ });
    expect(button).toBeEnabled();
  },
};
