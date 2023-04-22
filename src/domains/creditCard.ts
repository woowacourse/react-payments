import * as Type from 'types';

const creditCard = {
  convertSecuredCreditCard: (number: string) => {
    const creditCardNumberLength = number.length;
    const securedCreditNumber =
      creditCardNumberLength <= 8 ? number : number.slice(0, 8) + '●'.repeat(number.length - 8);
    return securedCreditNumber.split('').reduce(
      (a, b, i) => {
        a[Math.floor(i / 4)].push(b);
        return a;
      },
      [[], [], [], []] as string[][],
    );
  },

  isValidNumber: {
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

  isValidExpiry: {
    checkChar: (numbers: string) => {
      if (numbers.replaceAll('/', '').match(/\D/g)) {
        return {
          ok: false,
          errorMessage: '만료일은 숫자만 가능합니다.',
        };
      }

      return { ok: true };
    },
  },

  isValidOwner: {
    checkChar: (owner: string) => {
      if (!owner.match(/^[a-zA-Z]*$/g)) {
        return {
          ok: false,
          errorMessage: '카드 소유자는 영문자만 가능합니다.',
        };
      }

      return { ok: true };
    },
  },

  isValidCVC: {
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

  isValidPassword: {
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
      numberValidationFns: Object.values(this.isValidNumber),
      expiryValidationFns: Object.values(this.isValidExpiry),
      ownerValidationFns: Object.values(this.isValidOwner),
      cvcValidationFns: Object.values(this.isValidCVC),
      passwordValidationFns: Object.values(this.isValidPassword),
    };
  },
};

export default creditCard;
