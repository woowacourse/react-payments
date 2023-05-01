import * as Type from '@Types/index';

import { CREDIT_CARD_LENGTH, CREDIT_CARD_MAX_LENGTH } from '@Constants/creditCard';
import { NOT_NUMBERS, ONLY_ENGLISH } from '@Constants/regex';

const creditCardValidation = {
  numberValidation: {
    checkChar: (numbers: string): Type.ValidationFnReturnType => {
      if (numbers.match(NOT_NUMBERS)) {
        return {
          ok: false,
          error: {
            message: '카드 번호는 숫자만 가능합니다.',
            type: 'char',
          },
        };
      }

      return { ok: true };
    },

    checkLength: (numbers: string): Type.ValidationFnReturnType => {
      if (!numbers.length) return { ok: true };

      if (numbers.length !== CREDIT_CARD_LENGTH.numbers) {
        return {
          ok: false,
          error: {
            message: '카드는 16자리이어야 합니다.',
            type: 'length',
          },
        };
      }

      return { ok: true };
    },
  },

  expiryValidation: {
    checkChar: (numbers: string): Type.ValidationFnReturnType => {
      const convertedNumbers = numbers.replaceAll('/', '');
      if (convertedNumbers.match(NOT_NUMBERS)) {
        return {
          ok: false,
          error: {
            message: '만료일은 숫자만 가능합니다.',
            type: 'char',
          },
        };
      }

      return { ok: true };
    },

    checkMonth: (numbers: string): Type.ValidationFnReturnType => {
      if (numbers.length < CREDIT_CARD_LENGTH.monthExpiry) return { ok: true };

      const month = Number(numbers.slice(0, 2));

      if (month > CREDIT_CARD_MAX_LENGTH.monthExpiry) {
        return {
          ok: false,
          error: {
            message: 'MM에는 12이하의 숫자로 입력하세요)',
            type: 'range',
          },
        };
      }

      return { ok: true };
    },

    checkYear: (numbers: string): Type.ValidationFnReturnType => {
      if (numbers.length < CREDIT_CARD_LENGTH.expiry) return { ok: true };

      const year = Number(numbers.slice(3));
      const currentYear = Number(String(new Date().getFullYear()).slice(2));

      if (year < currentYear) {
        return {
          ok: false,
          error: {
            message: `YY에는 ${currentYear}보다 작은 숫자를 입력할 수 없습니다.`,
            type: 'range',
          },
        };
      }

      if (year > currentYear + CREDIT_CARD_MAX_LENGTH.yearExpiry) {
        return {
          ok: false,
          error: {
            message: `YY에는 ${currentYear + CREDIT_CARD_MAX_LENGTH.yearExpiry}보다 큰 숫자를 입력할 수 없습니다.`,
            type: 'range',
          },
        };
      }

      return { ok: true };
    },

    checkLength: (numbers: string): Type.ValidationFnReturnType => {
      if (numbers.length !== CREDIT_CARD_LENGTH.expiry) {
        return {
          ok: false,
          error: {
            message: '만료일은 MM/YY의 형식이여야 합니다.',
            type: 'length',
          },
        };
      }

      return { ok: true };
    },
  },

  ownerValidation: {
    checkChar: (owner: string): Type.ValidationFnReturnType => {
      if (!owner.match(ONLY_ENGLISH)) {
        return {
          ok: false,
          error: {
            message: '카드 소유자는 영문자 또는 공백만 가능합니다.',
            type: 'char',
          },
        };
      }

      return { ok: true };
    },

    checkLength: (owner: string): Type.ValidationFnReturnType => {
      if (owner.length > CREDIT_CARD_MAX_LENGTH.owner) {
        return {
          ok: false,
          error: {
            message: '카드 소유자는 20자 이하이여야 합니다.',
            type: 'length',
          },
        };
      }

      return { ok: true };
    },
  },

  cvcValidation: {
    checkChar: (numbers: string): Type.ValidationFnReturnType => {
      if (numbers.match(NOT_NUMBERS)) {
        return {
          ok: false,
          error: {
            message: '보안코드는 숫자만 가능합니다.',
            type: 'char',
          },
        };
      }

      return { ok: true };
    },
    checkLength: (numbers: string): Type.ValidationFnReturnType => {
      if (numbers.length !== CREDIT_CARD_LENGTH.cvc) {
        return {
          ok: false,
          error: {
            message: '보안 코드는 3자리어야 합니다.',
            type: 'length',
          },
        };
      }

      return { ok: true };
    },
  },

  passwordValidation: {
    checkChar: (numbers: Type.CreditCardPasswordType): Type.ValidationFnReturnType => {
      if (numbers.first.match(NOT_NUMBERS)) {
        return {
          ok: false,
          error: {
            message: '비밀번호는 숫자만 가능합니다.',
            type: 'char',
          },
        };
      }

      if (numbers.second.match(NOT_NUMBERS)) {
        return {
          ok: false,
          error: {
            message: '비밀번호는 숫자만 가능합니다.',
            type: 'char',
          },
        };
      }

      return { ok: true };
    },

    checkFirstLength: (numbers: Type.CreditCardPasswordType): Type.ValidationFnReturnType => {
      if (numbers.first.length !== CREDIT_CARD_LENGTH.password) {
        return {
          ok: false,
          error: {
            message: '각 비밀번호는 한 자리 숫자이어야 합니다.',
            type: 'length',
          },
        };
      }

      if (numbers.second.length !== CREDIT_CARD_LENGTH.password) {
        return {
          ok: false,
          error: {
            message: '각 비밀번호는 한 자리 숫자이어야 합니다.',
            type: 'length',
          },
        };
      }

      return { ok: true };
    },
  },

  getValidationFns() {
    return {
      numberValidationFns: Object.values(this.numberValidation),
      expiryValidationFns: Object.values(this.expiryValidation),
      ownerValidationFns: Object.values(this.ownerValidation),
      cvcValidationFns: Object.values(this.cvcValidation),
      passwordValidationFns: Object.values(this.passwordValidation),
    };
  },
};

export default creditCardValidation;
