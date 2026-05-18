import type { Meta, StoryObj } from '@storybook/react-vite';
import { SuccessState } from './SuccessState';

const meta: Meta<typeof SuccessState> = {
  title: 'Components/CardListPage/SuccessState',
  component: SuccessState,
};

export default meta;

type Story = StoryObj<typeof SuccessState>;

export const Empty: Story = {
  render: () => <SuccessState cards={[]} onDelete={() => {}} />,
};

export const WithCards: Story = {
  render: () => (
    <SuccessState
      cards={[
        {
          id: '1',
          cardNumber: '5511 **** **** 9012',
          cardBrand: 'BC',
          expireDate: '12/28',
          cvc: '',
          cardPassword: '',
        },
        {
          id: '2',
          cardNumber: '4111 **** **** 1111',
          cardBrand: 'SHINHAN',
          expireDate: '06/30',
          cvc: '',
          cardPassword: '',
        },
        {
          id: '3',
          cardNumber: '5234 **** **** 7890',
          cardBrand: 'KAKAO',
          expireDate: '09/27',
          cvc: '',
          cardPassword: '',
        },
      ]}
      onDelete={() => {}}
    />
  ),
};
