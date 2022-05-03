import Card from '.';
import { COLOR_NAMES } from '../../constant';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    name: {
      description: '카드 이름',
    },
    ownerName: {
      description: '카드 소유자 이름',
    },
    expiredMonth: {
      description: '만료 월(month)',
      control: {
        type: 'number',
      },
    },
    expiredYear: {
      description: '만료 년도(year)',
      control: {
        type: 'number',
      },
    },
    firstCardNumber: {
      description: '첫번째 카드 번호 4자리',
      control: {
        type: 'number',
      },
    },
    secondCardNumber: {
      description: '두번째 카드 번호 4자리',
      control: {
        type: 'number',
      },
    },
    thirdCardNumber: {
      description: '세번째 카드 번호 4자리',
      control: {
        type: 'number',
      },
    },
    fourthCardNumber: {
      description: '네번째 카드 번호 4자리',
      control: {
        type: 'number',
      },
    },
    color: {
      description: '카드 색상',
      options: COLOR_NAMES,
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Example = Template.bind({});

Example.args = {
  name: '블랙 카드',
  ownerName: 'Sally',
  expiredMonth: '12',
  expiredYear: '23',
  firstCardNumber: '1234',
  secondCardNumber: '5678',
  thirdCardNumber: '1111',
  fourthCardNumber: '1111',
};
