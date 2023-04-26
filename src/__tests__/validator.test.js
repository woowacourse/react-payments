import {
  validateNumeric,
  validateMonth,
  validateExpirationDate,
  validateValidUserName,
} from '../components/validators/validator';

describe('카드 정보 입력 값 유효성 검증 로직 테스트', () => {
  it.each(['1234', '12345678', '3'])('숫자로만 이루어진 값은 에러를 반환하지 않는다.', value => {
    expect(() => validateNumeric(value)).not.toThrow();
  });

  it.each([' ', 'a', ''])('숫자가 아닌 값은 에러를 반환한다.', value => {
    expect(() => validateNumeric(value)).toThrow();
  });

  it.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])('만료일의 MM은 1 ~ 12 사이의 숫자로 이루어져 있다.', value => {
    expect(() => validateMonth(value)).not.toThrow();
  });

  it.each([0, 13])('만료일의 MM이 1 ~ 12 외의 값이면 에러를 반환한다.', value => {
    expect(() => validateMonth(value)).toThrow();
  });

  it.each([
    { expirationYear: 23, expirationMonth: 4 },
    { expirationYear: 23, expirationMonth: 5 },
    { expirationYear: 23, expirationMonth: 6 },
    { expirationYear: 23, expirationMonth: 12 },
    { expirationYear: 30, expirationMonth: 1 },
  ])('만료일은 이번년도, 이번달 이상이다.', ({ expirationYear, expirationMonth }) => {
    expect(() => validateExpirationDate(expirationYear, expirationMonth)).not.toThrow();
  });

  it.each([
    { expirationYear: 23, expirationMonth: 3 },
    { expirationYear: 23, expirationMonth: 2 },
    { expirationYear: 23, expirationMonth: 1 },
    { expirationYear: 22, expirationMonth: 12 },
    { expirationYear: 22, expirationMonth: 1 },
  ])('만료일이 이번달 미만이면 에러를 반환한다.', ({ expirationYear, expirationMonth }) => {
    expect(() => validateExpirationDate(expirationYear, expirationMonth)).toThrow();
  });

  it.each(['woody', 'ice coffee', '', 'AbcdeAbcdeAbcdeAbcdeAbcdeAbcde'])(
    '이름은 30글지 이하의 영문과 공백으로 이루어져 있다.',
    value => {
      expect(() => validateValidUserName(value)).not.toThrow();
    }
  );

  it.each([' ice coffee', '우디', '아커', 'AbcdeAbcdeAbcdeAbcdeAbcdeAbcdeA', 'ice coffee ', '$', '1'])(
    '올바르지 않은 이름은 에러를 반환한다.',
    value => {
      expect(() => validateValidUserName(value)).toThrow();
    }
  );
});
