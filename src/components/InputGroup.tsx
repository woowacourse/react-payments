import { css } from '@emotion/react';
import InputTitle from './InputTitle';
import Input from './Input';

function InputGroup() {
  return (
    <>
      <InputTitle title="결제할 카드 번호를 입력해 주세요" subtitle="본인 명의의 카드만 결제 가능합니다." />
      <p>카드 번호</p>
      <Input />
    </>
  );
}

export default InputGroup;
