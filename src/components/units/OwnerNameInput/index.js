import React from 'react';
import * as Style from './style';

const OwnerNameInput = (props) => {
  return (
    <>
      <Style.Input width="302px" placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'} />
    </>
  );
};

export default OwnerNameInput;
