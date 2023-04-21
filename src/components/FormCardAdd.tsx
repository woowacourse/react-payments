import React, { ChangeEvent } from 'react';
import InputCardData from './InputCardData';
import InputCardPassword from './InputCardPassword';
import passwordDotImg from '../asset/password_dot.png';
import cvcInfo from '../asset/cvc_info.png';
import { fetchData } from '../utils/fetchData';
import { useNavigate } from 'react-router-dom';
import './FormCardAdd.css';
import { CardType, FormCardAddProps } from '../type';

const FormCardAdd = ({
  cardNumber,
  cardExpire,
  cardOwner,
  securityCode,
  cardPassword1,
  cardPassword2,
}: FormCardAddProps) => {
  const navigate = useNavigate();

  const inputRef = Array.from({ length: 9 }).map(() => React.createRef<HTMLInputElement>());

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
    if (!fetchData(postData)) {
      alert('이미 등록된 카드입니다.');
      return;
    }
    navigate('/');
  };

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
            Ref={inputRef[0]}
            minDataLength={4}
            maxDataLength={4}
            onFocus={moveFocus}
          />
          <span>-</span>
          <InputCardData
            value={cardNumber.value.second}
            onChange={cardNumber.onChange}
            className="card-number"
            name="second"
            dataId={1}
            minDataLength={4}
            Ref={inputRef[1]}
            maxDataLength={4}
            onFocus={moveFocus}
          />
          <span>-</span>
          <InputCardPassword
            value={cardNumber.value.third}
            onChange={cardNumber.onChange}
            name="third"
            dataId={2}
            minDataLength={4}
            maxDataLength={4}
            Ref={inputRef[2]}
            passwordType="card-number"
            onFocus={moveFocus}
          />
          <span>-</span>
          <InputCardPassword
            value={cardNumber.value.fourth}
            onChange={cardNumber.onChange}
            name="fourth"
            dataId={3}
            minDataLength={4}
            maxDataLength={4}
            Ref={inputRef[3]}
            passwordType="card-number"
            onFocus={moveFocus}
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
          Ref={inputRef[4]}
          minDataLength={5}
          maxDataLength={5}
          name="expire"
          onFocus={moveFocus}
        />
      </div>
      <div>
        <div className="card-owner-container-header">
          <span className="form-label">카드 소유자 이름(선택)</span>
          <span className="form-label">{cardOwner.value.length}/30</span>
        </div>
        <InputCardData
          value={cardOwner.value}
          onChange={cardOwner.onChange}
          className="card-owner"
          name="owner"
          dataId={5}
          Ref={inputRef[5]}
          minDataLength={1}
          maxDataLength={30}
          onFocus={moveFocus}
        />
      </div>
      <div className="card-security-code-container">
        <span className="form-label">보안코드(CVC/CVV)</span>
        <div className="card-security-code-box">
          <InputCardPassword
            value={securityCode.value}
            onChange={securityCode.onChange}
            dataId={6}
            Ref={inputRef[6]}
            maxDataLength={3}
            minDataLength={3}
            passwordType="password-cvc"
            onFocus={moveFocus}
          />
          <button type="button" className="cvc-info-button">
            <img src={cvcInfo} alt="cvc_info" />
          </button>
          <div className="cvc-info-box">
            <p>CVC란?</p>
            <p>카드 뒷면의 3자리 숫자입니다.</p>
          </div>
        </div>
      </div>
      <div className="card-password-container">
        <span className="form-label">카드 비밀번호</span>
        <div className="card-password-input-box">
          <InputCardPassword
            value={cardPassword1.value}
            onChange={cardPassword1.onChange}
            dataId={7}
            Ref={inputRef[7]}
            maxDataLength={1}
            minDataLength={1}
            passwordType="password-single"
            onFocus={moveFocus}
          />
          <InputCardPassword
            value={cardPassword2.value}
            onChange={cardPassword2.onChange}
            dataId={8}
            Ref={inputRef[8]}
            maxDataLength={1}
            minDataLength={1}
            passwordType="password-single"
            onFocus={moveFocus}
          />
          <img src={passwordDotImg} alt="비밀번호" />
          <img src={passwordDotImg} alt="비밀번호" />
        </div>
      </div>
      <div className="add-card-submit">
        <button type="submit">다음</button>
      </div>
    </form>
  );
};

export default FormCardAdd;
