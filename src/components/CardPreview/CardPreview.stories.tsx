import type { Meta } from '@storybook/react';
import CardPreview from './CardPreview';
import {
  CardFormProvider,
  useCardFormContext,
} from '../../context/CardFormContext';
import React from 'react';

const meta: Meta<typeof CardPreview> = {
  title: 'Components/CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
};

export default meta;

const CardPreviewWithMockDataVisa = () => {
  const { setCardNumbers, setMonth, setYear, setBrand } = useCardFormContext();

  React.useEffect(() => {
    setCardNumbers(['4567', '1234', '1234', '1234']);
    setMonth('12');
    setYear('26');
    setBrand('shinhan');
  }, []);

  return <CardPreview />;
};

export const TemplateVisaShinhan = () => (
  <CardFormProvider>
    <CardPreviewWithMockDataVisa />
  </CardFormProvider>
);

const CardPreviewWithMockDataMaster = () => {
  const { setCardNumbers, setMonth, setYear, setBrand } = useCardFormContext();

  React.useEffect(() => {
    setCardNumbers(['5467', '1234', '1234', '1234']);
    setMonth('12');
    setYear('26');
    setBrand('kakao');
  }, []);

  return <CardPreview />;
};

export const TemplateMasterKakao = () => (
  <CardFormProvider>
    <CardPreviewWithMockDataMaster />
  </CardFormProvider>
);
