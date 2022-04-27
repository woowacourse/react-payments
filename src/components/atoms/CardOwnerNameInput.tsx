import React, { useState } from "react";
import { css } from "@emotion/react";

const style = css({
  backgroundColor: '#ECEBF1',
  height: '45px',
  width: '100%',
  borderRadius: '7px',
  maxWidth: '318px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '18px',
  textAlign: 'center',
  '&:focus': {
    boxShadow: 'none',
  }
});

const MAX_NAME_LENGTH = 30;

const isEnglish = (str: string) => !/[^A-Za-z]/.test(str);

function CardOwnerNameInput() {
  const [name, setName] = useState<string>('');

  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: name } = event.target;

    // value의 총 길이는 30을 넘으면 안 된다
    if (name.length > MAX_NAME_LENGTH) return;

    // 영어만 입력 받는다
    if (!isEnglish(name)) return;

    // 대문자로 변환을 해준다
    const upperName = name.toUpperCase();

    // name을 업데이트 한다
    setName(upperName);
  }

  return(
    <>
      <div className="d-flex justify-content-between">
        <label htmlFor="card-owner-name-input">카드 소유자 이름(선택)</label>
        <div id="counter">
          <span>{name.length}</span>/<span>{MAX_NAME_LENGTH}</span>
        </div>
      </div>
      <div>
        <input id="card-owner-name-input" css={style} type="text" onChange={handleChage} value={name} placeholder='카드에 표시된 이름과 동일하게 입력하세요.' />
      </div>
    </>
  )
}

export default CardOwnerNameInput;
