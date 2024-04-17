import type { Meta, StoryObj } from '@storybook/react';
import Field from '../components/common/Field/Field';
import Input from '../components/common/Input/Input';

const meta = {
  title: 'Field',
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumbers: Story = {
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    description: '본인 명의의 카드만 결제 가능합니다.',
    labelText: '카드 번호',
    errMsg: '',
    children: (
      <>
        {Array.from({ length: 4 }).map(() => (
          <Input
            name="name"
            placeholder="1234"
            value=""
            isError={false}
            handleChange={() => 1}
            handleOnBlur={() => 1}
            maxLength={4}
          ></Input>
        ))}
      </>
    ),
  },
};
