import type { Meta, StoryObj } from '@storybook/react';
import CardPreview, { BRAND_IMAGE } from './CardPreview';
import { CardContext } from '../../../contexts/CardContext';
import { expect, within } from '@storybook/test';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    expiryDate: { month: '12', year: '25' },
  },

  decorators: [
    (Story) => {
      const cardContextValue = {
        cardNumbers: ['1234', '5678', '9012', '3456'],
        cardIssuer: '',
        setCardNumbers: () => {},
        setCardIssuer: () => {},
      };

      return (
        <CardContext.Provider value={cardContextValue}>
          <Story />
        </CardContext.Provider>
      );
    },
  ],
};

export const VisaUI: Story = {
  args: {
    expiryDate: { month: '12', year: '25' },
  },

  decorators: [
    (Story) => {
      const cardContextValue = {
        cardNumbers: ['4134', '5678', '9012', '3456'],
        cardIssuer: '',
        setCardNumbers: () => {},
        setCardIssuer: () => {},
      };
      return (
        <CardContext.Provider value={cardContextValue}>
          <Story />
        </CardContext.Provider>
      );
    },
  ],

  play: async ({ canvasElement }) => {
    const BRAND = 'visa';
    const altText = `${BRAND} 로고 이미지`;
    const canvas = within(canvasElement);
    const img = canvas.getByAltText(altText);
    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', BRAND_IMAGE[BRAND]);
  },
};

export const MasterUI: Story = {
  args: {
    expiryDate: { month: '12', year: '25' },
  },

  decorators: [
    (Story) => {
      const cardContextValue = {
        cardNumbers: ['5111', '1234', '1234', '1234'],
        cardIssuer: '',
        setCardNumbers: () => {},
        setCardIssuer: () => {},
      };
      return (
        <CardContext.Provider value={cardContextValue}>
          <Story />
        </CardContext.Provider>
      );
    },
  ],

  play: async ({ canvasElement }) => {
    const BRAND = 'master';
    const altText = `${BRAND} 로고 이미지`;
    const canvas = within(canvasElement);
    const img = canvas.getByAltText(altText);
    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', BRAND_IMAGE[BRAND]);
  },
};
