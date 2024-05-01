import type { Meta, StoryObj } from '@storybook/react';
import CardBrand from '../../components/FormField/CardBrand';
import { fn } from '@storybook/test';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';
import React, { useState } from 'react';

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
      const [brand, setBrand] = useState<string>('');
      const handleBrand = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBrand(event.target.value);
      };
      return (
        <div>
          <CardInformationPreview {...previewProps} cardBrandState={brand} />
          <Story args={{ ...context.args, cardBrandState: brand, onChange: handleBrand }} />
        </div>
      );
    },
  ],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof CardBrand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 카드브랜드와_셀렉트: Story = {
  args: {
    cardBrandState: '',
  },
};
