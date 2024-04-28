import { convertPascalCase } from '@utils/string/string';

import { describe, expect, test } from 'vitest';

describe('문자 관련 테스트', () => {
  describe('PascalCase 변환 테스트', () => {
    test('입력 받은 문자열이 모두 영소문자일 경우 첫 글자가 대문자로 변환된다.', () => {
      // given
      const input = 'hello';

      // when
      const result = convertPascalCase(input);

      // then
      expect(result).toBe('Hello');
    });

    test('입력 받은 문자열이 빈 문자열일 경우, 빈 문자열을 그대로 반환한다.', () => {
      // given
      const input = '';

      // when
      const result = convertPascalCase(input);

      // then
      expect(result).toBe('');
    });

    test('입력 받은 문자열의 첫 글자가 숫자일 경우 PascalCase로 변환되지 않는다.', () => {
      // given
      const input = '123hello';

      // when
      const result = convertPascalCase(input);

      // then
      expect(result).toBe('123hello');
    });

    test('입력 받은 문자열의 첫 글자가 이미 대문자인 경우, 문자열을 변경하지 않는다.', () => {
      // given
      const input = 'Hello';

      // when
      const result = convertPascalCase(input);

      // then
      expect(result).toBe('Hello');
    });
  });
});
