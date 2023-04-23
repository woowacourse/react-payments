import { ReactComponent as BlackDot } from '../assets/black-dot.svg';
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
    },
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
    },
  },
};

export const Owner: Story = {
  args: {
    name: '카드 소유자 이름 (선택)',
    inputListInformation: {
      inputInformation: [{ type: 'string', maxLength: 30, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' }],
    },
  },
};

export const SecurityCode: Story = {
  args: {
    name: '보안 코드(CVC/CVV)',
    inputListInformation: {
      inputInformation: [{ type: 'password', textAlign: 'center', maxLength: 3 }],
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
      bridgeLetter: '',
      children: (
        <>
          <div>
            <BlackDot />
          </div>
          <div>
            <BlackDot />
          </div>
        </>
      ),
    },
  },
};
