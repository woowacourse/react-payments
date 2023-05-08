import { Story } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { CardItem, CardItemProps } from './CardItem';
import Theme from '../../../styles/theme';

export default {
  component: CardItem,
  title: 'CardItem',
  decorators: [
    (Story: Story) => {
      return (
        <ThemeProvider theme={Theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

const Template: Story<CardItemProps> = (args: CardItemProps) => (
  <CardItem {...args} />
);

const cardNumbers = '1234567812345678';

export const Default = Template.bind({});
Default.args = {
  cardNumberFirst: '',
  cardNumberSecond: '',
  cardNumberThird: '',
  cardNumberFourth: '',
  month: '',
  year: '',
  company: '',
};

export const CardList = Template.bind({});
CardList.args = {
  cardNumberFirst: cardNumbers.slice(0, 4),
  cardNumberSecond: cardNumbers.slice(4, 8),
  cardNumberThird: cardNumbers.slice(8, 12),
  cardNumberFourth: cardNumbers.slice(12, 16),
  month: '',
  year: '',
  company: '',
};

export const Preview = Template.bind({});
Preview.args = {
  cardNumberFirst: '1234',
  cardNumberSecond: '5678',
  cardNumberThird: '',
  cardNumberFourth: '12',
  month: '12',
  year: '',
  username: 'jero',
  company: '',
};

export const PreviewWithCompany = Template.bind({});
PreviewWithCompany.args = {
  cardNumberFirst: '1234',
  cardNumberSecond: '5678',
  cardNumberThird: '',
  cardNumberFourth: '1234',
  month: '12',
  year: '21',
  username: 'jero',
  company: 'KAKAO',
};
