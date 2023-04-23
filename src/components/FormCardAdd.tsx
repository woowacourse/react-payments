import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import InputCardData from './InputCardData';

import { fetchNewCardData } from '../utils/fetchData';
import { useNavigate } from 'react-router-dom';
import { CVC_TOOLTIP_DETAIL, CVC_TOOLTIP_TITLE } from '../utils/constants';
import { CardType, FormCardAddProps } from '../type';
import './FormCardAdd.css';
import Tooltip from './CVCTooltip';

const FormCardAdd = ({
  cardNumber,
  cardExpire,
  cardOwner,
  securityCode,
  cardPassword1,
  cardPassword2,
}: FormCardAddProps) => {
  const navigate = useNavigate();
  const [inputError, setInputError] = useState(false);
  const [readyToPending, setReadyToPending] = useState(false);
  const [fulfilledData, setFulFilledData] = useState(Array.from({ length: 9 }, () => false));

  const handleExpireError = (element: ChangeEvent<HTMLInputElement>) => {
    const data = element.target.value;
    if (data.length === 5) {
      const getMonth = Number(`${data[0]}${data[1]}`);
      const getYear = Number(`20${data[3]}${data[4]}`);
      const date = new Date();
      const nowMonth = date.getMonth();
      const nowYear = date.getFullYear();
      if (getYear > nowYear) {
        return setInputError(false);
      }
      if (getYear === nowYear && nowMonth <= getMonth) {
        return setInputError(false);
      }
      element.target.value = '';
      return setInputError(true);
    }
  };

  const inputRef = Array.from({ length: 9 }).map(() => React.createRef<HTMLInputElement>());

  const handleInputData = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= e.target.minLength) {
      const inputResults = [...fulfilledData];
      inputResults[index] = true;
      setFulFilledData([...inputResults]);
      // if (!fulfilledData.includes(false)) return setReadyToPending(true);
    } else {
      const inputResults = [...fulfilledData];
      inputResults[index] = false;
      setFulFilledData([...inputResults]);
      // return setReadyToPending(false);
    }
  };

  const moveFocus = (e: ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    if (
      e.target.value.length === e.target.maxLength &&
      Number(e.target.dataset.id) + 1 < inputRef.length
    ) {
      inputRef[Number(e.target.dataset.id) + 1].current?.focus();
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { first, second, third, fourth } = cardNumber.value;

    const postData: Omit<CardType, 'id'> = {
      cardType: '현대',
      cardNumber: {
        first,
        second,
        third,
        fourth,
      },
      cardOwner: cardOwner.value,
      expired: cardExpire.value,
      securityCode: securityCode.value,
      cardPassword: {
        first: cardPassword1.value,
        second: cardPassword2.value,
      },
    };
    if (!fetchNewCardData(postData)) {
      alert('이미 등록된 카드입니다.');
      return;
    }
    navigate('/');
  };

  useEffect(() => {
    if (!fulfilledData.includes(false)) setReadyToPending(true);
  }, [fulfilledData]);

  return (
    <form className="add-card-form" onSubmit={onSubmit}>
      <div>
        <span className="form-label">카드 번호</span>
        <div className="card-number-input-container">
          <InputCardData
            value={cardNumber.value.first}
            onChange={cardNumber.onChange}
            className="card-number"
            name="first"
            dataId={0}
            refObject={inputRef[0]}
            minDataLength={4}
            maxDataLength={4}
            handleError={() => {}}
            onFocus={moveFocus}
            handleInputData={handleInputData}
          />
          <span>-</span>
          <InputCardData
            value={cardNumber.value.second}
            onChange={cardNumber.onChange}
            className="card-number"
            name="second"
            dataId={1}
            minDataLength={4}
            refObject={inputRef[1]}
            maxDataLength={4}
            handleError={() => {}}
            onFocus={moveFocus}
            handleInputData={handleInputData}
          />
          <span>-</span>
          <InputCardData
            value={cardNumber.value.third}
            onChange={cardNumber.onChange}
            className="card-number"
            name="third"
            dataId={2}
            minDataLength={4}
            refObject={inputRef[2]}
            maxDataLength={4}
            isPasswordType={true}
            handleError={() => {}}
            passwordType="card-number"
            onFocus={moveFocus}
            handleInputData={handleInputData}
          />
          <span>-</span>
          <InputCardData
            value={cardNumber.value.fourth}
            onChange={cardNumber.onChange}
            className="card-number"
            name="fourth"
            dataId={3}
            minDataLength={4}
            refObject={inputRef[3]}
            maxDataLength={4}
            handleError={() => {}}
            isPasswordType={true}
            passwordType="card-number"
            onFocus={moveFocus}
            handleInputData={handleInputData}
          />
        </div>
      </div>
      <div>
        <span className="form-label">만료일</span>
        <InputCardData
          value={cardExpire.value}
          onChange={cardExpire.onChange}
          className="card-expired"
          dataId={4}
          refObject={inputRef[4]}
          minDataLength={1}
          maxDataLength={5}
          name="expireDate"
          handleError={handleExpireError}
          onFocus={moveFocus}
          handleInputData={handleInputData}
        />
        {inputError ? <span className="expired-error">오류!</span> : ''}
      </div>
      <div>
        <div className="card-owner-container-header">
          <span className="form-label">카드 소유자 이름(선택)</span>
          <span className="form-label">{cardOwner.value.length}/15</span>
        </div>
        <InputCardData
          value={cardOwner.value}
          onChange={cardOwner.onChange}
          className="card-owner"
          name="owner"
          dataId={5}
          refObject={inputRef[5]}
          minDataLength={1}
          maxDataLength={15}
          handleError={() => {}}
          onFocus={moveFocus}
          handleInputData={handleInputData}
        />
      </div>
      <div className="card-security-code-container">
        <span className="form-label">보안코드(CVC/CVV)</span>
        <div className="card-security-code-box">
          <InputCardData
            value={securityCode.value}
            isPasswordType={true}
            name="cvcData"
            passwordType="password-cvc"
            dataId={6}
            refObject={inputRef[6]}
            maxDataLength={3}
            minDataLength={3}
            handleError={() => {}}
            onChange={securityCode.onChange}
            onFocus={moveFocus}
            handleInputData={handleInputData}
          />
          <Tooltip title={CVC_TOOLTIP_TITLE} detail={CVC_TOOLTIP_DETAIL} />
        </div>
      </div>
      <div className="card-password-container">
        <span className="form-label">카드 비밀번호</span>
        <div className="card-password-input-box">
          <InputCardData
            isPasswordType={true}
            value={cardPassword1.value}
            name="card-password-1"
            dataId={7}
            refObject={inputRef[7]}
            maxDataLength={1}
            minDataLength={1}
            handleError={() => {}}
            passwordType="password-single"
            onChange={cardPassword1.onChange}
            onFocus={moveFocus}
            handleInputData={handleInputData}
          />
          <InputCardData
            isPasswordType={true}
            value={cardPassword2.value}
            name="card-password-2"
            onChange={cardPassword2.onChange}
            dataId={8}
            refObject={inputRef[8]}
            maxDataLength={1}
            minDataLength={1}
            handleError={() => {}}
            passwordType="password-single"
            onFocus={moveFocus}
            handleInputData={handleInputData}
          />

          <span className="passwordDot">ㆍ</span>
          <span className="passwordDot">ㆍ</span>
        </div>
      </div>
      <div className="add-card-submit">
        {readyToPending && !inputError ? <button type="submit">다음</button> : ''}
      </div>
    </form>
  );
};

export default FormCardAdd;
