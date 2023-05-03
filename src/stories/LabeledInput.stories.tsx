import type { Meta, StoryObj } from '@storybook/react';
import LabeledInput from '../components/AddCardForm/LabeledInput/LabeledInput';
import Input from '../components/common/Input/Input';
import HelpButton from '../components/common/HelpButton/HelpButton';

/**
 * `LabeledInput` 은 폼의 각 입력값을 담당하는 컴포넌트이자, `Input` 의 확장된 형태입니다.
 *  제목, 글자수 카운터 및 오류 메시지 표시 기능을 추가로 제공하며, 내부에는 용도에 맞게 `Input` 및 `HelpButton` 등의 요소를 자유롭게 배치하여
 *  다양한 종류의 인풋을 구현할 수 있습니다.
 */
const meta = {
  component: LabeledInput,
  title: 'LabeledInput',
  tags: ['autodocs'],
} satisfies Meta<typeof LabeledInput>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: { title: '여기에 제목이 올 거에요', children: <Input width="100%" value="여기에 내용이 입력될 거에요" /> },
};

export const MultipleInputs: Story = {
  args: {
    title: '여기에 제목이 올 거에요',
    children: (
      <>
        <Input width="25%" value="1234" />
        <Input width="25%" value="ABCD" />
        <Input width="25%" value="?.*!" />
        <Input width="25%" value="" />
      </>
    ),
  },
};

export const InputWithToolTip: Story = {
  args: {
    title: '여기에 제목이 올 거에요',
    children: (
      <>
        <Input width="40%" value="" />
        <HelpButton message="여기에 유용한 도움말이 올 거에요!"></HelpButton>
      </>
    ),
  },
};

export const ErrorTemplate: Story = {
  args: {
    title: '여기에 제목이 올 거에요',
    errorMessage: '무언가를 잘못 입력했다면 여기에 에러 메시지가 보일 거에요',
    children: <Input width="100%" value="" />,
  },
};

export default meta;
