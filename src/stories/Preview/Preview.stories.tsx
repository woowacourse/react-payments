import type { Meta, StoryObj } from '@storybook/react';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';

const meta = {
  title: 'CardInformationPreview',
  component: CardInformationPreview,
} satisfies Meta<typeof CardInformationPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: '', setValue: (event) => {}, error: false },
    selectedCardState: { value: '', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const Valid: Story = {
  args: {
    cardNumberState: {
      firstState: { value: 5123, setValue: (event) => {}, error: false },
      secondState: { value: 1234, setValue: (event) => {}, error: false },
      thirdState: { value: 1234, setValue: (event) => {}, error: false },
      fourthState: { value: 1234, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: true,
      },
    },
    expirationDateState: {
      monthState: { value: 12, setValue: (event) => {}, error: false },
      yearState: { value: 24, setValue: (event) => {}, error: false },
    },
    userNameState: { value: 'SIMO COOKIE', setValue: (event) => {}, error: false },
    selectedCardState: { value: '', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const Visa: Story = {
  args: {
    cardNumberState: {
      firstState: { value: 4123, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: true,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardNumberState: {
      firstState: { value: 5123, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: true,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const NormalCard: Story = {
  args: {
    cardNumberState: {
      firstState: { value: 1111, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const HiddenCardNumber: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: 5123, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const SelectedCardDefault: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const SelectedBC: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: 'BC카드', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const SelectedSinhan: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '신한카드', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const SelectedKakao: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '카카오뱅크', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const SelectedHyndai: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '현대카드', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const SelectedWoori: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '우리카드', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const SelectedLotte: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '롯데카드', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const SelectedHana: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '하나카드', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const SelectedKB: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: undefined, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '국민카드', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: false,
      setIsFocus: () => {},
    },
  },
};

export const CVCDefault: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: 5123, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '', setValue: (event) => {} },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      error: false,
      isFocus: true,
      setIsFocus: () => {},
    },
  },
};

export const CVCFulfilled: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, error: false },
      secondState: { value: undefined, setValue: (event) => {}, error: false },
      thirdState: { value: 5123, setValue: (event) => {}, error: false },
      fourthState: { value: undefined, setValue: (event) => {}, error: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, error: false },
      yearState: { value: undefined, setValue: (event) => {}, error: false },
    },
    userNameState: { value: undefined, setValue: (event) => {}, error: false },
    selectedCardState: { value: '', setValue: (event) => {} },
    cvcState: {
      value: 123,
      setValue: (event) => {},
      error: false,
      isFocus: true,
      setIsFocus: () => {},
    },
  },
};
