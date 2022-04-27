import { css } from "@emotion/react";
import React, { useState } from "react";

const isNum = (str: string) => !Number.isNaN(Number(str));
const transformToCardFormat = (str: string) => {
  const arr = [0, 4, 8, 12].map(startIndex => str.substr(startIndex, 4));
  arr[2] = '*'.repeat(arr[2].length);
  arr[3] = '*'.repeat(arr[3].length);
  // @todo -사이에 space추가하기
  return arr.filter(str => str.length > 0).join('-');
}

const style = css({
  backgroundColor: '#ECEBF1',
  height: '47px',
  width: '100%',
  borderRadius: '7px',
  maxWidth: '318px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '21px',
  textAlign: 'center',
  '&:focus': {
    boxShadow: 'none',
  }
});

function CardNumberInput() {
  const [cardNumber, setCardNumber] = useState<string>('');

  const handleCardNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const lastChar = value.charAt(value.length - 1);
    const str = value.split('-').join('');
    // 20글자 이상 입력한 경우
    if (cardNumber.length >= 20) return;

    // 값을 추가하는 경우 
    if (cardNumber.length < str.length) {
      // 숫자가 아니라면 아웃!
      if (!isNum(lastChar)) return;
      setCardNumber(cardNumber + lastChar);
      return;
    }

    // 값을 지우는 경우
    setCardNumber(cardNumber.substring(0, cardNumber.length - 1));
  }

  return(
    <>
      <input css={style} onChange={handleCardNumberInput} value={transformToCardFormat(cardNumber)} />
    </>
  )
}

export default CardNumberInput;
