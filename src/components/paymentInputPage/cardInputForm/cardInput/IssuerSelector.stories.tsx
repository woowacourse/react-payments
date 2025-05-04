import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import IssuerSelector from './IssuerSelector';
import { CardProvider } from '../../../../contexts/CardContext';

const meta = {
  title: 'IssuerSelector',
  component: IssuerSelector,
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
} satisfies Meta<typeof IssuerSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isValid: false,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByPlaceholderText('카드사를 선택해주세요')).toBeVisible();
  },
};

export const BC: Story = {
  play: async ({ canvasElement }) => {
    const ISSUER = 'BC카드';
    const canvas = within(canvasElement);
    const selectIssuer = canvas.getByPlaceholderText('카드사를 선택해주세요');
    await userEvent.click(selectIssuer);

    const option = canvas.getByText(ISSUER);
    await userEvent.click(option);

    expect(selectIssuer).toHaveValue(ISSUER);
  },
};

export const Shinhan: Story = {
  play: async ({ canvasElement }) => {
    const ISSUER = '신한카드';
    const canvas = within(canvasElement);
    const selectIssuer = canvas.getByPlaceholderText('카드사를 선택해주세요');
    await userEvent.click(selectIssuer);

    const option = canvas.getByText(ISSUER);
    await userEvent.click(option);

    expect(selectIssuer).toHaveValue(ISSUER);
  },
};

export const Kakao: Story = {
  play: async ({ canvasElement }) => {
    const ISSUER = '카카오뱅크';
    const canvas = within(canvasElement);
    const selectIssuer = canvas.getByPlaceholderText('카드사를 선택해주세요');
    await userEvent.click(selectIssuer);

    const option = canvas.getByText(ISSUER);
    await userEvent.click(option);

    expect(selectIssuer).toHaveValue(ISSUER);
  },
};

export const Hyundai: Story = {
  play: async ({ canvasElement }) => {
    const ISSUER = '현대카드';
    const canvas = within(canvasElement);
    const selectIssuer = canvas.getByPlaceholderText('카드사를 선택해주세요');
    await userEvent.click(selectIssuer);

    const option = canvas.getByText(ISSUER);
    await userEvent.click(option);

    expect(selectIssuer).toHaveValue(ISSUER);
  },
};

export const Woori: Story = {
  play: async ({ canvasElement }) => {
    const ISSUER = '우리카드';
    const canvas = within(canvasElement);
    const selectIssuer = canvas.getByPlaceholderText('카드사를 선택해주세요');
    await userEvent.click(selectIssuer);

    const option = canvas.getByText(ISSUER);
    await userEvent.click(option);

    expect(selectIssuer).toHaveValue(ISSUER);
  },
};

export const Lotte: Story = {
  play: async ({ canvasElement }) => {
    const ISSUER = '롯데카드';
    const canvas = within(canvasElement);
    const selectIssuer = canvas.getByPlaceholderText('카드사를 선택해주세요');
    await userEvent.click(selectIssuer);

    const option = canvas.getByText(ISSUER);
    await userEvent.click(option);

    expect(selectIssuer).toHaveValue(ISSUER);
  },
};

export const Hana: Story = {
  play: async ({ canvasElement }) => {
    const ISSUER = '하나카드';
    const canvas = within(canvasElement);
    const selectIssuer = canvas.getByPlaceholderText('카드사를 선택해주세요');
    await userEvent.click(selectIssuer);

    const option = canvas.getByText(ISSUER);
    await userEvent.click(option);

    expect(selectIssuer).toHaveValue(ISSUER);
  },
};

export const KB: Story = {
  play: async ({ canvasElement }) => {
    const ISSUER = '국민카드';
    const canvas = within(canvasElement);
    const selectIssuer = canvas.getByPlaceholderText('카드사를 선택해주세요');
    await userEvent.click(selectIssuer);

    const option = canvas.getByText(ISSUER);
    await userEvent.click(option);

    expect(selectIssuer).toHaveValue(ISSUER);
  },
};
