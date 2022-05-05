import Fieldset from '.';
import CardNumberInput from '../Input/CardNumberInput';
import ExpiredDateInput from '../Input/ExpiredDateInput';

export default {
  title: 'FieldSet',
  component: Fieldset,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    description: {
      description: '필드셋 label 에 들어갈 내용',
    },
    errorMessage: {
      description: '유효성 검증 실패 시 보여줄 에러메시지',
    },
    isError: {
      description: '에러 여부',
    },
  },
};

const Template = (args) => <Fieldset {...args} />;

export const CardNumberFieldSet = Template.bind({});

CardNumberFieldSet.args = {
  description: '카드 번호',
  children: <CardNumberInput />,
  errorMessage: '유효한 카드 번호가 아닙니다.',
};

export const ExpiredDateFieldSet = Template.bind({});

ExpiredDateFieldSet.args = {
  description: '만료 기한',
  children: <ExpiredDateInput />,
  errorMessage: '유효한 만료기간을 입력해주세요.',
};
