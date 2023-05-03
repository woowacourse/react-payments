import { Meta } from '@storybook/react';
import { CardViewer } from '../../components/cardViewer';
import { StoryObj } from '@storybook/react';
import { COMPANIES } from '../../constants/cardCompany';

const meta = {
  title: 'Example/CardPreview',
  component: CardViewer,
  tags: ['autodocs'],
  argTypes: {
    cardNumber: {
      options: {
        미입력: ['', '', '', ''],
        '첫번째 input 입력': ['1234', '', '', ''],
        '두번째 input 입력': ['1234', '1234', '', ''],
        '세번째 input 입력': ['1234', '1234', '1234', ''],
        '네번째 input 입력': ['1234', '1234', '1234', '1234'],
      },
      control: { type: 'select' },
    },
    companyId: {
      options: [...Object.keys(COMPANIES)],
      control: { type: 'select' },
    },
    expirationDate: {
      options: {
        '23년 1월': { month: '01', year: '23' },
        '23년 12월': { month: '02', year: '23' },
        '28년 1월': { month: '01', year: '28' },
        '28년 12월': { month: '12', year: '28' },
      },
      control: { type: 'select' },
    },
    ownerName: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof CardViewer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardViewerComponent: Story = {
  args: {
    cardNumber: ['', '', '', ''],
    expirationDate: { month: '', year: '' },
    ownerName: '',
    companyId: 'HANA',
  },
};
