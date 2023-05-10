import type { Meta, StoryObj } from '@storybook/react';

import CardBox from '../components/CardBox/CardBox';
import { COMPANY_LIST } from '../constants/company';

const meta: Meta<typeof CardBox> = {
  title: 'Components/CardBox',
  component: CardBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardBox>;

const cardTemplate = {
  serialNumbers: {
    firstSerialNumber: '01234',
    secondSerialNumber: '5678',
    thirdSerialNumber: '01234',
    fourthSerialNumber: '5678',
  },
  expirationDate: {
    month: '01',
    year: '23',
  },
  ownerName: null,
  securityCode: '012',
  password: {
    firstPassword: '0',
    secondPassword: '1',
  },
  company: {
    name: '',
    backgroundColor: '',
  },
  nickname: '',
};

const companyList = COMPANY_LIST.map(company => {
  const card = { ...cardTemplate };

  card.company = {
    name: company.NAME,
    backgroundColor: company.BACKGROUND_COLOR,
  };

  return card;
});

export const BC카드: Story = {
  args: {
    card: companyList[0],
    backgroundColor: companyList[0].company.backgroundColor,
  },
};

export const 신한카드: Story = {
  args: {
    card: companyList[1],
    backgroundColor: companyList[1].company.backgroundColor,
  },
};

export const 카카오뱅크: Story = {
  args: {
    card: companyList[2],
    backgroundColor: companyList[2].company.backgroundColor,
  },
};

export const 현대카드: Story = {
  args: {
    card: companyList[3],
    backgroundColor: companyList[3].company.backgroundColor,
  },
};

export const 우리카드: Story = {
  args: {
    card: companyList[4],
    backgroundColor: companyList[4].company.backgroundColor,
  },
};

export const 롯데카드: Story = {
  args: {
    card: companyList[5],
    backgroundColor: companyList[5].company.backgroundColor,
  },
};

export const 하나카드: Story = {
  args: {
    card: companyList[6],
    backgroundColor: companyList[6].company.backgroundColor,
  },
};

export const 국민카드: Story = {
  args: {
    card: companyList[7],
    backgroundColor: companyList[7].company.backgroundColor,
  },
};
