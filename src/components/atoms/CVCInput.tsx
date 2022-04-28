import React, { useState } from "react";
import { css } from "@emotion/react";
import { useAppDispatch, useAppState } from "../../hooks/hooks";
import { createAction } from "../Provider";
import { ActionType } from "../../types";

const style = css({
  backgroundColor: '#ECEBF1',
  height: '45px',
  width: '100%',
  borderRadius: '7px',
  maxWidth: '84px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '21px',
  textAlign: 'center',
  marginRight: '11px',
  '&:focus': {
    boxShadow: 'none',
  }
});

const isNum = (str: string) => str.replace(/\s/g, '') && !Number.isNaN(Number(str));

const transformNumToBullet = (str: string) => '•'.repeat(str.length);

function CVCInput() {
  const { cvc } = useAppState();
  const dispatch = useAppDispatch();

  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const lastChar = value.slice(-1);

    if (value.length > 3) return;

    if (cvc.length < value.length) {
      if (!isNum(lastChar)) return;
      dispatch(createAction(ActionType.INPUT_CVC, cvc + lastChar));
      return;
    }

    dispatch(createAction(ActionType.INPUT_CVC, cvc.slice(0, cvc.length - 1)));
  }

  return(
    <>
      <div className="d-flex justify-content-between">
        <label htmlFor="card-cvc-input">보안 코드(CVC/CVV)</label>
      </div>
      <div className="d-flex align-items-center">
        <input id="card-cvc-input" css={style} type="text" onChange={handleChage} value={transformNumToBullet(cvc)} placeholder='' />
        <div className="helptip">
          <div className="helptip-content">
            CVC(Card Validation Code)는 Visa, MasterCard, Discover 카드의 뒷면과 아메리칸 익스프레스 카드의 앞면에 있는 3자리 또는 4자리 코드이다.
          </div>
        </div>
      </div>
    </>
  )
}

export default CVCInput;
