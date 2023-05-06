import { StoryObj } from '@storybook/react';
import Bank from '../components/Bank';
import { BcBank, ShinhanBank, KakaoBank, HyundaeBank, WooriBank, LotteBank, HanaBank, KookminBank } from '../assets';

const meta = {
  title: 'Bank',
  component: Bank,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 우리카드: Story = {
  args: {
    id: '우리카드',
    imgSrc: WooriBank,
    onClick: ()=>{}
  },
};

export const 카카오뱅크: Story = {
    args: {
      id: '카카오뱅크',
      imgSrc: KakaoBank,
      onClick: ()=>{}
    },
  };
  export const 롯데카드: Story = {
    args: {
      id: '롯데카드',
      imgSrc: LotteBank,
      onClick: ()=>{}
    },
  };
  export const BC카드: Story = {
    args: {
      id: 'BC카드',
      imgSrc: BcBank,
      onClick: ()=>{}
    },
  };
  export const 신한카드: Story = {
    args: {
      id: '신한카드',
      imgSrc: ShinhanBank,
      onClick: ()=>{}
    },
  };
  export const 현대카드: Story = {
    args: {
      id: '현대카드',
      imgSrc: HyundaeBank,
      onClick: ()=>{}
    },
  };
  export const 하나카드: Story = {
    args: {
      id: '하나카드',
      imgSrc: HanaBank,
      onClick: ()=>{}
    },
  };
  export const 국민카드: Story = {
    args: {
      id: '국민카드',
      imgSrc: KookminBank,
      onClick: ()=>{}
    },
  };
