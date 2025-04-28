import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import { within, userEvent, expect } from '@storybook/test';
import ExpiryDateInputs from '../components/ExpiryDateInputs';
import { NumbersProvider } from '../contexts/NumbersContext';
import { BrandProvider } from '../contexts/BrandContext';
import { ExpiryDateProvider } from '../contexts/ExpiryDateContext';
import { CvcProvider } from '../contexts/CvcContext';
import { PasswordProvider } from '../contexts/PasswordContext';
import { ERROR_MESSAGE } from '../utils/cardValidation';

const meta = {
  title: 'Components/ExpiryDateInputs',
  component: ExpiryDateInputs,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <NumbersProvider>
          <BrandProvider>
            <ExpiryDateProvider>
              <CvcProvider>
                <PasswordProvider>
                  <Story />
                </PasswordProvider>
              </CvcProvider>
            </ExpiryDateProvider>
          </BrandProvider>
        </NumbersProvider>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ExpiryDateInputs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ExpiryDateInputs />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('expiration-component');

    const inputs = container.querySelectorAll('input');
    expect(inputs.length).toBe(2);

    expect(inputs[0]).toHaveAttribute('placeholder', 'MM');
    expect(inputs[1]).toHaveAttribute('placeholder', 'YY');

    expect(canvas.queryByText(ERROR_MESSAGE.INVALID_MONTH)).toBeNull();
    expect(canvas.queryByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeNull();
  },
};

export const InvalidCharacter: Story = {
  render: () => <ExpiryDateInputs />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText('MM');
    await userEvent.click(firstInput);
    await userEvent.type(firstInput, 'ab');

    expect(canvas.getByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeDefined();
  },
};

export const InvalidMonth: Story = {
  render: () => <ExpiryDateInputs />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText('MM');

    await userEvent.click(firstInput);
    await userEvent.type(firstInput, '13');

    expect(canvas.getByText(ERROR_MESSAGE.INVALID_MONTH)).toBeDefined();
  },
};

export const ValidExpiry: Story = {
  render: () => <ExpiryDateInputs />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput, yearInput] = canvas.getAllByRole('textbox');

    await userEvent.click(monthInput);
    await userEvent.type(monthInput, '12');
    await userEvent.click(yearInput);
    await userEvent.type(yearInput, '25');

    expect(canvas.queryByText(ERROR_MESSAGE.INVALID_MONTH)).toBeNull();
    expect(canvas.queryByText(ERROR_MESSAGE.INVALID_CHARACTER)).toBeNull();
  },
};
