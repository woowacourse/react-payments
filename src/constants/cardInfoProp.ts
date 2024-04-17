const CARD_NUMBER_PROP: PaymentsFormSectionProps = {
  formTitleProps: {
    title: '결제할 카드 번호를 입력해 주세요',
    subTitle: '본인 명의의 카드만 결제 가능합니다.',
  },
  inputFormProps: {
    label: '카드 번호',
    hasError: false,
    inputFieldProps: [
      {
        inputType: 'number',
        placeholder: '1234',
        maxLength: 4,
        hasError: true,
      },
      {
        inputType: 'number',
        placeholder: '1234',
        maxLength: 4,
        hasError: false,
      },
      {
        inputType: 'number',
        placeholder: '1234',
        maxLength: 4,
        hasError: false,
      },
      {
        inputType: 'number',
        placeholder: '1234',
        maxLength: 4,
        hasError: false,
      },
    ],
  },
} as const;

const EXPIRATION_PROP: PaymentsFormSectionProps = {
  formTitleProps: {
    title: '카드 유효기간을 입력해 주세요',
    subTitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
  },
  inputFormProps: {
    label: '유효기간',
    hasError: false,
    errorMessage: '',
    inputFieldProps: [
      {
        inputType: 'number',
        placeholder: 'MM',
        maxLength: 2,
        hasError: false,
      },
      {
        inputType: 'number',
        placeholder: 'YY',
        maxLength: 2,
        hasError: false,
      },
    ],
  },
} as const;

const NAME_PROP: PaymentsFormSectionProps = {
  formTitleProps: {
    title: '카드 소유자 이름을 입력해 주세요',
  },
  inputFormProps: {
    label: '소유자 이름',
    hasError: false,
    errorMessage: '',
    inputFieldProps: [
      {
        inputType: 'english',
        placeholder: 'FAMILY / GIVEN',
        maxLength: 50,
        hasError: false,
      },
    ],
  },
} as const;

export { CARD_NUMBER_PROP, EXPIRATION_PROP, NAME_PROP };
