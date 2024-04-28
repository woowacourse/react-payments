import { describe, expect, test } from 'vitest';

import { isContainsNonNumeric } from '@utils/number/number';

describe('숫자 관련 테스트', () => {
  describe('숫자가 아닌 값의 포함 여부 테스트', () => {
    test('숫자만 포함된 문자열일 경우 false를 반환해야 한다.', () => {
      // given
      const input = '123456';

      // when
      const result = isContainsNonNumeric(input);

      // then
      expect(result).toBeFalsy();
    });

    test('문자를 포함한 문자열일 경우 true를 반환해야 한다.', () => {
      // given
      const input = '123abc';

      // when
      const result = isContainsNonNumeric(input);

      // then
      expect(result).toBeTruthy();
    });

    test('공백을 포함한 문자열일 경우 true를 반환해야 한다.', () => {
      // given
      const input = '123 456';

      // when
      const result = isContainsNonNumeric(input);

      // then
      expect(result).toBeTruthy();
    });

    test('빈 문자열일 경우 false를 반환해야 한다.', () => {
      // given
      const input = '';

      // when
      const result = isContainsNonNumeric(input);

      // then
      expect(result).toBeFalsy();
    });

    test('특수 문자를 포함한 문자열일 경우 true를 반환해야 한다.', () => {
      // given
      const input = '123#456';

      // when
      const result = isContainsNonNumeric(input);

      // then
      expect(result).toBeTruthy();
    });
  });
});
