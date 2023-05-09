import { userEvent, within } from '@storybook/testing-library';
import { ReactComponent as Dot } from '../assets/dot.svg';
import PaymentsInput from '../components/PaymentsInput';
import QuestionToolTip from '../components/QuestionToolTip';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof PaymentsInput>;

const meta: Meta<typeof PaymentsInput> = {
  title: 'PaymentsInput',
  component: PaymentsInput,
};

export default meta;

export const CardNumber: Story = {
  args: {
    name: '카드 번호',
    inputListInformation: {
      inputInformation: [
        { type: 'string', maxLength: 4, textAlign: 'center', placeholder: '1234' },
        { type: 'string', maxLength: 4, textAlign: 'center', placeholder: '1234' },
        { type: 'password', maxLength: 4, textAlign: 'center', placeholder: '1234' },
        { type: 'password', maxLength: 4, textAlign: 'center', placeholder: '1234' },
      ],
      bridgeLetter: '-',
      getInputListValue: () => {},
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.queryAllByPlaceholderText('1234');

    await new Promise(resolve => {
      setTimeout(resolve, 700);
    });
    await userEvent.type(input[0], '1111', { delay: 200 });
    await userEvent.type(input[1], '1111', { delay: 200 });
    await userEvent.type(input[2], '1111', { delay: 200 });
    await userEvent.type(input[3], '1111', { delay: 200 });
  },
};

export const ExpirationDate: Story = {
  args: {
    name: '만료일',
    inputListInformation: {
      inputInformation: [
        { type: 'string', maxLength: 2, textAlign: 'center', placeholder: 'MM' },
        { type: 'string', maxLength: 2, textAlign: 'center', placeholder: 'YY' },
      ],
      bridgeLetter: '/',
      getInputListValue: () => {},
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const monthInput = canvas.getByPlaceholderText('MM');
    const yearInput = canvas.getByPlaceholderText('YY');

    await new Promise(resolve => {
      setTimeout(resolve, 700);
    });
    await userEvent.type(monthInput, '12', { delay: 200 });
    await userEvent.type(yearInput, '26', { delay: 200 });
  },
};

export const Owner: Story = {
  args: {
    name: '카드 소유자 이름 (선택)',
    inputListInformation: {
      inputInformation: [{ type: 'string', maxLength: 30, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' }],
      getInputListValue: () => {},
    },
  },
};

export const SecurityCode: Story = {
  args: {
    name: '보안 코드(CVC/CVV)',
    inputListInformation: {
      inputInformation: [{ type: 'password', textAlign: 'center', maxLength: 3 }],
      getInputListValue: () => {},
      children: (
        <QuestionToolTip questionMessage="CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다." />
      ),
    },
  },
};

export const CardPassword: Story = {
  args: {
    name: '카드 비밀번호',
    inputListInformation: {
      inputInformation: [
        { type: 'password', textAlign: 'center', maxLength: 1 },
        { type: 'password', textAlign: 'center', maxLength: 1 },
      ],
      getInputListValue: () => {},
      bridgeLetter: '',
      children: (
        <>
          <div>
            <Dot />
          </div>
          <div>
            <Dot />
          </div>
        </>
      ),
    },
  },
};

export const ErrorCase: Story = {
  args: {
    name: '카드 번호',
    inputListInformation: {
      inputInformation: [
        { type: 'string', maxLength: 4, textAlign: 'center', placeholder: '1234' },
        { type: 'string', maxLength: 4, textAlign: 'center', placeholder: '1234' },
        { type: 'password', maxLength: 4, textAlign: 'center', placeholder: '1234' },
        { type: 'password', maxLength: 4, textAlign: 'center', placeholder: '1234' },
      ],
      bridgeLetter: '-',
      getInputListValue: () => {},
    },
    errorMessage: '에러가 발생했습니다.',
    isVisited: true,
  },
};
