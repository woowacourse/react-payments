import type { Meta, StoryObj } from '@storybook/react';
import CVCNumber from '../../components/FormField/CVCNumber';
import { fn } from '@storybook/test';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';
import { useState } from 'react';

const previewProps = {
  cardNumberState: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expirationDateState: {
    month: '',
    year: '',
  },
  cardBrandState: null,
  userNameState: '',
  showImageCondition: {
    visaShowCondition: false,
    masterCardShowCondition: false,
  },
  cvcNumberState: '',
  setIsFocusCVCPreview: fn(),
};

const meta = {
  title: 'FormField_CVC',
  component: CVCNumber,
} satisfies Meta<typeof CVCNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  decorators: [
    (Story, context) => {
      const [isFront, setIsFront] = useState<boolean>(false);

      return (
        <div>
          <CardInformationPreview {...previewProps} isFocusCVCPreview={isFront} />
          <Story args={{ ...context.args, setIsFocusCVCPreview: setIsFront }} />
        </div>
      );
    },
  ],
  args: {
    cvcNumberState: '',
    setCVCNumberState: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: false,
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 정상입력: Story = {
  decorators: [
    (Story, context) => {
      const [isFront, setIsFront] = useState<boolean>(false);

      return (
        <div>
          <CardInformationPreview
            {...previewProps}
            cvcNumberState="123"
            isFocusCVCPreview={isFront}
          />
          <Story args={{ ...context.args, setIsFocusCVCPreview: setIsFront }} />
        </div>
      );
    },
  ],
  args: {
    cvcNumberState: '123',
    setCVCNumberState: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: false,
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 잘못된_문자_입력: Story = {
  decorators: [
    (Story, context) => {
      const [isFront, setIsFront] = useState<boolean>(false);

      return (
        <div>
          <CardInformationPreview
            {...previewProps}
            cvcNumberState="쿠키"
            isFocusCVCPreview={isFront}
          />
          <Story args={{ ...context.args, setIsFocusCVCPreview: setIsFront }} />
        </div>
      );
    },
  ],
  args: {
    cvcNumberState: '쿠키',
    setCVCNumberState: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: true,
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 세_자리_수가_아닐_때: Story = {
  decorators: [
    (Story, context) => {
      const [isFront, setIsFront] = useState<boolean>(false);

      return (
        <div>
          <CardInformationPreview
            {...previewProps}
            cvcNumberState="12"
            isFocusCVCPreview={isFront}
          />
          <Story args={{ ...context.args, setIsFocusCVCPreview: setIsFront }} />
        </div>
      );
    },
  ],
  args: {
    cvcNumberState: '12',
    setCVCNumberState: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: true,
    showNextFieldOnLastElementBlur: fn(),
  },
};
