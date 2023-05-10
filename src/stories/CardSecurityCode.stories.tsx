import { Meta, StoryObj } from '@storybook/react';
import CardSecurityCode from '../components/CardSecurityCode/CardSecurityCode';
import RefProvider from '../contexts/RefProvider';
import useSecurityCode from '../hooks/useSecurityCode';
import { userEvent, within } from '@storybook/testing-library';

const meta = {
  component: CardSecurityCode,
  title: 'Section/CardSecurityCode',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardSecurityCode>;

export default meta;

type Story = StoryObj<typeof CardSecurityCode>;

export const Default: Story = {
  render: () => {
    const { securityCode, securityCodeError, isValidatedSecurityCode } =
      useSecurityCode();

    return (
      <CardSecurityCode
        securityCode={securityCode}
        errorMessage={securityCodeError}
        isValidatedSecurityCode={isValidatedSecurityCode}
      />
    );
  },
};

export const OpenTooltipInteraction: Story = {
  render: () => {
    const { securityCode, securityCodeError, isValidatedSecurityCode } =
      useSecurityCode();

    return (
      <CardSecurityCode
        securityCode={securityCode}
        errorMessage={securityCodeError}
        isValidatedSecurityCode={isValidatedSecurityCode}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tooltip = canvas.queryByText('?');

    if (!tooltip) return;

    await userEvent.click(tooltip);
  },
};

export const SuccessInteraction: Story = {
  render: () => {
    const { securityCode, securityCodeError, isValidatedSecurityCode } =
      useSecurityCode();

    return (
      <CardSecurityCode
        securityCode={securityCode}
        errorMessage={securityCodeError}
        isValidatedSecurityCode={isValidatedSecurityCode}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardSecurityCodeInput = canvas.queryByPlaceholderText('•••');

    if (!cardSecurityCodeInput) return;

    await userEvent.type(cardSecurityCodeInput, '123', { delay: 200 });
  },
};

export const FailureInteraction: Story = {
  render: () => {
    const { securityCode, securityCodeError, isValidatedSecurityCode } =
      useSecurityCode();

    return (
      <CardSecurityCode
        securityCode={securityCode}
        errorMessage={securityCodeError}
        isValidatedSecurityCode={isValidatedSecurityCode}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardSecurityCodeInput = canvas.queryByPlaceholderText('•••');

    if (!cardSecurityCodeInput) return;

    await userEvent.type(cardSecurityCodeInput, '1rㄱ', { delay: 200 });
  },
};
