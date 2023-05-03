import { Meta, StoryObj } from '@storybook/react';
import CardSecurityCode from '../components/CardSecurityCode/CardSecurityCode';
import RefProvider from '../contexts/RefProvider';

const meta = {
  component: CardSecurityCode,
  title: 'Section/SecurityCode',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardSecurityCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SecurityCodeStory: Story = {
  args: {
    securityCode: '',
    errorMessage: '보안 코드는 세 자리의 숫자로만 입력해주세요.',
    handleSecurityCode: () => {
      return;
    },
  },
};
