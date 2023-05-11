import React, { ChangeEvent, useCallback, useEffect, useReducer, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import {
  ADD_CARD_FAILURE,
  ADD_CARD_SUCCESS,
  addCardAction,
  addCardRequestStartAction,
} from '../actions/cardDataAction';
import {
  useHandleCVCNumberError,
  useHandleCardNumberError,
  useHandleCardPasswordError,
  useHandleExpireError,
} from '../hooks/useHandleExpireErrors';
import { cardAddReducer } from '../reducer/cardReducer';
import { CardType, FormCardAddProps } from '../type';
import { CVC_TOOLTIP_DETAIL, CVC_TOOLTIP_TITLE, LOCATION } from '../utils/constants';
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
  cardPasswordFirstDigit,
  cardPasswordSecondDigit,
}: FormCardAddProps) => {
  const [readyToPending, setReadyToPending] = useState(false);
  const [nicknameModalOpen, setNicknameModalOpen] = useState(false);
  const [fulfilledData, setFulFilledData] = useState(Array.from({ length: 9 }, () => false));
  const [expireError, setExpireError] = useHandleExpireError();
  const [cardNumberError, setCardNumberError] = useHandleCardNumberError();
  const [cardCVCNumberError, setCardCVCNumberError] = useHandleCVCNumberError();
  const [cardPasswordError, setCardPasswordError] = useHandleCardPasswordError();
  const [addCardResult, dispatchAddCardData] = useReducer(cardAddReducer, {
    type: 'ADD_CARD_DUPLICATED',
    isLoading: false,
    errorMessage: 'string',
  });

  const handleAddCardData = useCallback((data: any) => {
    dispatchAddCardData(data);
  }, []);

  const navigate = useNavigate();
  const [cardNickName, setCardNickName] = useState('');

  const ableRequestData = () => {
    return expireError && cardNumberError && cardCVCNumberError && cardPasswordError;
  };

  const loadingRequest = () => new Promise((resolve) => setTimeout(resolve, 3000));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { first, second, third, fourth } = cardNumber.value;
    const id = uuidv4();
    const postData: CardType = {
      id,
      cardNickName,
      cardType,
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
        first: cardPasswordFirstDigit.value,
        second: cardPasswordSecondDigit.value,
      },
    };
    handleAddCardData(addCardRequestStartAction());
    await loadingRequest();
    handleAddCardData(addCardAction(postData));
  };

  useEffect(() => {
    if (addCardResult.type === ADD_CARD_SUCCESS) {
      navigate(LOCATION.CARD_LIST_PAGE, { state: { cardAdd: ADD_CARD_SUCCESS } });
    }
  }, [addCardResult.type, navigate]);

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
    fulfilledData[5] = true;
    if (!fulfilledData.includes(false)) setReadyToPending(true);
  }, [fulfilledData]);

  return (
    <>
      <form className="add-card-form" onSubmit={viewAddNicknameModal}>
        <div>
          <span className="form-label">카드 번호</span>
          <div className="card-number-input-container">
            <InputCardData
              required={true}
              inputType="number"
              inputMode="numeric"
              placeholder="****"
              className="card-number"
              value={cardNumber.value.first}
              minLength={4}
              maxLength={4}
              name="first"
              dataId={0}
              refObject={inputRef[0]}
              handleError={setCardNumberError}
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
              placeholder="****"
              className="card-number"
              value={cardNumber.value.second}
              minLength={4}
              maxLength={4}
              name="second"
              dataId={1}
              refObject={inputRef[1]}
              handleError={setCardNumberError}
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
              placeholder="****"
              passwordType="card-number"
              className="card-number"
              value={cardNumber.value.third}
              dataId={2}
              minLength={4}
              maxLength={4}
              name="third"
              refObject={inputRef[2]}
              handleError={setCardNumberError}
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
              placeholder="****"
              passwordType="card-number"
              className="card-number"
              value={cardNumber.value.fourth}
              minLength={4}
              maxLength={4}
              name="fourth"
              dataId={3}
              refObject={inputRef[3]}
              handleError={setCardNumberError}
              onChange={cardNumber.onChange}
              nextFocus={moveFocus}
              onFlip={() => {
                handleCardUnflip();
              }}
              handleInputData={handleInputData}
            />
          </div>
          {cardNumberError ? (
            ''
          ) : (
            <span className="error-message">
              카드번호는 16자리 이내의 숫자로 이루어져야 합니다.
            </span>
          )}
        </div>
        <div className="expired-box">
          <span className="form-label">만료일</span>
          <InputCardData
            required={true}
            inputType="text"
            inputMode="numeric"
            placeholder="MM/YY"
            className="card-expired"
            value={cardExpire.value}
            minLength={1}
            maxLength={5}
            name="expireDate"
            dataId={4}
            refObject={inputRef[4]}
            handleError={setExpireError}
            onChange={cardExpire.onChange}
            nextFocus={moveFocus}
            onFlip={() => {
              handleCardUnflip();
            }}
            handleInputData={handleInputData}
          />
          {expireError ? (
            <span className="error-message">만료일 입력은 현재 일자 이후여야만 합니다!</span>
          ) : (
            ''
          )}
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
            placeholder="이름을 입력하세요."
            className="card-owner"
            value={cardOwner.value}
            minLength={0}
            maxLength={15}
            name="owner"
            dataId={5}
            refObject={inputRef[5]}
            onChange={cardOwner.onChange}
            nextFocus={moveFocus}
            onFlip={handleCardUnflip}
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
              placeholder="***"
              passwordType="password-cvc"
              value={securityCode.value}
              name="cvcData"
              maxLength={3}
              minLength={3}
              dataId={6}
              refObject={inputRef[6]}
              handleError={setCardCVCNumberError}
              onChange={securityCode.onChange}
              nextFocus={moveFocus}
              onFlip={handleCardFlip}
              handleInputData={handleInputData}
            />
            <Tooltip title={CVC_TOOLTIP_TITLE} detail={CVC_TOOLTIP_DETAIL} />
          </div>
          {cardCVCNumberError ? (
            ''
          ) : (
            <span className="error-message">CVC 번호는 3자리 숫자로 입력 해 주세요!</span>
          )}
        </div>
        <div className="card-password-container">
          <span className="form-label">카드 비밀번호</span>
          <div className="card-password-input-box">
            <InputCardData
              required={true}
              inputType="password"
              inputMode="numeric"
              placeholder="*"
              passwordType="password-single"
              value={cardPasswordFirstDigit.value}
              maxLength={1}
              minLength={1}
              name="maxLength-password-1"
              dataId={7}
              refObject={inputRef[7]}
              handleError={setCardPasswordError}
              onChange={cardPasswordFirstDigit.onChange}
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
              placeholder="*"
              passwordType="password-single"
              value={cardPasswordSecondDigit.value}
              maxLength={1}
              minLength={1}
              name="maxLength-password-2"
              dataId={8}
              refObject={inputRef[8]}
              handleError={setCardPasswordError}
              onChange={cardPasswordSecondDigit.onChange}
              nextFocus={moveFocus}
              onFlip={() => {
                handleCardUnflip();
              }}
              handleInputData={handleInputData}
            />

            <span className="passwordDot">ㆍ</span>
            <span className="passwordDot">ㆍ</span>
          </div>
          {cardPasswordError ? (
            ''
          ) : (
            <span className="error-message">카드 비밀번호는 각 1자리 숫자를 입력해 주세요!</span>
          )}
        </div>
        <div className="add-card-submit">
          {readyToPending && !ableRequestData() ? <button type="submit">다음</button> : ''}
        </div>
      </form>
      {createPortal(
        <CardNicknameInputModal
          closeModal={setNicknameModalOpen}
          isRequesting={addCardResult.isLoading}
          isFailed={addCardResult.type === ADD_CARD_FAILURE}
          cardType={cardType}
          isModalOpen={nicknameModalOpen}
          cardNumber={cardNumber}
          cardExpire={cardExpire}
          cardOwner={cardOwner}
          securityCode={securityCode}
          handleNickname={setCardNickName}
          submitData={onSubmit}
        />,
        document.body
      )}
    </>
  );
};

export default FormCardAdd;
