export const MONTH_DATA = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

export const ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const INVALID_MESSAGE: { [key: string]: { [key: string]: string } } = {
  securityCode: {
    INVALID: '보안카드 번호는 숫자 0~9를 사용해 3자리로 이루어져야 합니다.',
  },
  password: {
    INVALID: '비밀번호는 숫자 0~9를 사용해 각 1자리로 이루어져야 합니다.',
  },
  owner: {
    INVALID: '카드 소유자 이름은 영대문자, 30자 이내로 이루어져야 합니다.',
  },
  expired: {
    INVALID: '만료월/만료년은 숫자 0~9를 사용해 각 2자리로 이루어져야 합니다.',
  },
  cardNumber: {
    INVALID: '카드번호는 숫자 0~9를 사용해 각 4자리로 이루어져야 합니다.',
  },
};
