import * as Type from '@Types/index';

type ErrorType = { message: string; type: 'char' | 'length' | 'range' };
type ValidationReturnType = { ok: true } | { ok: false; error: ErrorType };

const creditCardValidation = {
  numberValidation: {
    checkChar: (numbers: string): ValidationReturnType => {
      if (numbers.match(/\D/g)) {
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

    checkLength: (numbers: string): ValidationReturnType => {
      if (!numbers.length) return { ok: true };

      if (numbers.length !== 16) {
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
    checkChar: (numbers: string): ValidationReturnType => {
      const convertedNumbers = numbers.replaceAll('/', '');
      if (convertedNumbers.match(/\D/g)) {
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

    checkMonth: (numbers: string): ValidationReturnType => {
      if (numbers.length < 2) return { ok: true };

      const month = Number(numbers.slice(0, 2));

      if (month > 12) {
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

    checkYear: (numbers: string): ValidationReturnType => {
      if (numbers.length < 5) return { ok: true };

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

      if (year > currentYear + 5) {
        return {
          ok: false,
          error: {
            message: `YY에는 ${currentYear + 5}보다 큰 숫자를 입력할 수 없습니다.`,
            type: 'range',
          },
        };
      }

      return { ok: true };
    },

    checkLength: (numbers: string): ValidationReturnType => {
      if (numbers.length !== 5) {
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
    checkChar: (owner: string): ValidationReturnType => {
      if (!owner.match(/^[a-zA-Z\s]*$/g)) {
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

    checkLength: (owner: string): ValidationReturnType => {
      if (owner.length > 20) {
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
    checkChar: (numbers: string): ValidationReturnType => {
      if (numbers.match(/\D/g)) {
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
    checkLength: (numbers: string): ValidationReturnType => {
      if (numbers.length !== 3) {
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
    checkChar: (numbers: Type.CreditCardPasswordType): ValidationReturnType => {
      if (numbers.first.match(/\D/g)) {
        return {
          ok: false,
          error: {
            message: '비밀번호는 숫자만 가능합니다.',
            type: 'char',
          },
        };
      }

      if (numbers.second.match(/\D/g)) {
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

    checkLength: (numbers: Type.CreditCardPasswordType): ValidationReturnType => {
      if (numbers.first.length !== 1) {
        return {
          ok: false,
          error: {
            message: '각 비밀번호는 한 자리 숫자이어야 합니다.',
            type: 'length',
          },
        };
      }

      if (numbers.second.length !== 1) {
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
