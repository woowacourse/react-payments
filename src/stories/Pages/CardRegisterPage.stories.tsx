import { Meta, StoryObj } from '@storybook/react';
import CardRegisterPage from '../../pages/card-register/CardRegisterPage';

const meta = {
  title: 'Pages/CardRegisterPage',
  component: CardRegisterPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '카드 등록 페이지입니다. 카드 번호, 유효기간, CVC 등의 입력을 통해 카드 정보를 등록할 수 있습니다.',
      },
    },
  },
} satisfies Meta<typeof CardRegisterPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CardRegisterPage />,
};
