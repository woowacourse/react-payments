import * as Type from '@Types/index';

const creditCardValidation = {
  numberValidation: {
    checkChar: (numbers: string) => {
      if (numbers.match(/\D/g)) {
        return {
          ok: false,
          errorMessage: '카드 번호는 숫자만 가능합니다.',
        };
      }

      return { ok: true };
    },

    checkLength: (numbers: string) => {
      if (!numbers.length) return { ok: true };

      if (numbers.length !== 16) {
        return {
          ok: false,
          errorMessage: '카드는 16자리이어야 합니다.',
        };
      }

      return { ok: true };
    },
  },

  expiryValidation: {
    checkChar: (numbers: string) => {
      if (numbers.replaceAll('/', '').match(/\D/g)) {
        return {
          ok: false,
          errorMessage: '만료일은 숫자만 가능합니다.',
        };
      }

      return { ok: true };
    },

    checkMonth: (numbers: string) => {
      if (numbers.length < 2) return { ok: true };

      const month = Number(numbers.slice(0, 2));

      if (month > 12) {
        return {
          ok: false,
          errorMessage: 'MM의 형식이 올바르지 않습니다.(12이하의 숫자로 입력하세요)',
        };
      }

      return { ok: true };
    },

    checkYear: (numbers: string) => {
      if (numbers.length < 5) return { ok: true };

      const year = Number(numbers.slice(3));
      const currentYear = Number(String(new Date().getFullYear()).slice(2));

      if (year < currentYear) {
        return {
          ok: false,
          errorMessage: `YY에는 ${currentYear}보다 작은 숫자를 입력할 수 없습니다.`,
        };
      }

      if (year > currentYear + 5) {
        return {
          ok: false,
          errorMessage: `YY에는 ${currentYear + 5}보다 큰 숫자를 입력할 수 없습니다.`,
        };
      }

      return { ok: true };
    },
  },

  ownerValidation: {
    checkChar: (owner: string) => {
      if (!owner.match(/^[a-zA-Z\s]*$/g)) {
        return {
          ok: false,
          errorMessage: '카드 소유자는 영문자 또는 공백만 가능합니다.',
        };
      }

      return { ok: true };
    },
  },

  cvcValidation: {
    checkChar: (numbers: string) => {
      if (numbers.match(/\D/g)) {
        return {
          ok: false,
          errorMessage: '보안코드는 숫자만 가능합니다.',
        };
      }

      return { ok: true };
    },
  },

  passwordValidation: {
    checkChar: (numbers: Type.CreditCardPasswordType) => {
      if (numbers.first.match(/\D/g)) {
        return {
          ok: false,
          errorMessage: '비밀번호는 숫자만 가능합니다.',
        };
      }

      if (numbers.second.match(/\D/g)) {
        return {
          ok: false,
          errorMessage: '비밀번호는 숫자만 가능합니다.',
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
