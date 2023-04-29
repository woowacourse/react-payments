import React, { ChangeEvent, useEffect, useState } from 'react';

import { FormCardAddProps } from '../type';
import { CVC_TOOLTIP_DETAIL, CVC_TOOLTIP_TITLE } from '../utils/constants';
import Tooltip from './CVCTooltip';
import CardNicknameInputModal from './CardNicknameInputModal';
import './FormCardAdd.css';
import InputCardData from './InputCardData';

const FormCardAdd = ({
  cardType,
  cardFlipper,
  cardNumber,
  cardExpire,
  cardOwner,
  securityCode,
  cardPassword1,
  cardPassword2,
}: FormCardAddProps) => {
  const [inputError, setInputError] = useState(false);
  const [readyToPending, setReadyToPending] = useState(false);
  const [nicknameModalOpen, setNicknameModalOpen] = useState(false);
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
    } else {
      const inputResults = [...fulfilledData];
      inputResults[index] = false;
      setFulFilledData([...inputResults]);
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

  const viewAddNicknameModal = (e: React.FormEvent) => {
    e.preventDefault();
    setNicknameModalOpen(true);
  };

  const handleCardFlip = () => {
    cardFlipper(true);
  };

  const handleCardUnflip = () => {
    cardFlipper(false);
  };

  useEffect(() => {
    if (!fulfilledData.includes(false)) setReadyToPending(true);
    fulfilledData[5] = true;
    if (!fulfilledData.includes(false)) setReadyToPending(true);
  }, [fulfilledData]);

  return (
    <>
      <form
        className="add-card-form"
        onSubmit={(e) => {
          viewAddNicknameModal(e);
        }}
      >
        <div>
          <span className="form-label">카드 번호</span>
          <div className="card-number-input-container">
            <InputCardData
              required={true}
              inputType="number"
              inputMode="numeric"
              className="card-number"
              value={cardNumber.value.first}
              minDataLength={4}
              maxDataLength={4}
              name="first"
              dataId={0}
              refObject={inputRef[0]}
              handleError={() => {}}
              onChange={cardNumber.onChange}
              nextFocus={moveFocus}
              onFlip={() => {
                handleCardUnflip();
              }}
              handleInputData={handleInputData}
            />
            <span>-</span>
            <InputCardData
              required={true}
              inputType="number"
              inputMode="numeric"
              className="card-number"
              value={cardNumber.value.second}
              minDataLength={4}
              maxDataLength={4}
              name="second"
              dataId={1}
              refObject={inputRef[1]}
              handleError={() => {}}
              onChange={cardNumber.onChange}
              nextFocus={moveFocus}
              onFlip={() => {
                handleCardUnflip();
              }}
              handleInputData={handleInputData}
            />
            <span>-</span>
            <InputCardData
              required={true}
              inputType="password"
              inputMode="numeric"
              passwordType="card-number"
              className="card-number"
              value={cardNumber.value.third}
              dataId={2}
              minDataLength={4}
              maxDataLength={4}
              name="third"
              refObject={inputRef[2]}
              handleError={() => {}}
              onChange={cardNumber.onChange}
              nextFocus={moveFocus}
              onFlip={() => {
                handleCardUnflip();
              }}
              handleInputData={handleInputData}
            />
            <span>-</span>
            <InputCardData
              required={true}
              inputType="password"
              inputMode="numeric"
              passwordType="card-number"
              className="card-number"
              value={cardNumber.value.fourth}
              minDataLength={4}
              maxDataLength={4}
              name="fourth"
              dataId={3}
              refObject={inputRef[3]}
              handleError={() => {}}
              onChange={cardNumber.onChange}
              nextFocus={moveFocus}
              onFlip={() => {
                handleCardUnflip();
              }}
              handleInputData={handleInputData}
            />
          </div>
        </div>
        <div>
          <span className="form-label">만료일</span>
          <InputCardData
            required={true}
            inputType="text"
            inputMode="numeric"
            className="card-expired"
            value={cardExpire.value}
            minDataLength={1}
            maxDataLength={5}
            name="expireDate"
            dataId={4}
            refObject={inputRef[4]}
            handleError={handleExpireError}
            onChange={cardExpire.onChange}
            nextFocus={moveFocus}
            onFlip={() => {
              handleCardUnflip();
            }}
            handleInputData={handleInputData}
          />
          {inputError ? <span className="expired-error">만료일이 초과된 카드입니다!</span> : ''}
        </div>
        <div>
          <div className="card-owner-container-header">
            <span className="form-label">카드 소유자 이름(선택)</span>
            <span className="form-label">{cardOwner.value.length}/15</span>
          </div>
          <InputCardData
            required={false}
            inputType="text"
            inputMode="text"
            className="card-owner"
            value={cardOwner.value}
            minDataLength={0}
            maxDataLength={15}
            name="owner"
            dataId={5}
            refObject={inputRef[5]}
            handleError={() => {}}
            onChange={cardOwner.onChange}
            nextFocus={moveFocus}
            onFlip={() => {
              handleCardUnflip();
            }}
            handleInputData={handleInputData}
          />
        </div>
        <div className="card-security-code-container">
          <span className="form-label">보안코드(CVC/CVV)</span>
          <div className="card-security-code-box">
            <InputCardData
              required={true}
              inputType="password"
              inputMode="numeric"
              passwordType="password-cvc"
              value={securityCode.value}
              name="cvcData"
              maxDataLength={3}
              minDataLength={3}
              dataId={6}
              refObject={inputRef[6]}
              handleError={() => {}}
              onChange={securityCode.onChange}
              nextFocus={moveFocus}
              onFlip={() => {
                handleCardFlip();
              }}
              handleInputData={handleInputData}
            />
            <Tooltip title={CVC_TOOLTIP_TITLE} detail={CVC_TOOLTIP_DETAIL} />
          </div>
        </div>
        <div className="card-password-container">
          <span className="form-label">카드 비밀번호</span>
          <div className="card-password-input-box">
            <InputCardData
              required={true}
              inputType="password"
              inputMode="numeric"
              passwordType="password-single"
              value={cardPassword1.value}
              maxDataLength={1}
              minDataLength={1}
              name="card-password-1"
              dataId={7}
              refObject={inputRef[7]}
              handleError={() => {}}
              onChange={cardPassword1.onChange}
              nextFocus={moveFocus}
              onFlip={() => {
                handleCardUnflip();
              }}
              handleInputData={handleInputData}
            />
            <InputCardData
              required={true}
              inputType="password"
              inputMode="numeric"
              passwordType="password-single"
              value={cardPassword2.value}
              maxDataLength={1}
              minDataLength={1}
              name="card-password-2"
              dataId={8}
              refObject={inputRef[8]}
              handleError={() => {}}
              onChange={cardPassword2.onChange}
              nextFocus={moveFocus}
              onFlip={() => {
                handleCardUnflip();
              }}
              handleInputData={handleInputData}
            />

            <span className="passwordDot">ㆍ</span>
            <span className="passwordDot">ㆍ</span>
          </div>
        </div>
        <div className="add-card-submit ">
          {readyToPending && !inputError ? <button type="submit">다음</button> : ''}
        </div>
      </form>
      {nicknameModalOpen ? (
        <CardNicknameInputModal
          closeModal={setNicknameModalOpen}
          cardType={cardType}
          cardNumber={cardNumber}
          cardExpire={cardExpire}
          cardOwner={cardOwner}
          securityCode={securityCode}
          cardPassword1={cardPassword1}
          cardPassword2={cardPassword2}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default FormCardAdd;
