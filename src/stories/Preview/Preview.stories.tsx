import type { Meta, StoryObj } from '@storybook/react';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';
import theme from '../../styles/theme';

const meta = {
  title: 'CardInformationPreview',
  component: CardInformationPreview,
} satisfies Meta<typeof CardInformationPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: { value: '', setValue: (event) => {}, cardColor: theme.color.darkGray },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const Valid: Story = {
  args: {
    cardNumberState: {
      firstState: { value: 5123, setValue: (event) => {}, isError: false },
      secondState: { value: 1234, setValue: (event) => {}, isError: false },
      thirdState: { value: 1234, setValue: (event) => {}, isError: false },
      fourthState: { value: 1234, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: 12, setValue: (event) => {}, isError: false },
      yearState: { value: 24, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: 'SIMO COOKIE',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: { value: '', setValue: (event) => {}, cardColor: theme.color.darkGray },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const Visa: Story = {
  args: {
    cardNumberState: {
      firstState: { value: 4123, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: { value: '', setValue: (event) => {}, cardColor: theme.color.darkGray },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardNumberState: {
      firstState: { value: 5123, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: { value: '', setValue: (event) => {}, cardColor: theme.color.darkGray },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const NormalCard: Story = {
  args: {
    cardNumberState: {
      firstState: { value: 1111, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: { value: '', setValue: (event) => {}, cardColor: theme.color.darkGray },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const HiddenCardNumber: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: 1234, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: { value: '', setValue: (event) => {}, cardColor: theme.color.darkGray },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const SelectedCardDefault: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: { value: '', setValue: (event) => {}, cardColor: theme.color.darkGray },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const SelectedBC: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: {
      value: 'BC카드',
      setValue: (event) => {},
      cardColor: theme.color.magenta,
    },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const SelectedSinhan: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: {
      value: '신한카드',
      setValue: (event) => {},
      cardColor: theme.color.blue,
    },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const SelectedKakao: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: {
      value: '카카오뱅크',
      setValue: (event) => {},
      cardColor: theme.color.yellow,
    },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const SelectedHyndai: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: {
      value: '현대카드',
      setValue: (event) => {},
      cardColor: theme.color.black,
    },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const SelectedWoori: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: {
      value: '우리카드',
      setValue: (event) => {},
      cardColor: theme.color.brightBlue,
    },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const SelectedLotte: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: {
      value: '롯데카드',
      setValue: (event) => {},
      cardColor: theme.color.orange,
    },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const SelectedHana: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: {
      value: '하나카드',
      setValue: (event) => {},
      cardColor: theme.color.teal,
    },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const SelectedKB: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: {
      value: '국민카드',
      setValue: (event) => {},
      cardColor: theme.color.brownishGray,
    },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const CVCDefault: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: {
      value: '',
      setValue: (event) => {},
      cardColor: theme.color.brownishGray,
    },
    cvcState: {
      value: undefined,
      setValue: (event) => {},
      isError: false,
      isFocus: true,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};

export const CVCFulfilled: Story = {
  args: {
    cardNumberState: {
      firstState: { value: undefined, setValue: (event) => {}, isError: false },
      secondState: { value: undefined, setValue: (event) => {}, isError: false },
      thirdState: { value: undefined, setValue: (event) => {}, isError: false },
      fourthState: { value: undefined, setValue: (event) => {}, isError: false },
      showImageCondition: {
        isVisa: false,
        isMasterCard: false,
      },
      errorMessage: '',
      isValid: true,
    },
    expirationDateState: {
      monthState: { value: undefined, setValue: (event) => {}, isError: false },
      yearState: { value: undefined, setValue: (event) => {}, isError: false },
      errorMessage: '',
      isValid: true,
    },
    userNameState: {
      value: '',
      setValue: (event) => {},
      isError: false,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
    selectedCardState: {
      value: '',
      setValue: (event) => {},
      cardColor: theme.color.brownishGray,
    },
    cvcState: {
      value: 123,
      setValue: (event) => {},
      isError: false,
      isFocus: true,
      setIsFocus: () => {},
      errorMessage: '',
      isValid: true,
    },
  },
};
