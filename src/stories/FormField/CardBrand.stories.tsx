import type { Meta, StoryObj } from '@storybook/react';
import CardBrand from '../../components/FormField/CardBrand';
import { fn } from '@storybook/test';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';
import { useState } from 'react';

const previewProps = {
  cardNumberState: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expirationDateState: {
    month: '',
    year: '',
  },
  userNameState: '',
  showImageCondition: {
    visaShowCondition: false,
    masterCardShowCondition: false,
  },
  cvcNumberState: '',
  isFocusCVCPreview: false,
  setIsFocusCVCPreview: fn(),
};

const meta = {
  title: 'FormField_카드브랜드',
  component: CardBrand,
  decorators: [
    (Story, context) => {
      const [brand, setBrand] = useState<string | null>(null);
      return (
        <div>
          <CardInformationPreview {...previewProps} cardBrandState={brand} />
          <Story args={{ ...context.args, cardBrandState: brand, setCardBrandState: setBrand }} />
        </div>
      );
    },
  ],
  args: {
    setCardBrandState: fn(),
  },
} satisfies Meta<typeof CardBrand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 카드브랜드와_셀렉트: Story = {
  args: {
    cardBrandState: null,
  },
};
