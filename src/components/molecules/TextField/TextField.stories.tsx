import { TextField } from '@components/index';
import { CardNumberInput } from '@pages/payments';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/molecules/TextField',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자로부터 설명 및 폼 입력을 제공하는 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
  render: () => (
    <>
      <TextField.Title title="결제할 카드 번호를 입력해 주세요" />
      <TextField.SubTitle subTitle="본인 명의의 카드만 결제 가능합니다." />
      <TextField.Label labelText="카드 번호"></TextField.Label>
      <TextField.Content>
        <CardNumberInput isError={false} value={''} onAddCardNumber={() => {}} />
        <CardNumberInput isError={false} value={''} onAddCardNumber={() => {}} />
        <CardNumberInput isError={false} value={''} onAddCardNumber={() => {}} />
        <CardNumberInput isError={false} value={''} onAddCardNumber={() => {}} />
      </TextField.Content>
    </>
  ),
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: 'Title, SubTitle, Label, Content가 결합된 컴포넌트' } },
  },
};
