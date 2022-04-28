/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import EasyForm from './EasyForm';
import CardPreview from './CardPreview';
import ToolTip from './ToolTip';

const StyledCardForm = styled.form`
  margin: 0;

  .submit-button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    position: absolute;
    width: 51px;
    height: 34px;
    right: 25px;
    bottom: 16px;

    text-align: right;

    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #04c09e;
  }
`;

const StyledCardFieldContainer = styled.div`
  margin: 16px 0;

  .input-title {
    display: inline-block;

    font-size: 12px;
    line-height: 14px;
    vertical-align: top;

    margin-bottom: 4px;

    color: #525252;
  }

  .input-box {
    display: flex;
    height: 47px;
    align-items: center;
    margin-top: 0.375rem;
    color: #d3d3d3;
    border-radius: 0.25rem;
    background-color: #ecebf1;
  }

  .transparent {
    background-color: transparent;
  }

  .input-basic {
    background-color: #ecebf1;
    height: 45px;
    width: 100%;
    text-align: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: #9ca3af;
    border: none;
    border-radius: 0.25rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #525252;
  }

  .input-basic::placeholder {
    letter-spacing: -0.02em;
  }

  .password {
    background-color: #ecebf1;
    width: 15%;
    margin-right: 7px;
  }

  .disabled {
    background-color: transparent;
    width: 15%;
    margin-right: 7px;
  }

  .name-length {
    display: inline-block;
    line-height: 14px;
    float: right;
  }

  .cvc-block {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .error {
    outline: 1px solid #ff9e9e;
    outline-offset: -1px;
    background-color: #ffc6c6;
  }
`;

const cardFormSchema = {
  firstCardNumber: {
    alias: '카드 번호',
    type: 'number',
    initialValue: '',
    minLength: 4,
    maxLength: 4,
    required: true,
  },
  secondCardNumber: {
    alias: '카드 번호',
    type: 'number',
    initialValue: '',
    minLength: 4,
    maxLength: 4,
    required: true,
  },
  thirdCardNumber: {
    alias: '카드 번호',
    type: 'number',
    initialValue: '',
    minLength: 4,
    maxLength: 4,
    required: true,
  },
  fourthCardNumber: {
    alias: '카드 번호',
    type: 'number',
    initialValue: '',
    minLength: 4,
    maxLength: 4,
    required: true,
  },
  expiredMonth: {
    alias: '만료일',
    type: 'number',
    initialValue: '',
    minLength: 2,
    maxLength: 2,
    required: true,
    validation: [
      {
        assert: (month) => month >= 1 && month <= 12,
        errorMessage: '유효하지 않은 월입니다.',
      },
    ],
  },
  expiredYear: {
    alias: '만료일',
    type: 'number',
    initialValue: '',
    minLength: 2,
    maxLength: 2,
    required: true,
    validation: [
      {
        assert: (year) => year >= new Date().getFullYear() % 100,
        errorMessage: '유효하지 않은 연도입니다.',
      },
    ],
  },
  owner: {
    alias: '카드 소유자 이름',
    type: 'text',
    initialValue: '',
    maxLength: 30,
  },
  cvc: {
    alias: '보안코드 (cvc/cvv)',
    type: 'number',
    initialValue: '',
    minLength: 3,
    maxLength: 4,
    required: true,
  },
  firstPasswordDigit: {
    alias: '비밀번호',
    type: 'number',
    initialValue: '',
    minLength: 1,
    maxLength: 1,
    required: true,
  },
  secondPasswordDigit: {
    alias: '비밀번호',
    type: 'number',
    initialValue: '',
    minLength: 1,
    maxLength: 1,
    required: true,
  },
  thirdPasswordDigit: {
    alias: '비밀번호',
    type: 'number',
    initialValue: '*',
    minLength: 1,
    maxLength: 1,
  },
  fourthPasswordDigit: {
    alias: '비밀번호',
    type: 'number',
    initialValue: '*',
    minLength: 1,
    maxLength: 1,
  },
};

const getCardInfo = ({
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  expiredMonth,
  expiredYear,
  owner,
  cvc,
  firstPasswordDigit,
  secondPasswordDigit,
}) => ({
  brand: '우아한카드',
  cardNumber: [
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
  ],
  expiredDate: {
    month: expiredMonth,
    year: expiredYear,
  },
  owner: owner.toUpperCase(),
  cvc,
  password: `${firstPasswordDigit}${secondPasswordDigit}`,
});

const addCard = (values) => {
  console.log(getCardInfo(values));
};

const CardForm = () => {
  return (
    <EasyForm
      formSchema={cardFormSchema}
      onSubmit={(values, setSubmitting) => {
        setSubmitting(true);
        addCard(values);
        alert('제출 성공');
        setSubmitting(false);
      }}
      onSubmitError={(errors, invalidInputRefs) => {
        const firstInvalidInput = invalidInputRefs[0].element;
        const { errorMessage } = errors[firstInvalidInput.name];

        firstInvalidInput.focus();
        alert(errorMessage);
      }}
    >
      {({ values, submitting, handleSubmit, errors, registerInputProps }) => (
        <>
          <CardPreview {...getCardInfo(values)} />
          <StyledCardForm onSubmit={handleSubmit} disabled={submitting}>
            <StyledCardFieldContainer className="input-container">
              <label className="input-title">카드 번호</label>
              <div className="input-box">
                <input
                  className={`input-basic ${
                    errors.firstCardNumber?.showError ? 'error' : ''
                  }`}
                  {...registerInputProps('firstCardNumber')}
                />
                <p>-</p>
                <input
                  className={`input-basic ${
                    errors.secondCardNumber?.showError ? 'error' : ''
                  }`}
                  {...registerInputProps('secondCardNumber')}
                />
                <p>-</p>
                <input
                  type="password"
                  className={`input-basic ${
                    errors.thirdCardNumber?.showError ? 'error' : ''
                  }`}
                  {...registerInputProps('thirdCardNumber')}
                />
                <p>-</p>
                <input
                  type="password"
                  className={`input-basic ${
                    errors.fourthCardNumber?.showError ? 'error' : ''
                  }`}
                  {...registerInputProps('fourthCardNumber')}
                />
              </div>
            </StyledCardFieldContainer>
            <StyledCardFieldContainer className="input-container">
              <label className="input-title">만료일</label>
              <div className="input-box w-50">
                <input
                  className={`input-basic ${
                    errors.expiredMonth?.showError ? 'error' : ''
                  }`}
                  placeholder="MM"
                  {...registerInputProps('expiredMonth')}
                />
                <p>/</p>
                <input
                  className={`input-basic ${
                    errors.expiredYear?.showError ? 'error' : ''
                  }`}
                  placeholder="YY"
                  {...registerInputProps('expiredYear')}
                />
              </div>
            </StyledCardFieldContainer>
            <StyledCardFieldContainer className="input-container">
              <label className="input-title">카드 소유자 이름 (선택)</label>
              <span className="input-title name-length">
                {' '}
                {values.owner.length}/30
              </span>
              <div className="input-box">
                <input
                  className={`input-basic ${
                    errors.owner?.showError ? 'error' : ''
                  }`}
                  placeholder="카드에 표시된 이름과 동일하게 입력하세요."
                  {...registerInputProps('owner')}
                />
              </div>
            </StyledCardFieldContainer>
            <StyledCardFieldContainer className="input-container">
              <label className="input-title">보안코드 (CVC/CVV)</label>
              <div className="cvc-block">
                <div className="input-box w-25">
                  <input
                    type="password"
                    className={`input-basic ${
                      errors.cvc?.showError ? 'error' : ''
                    }`}
                    {...registerInputProps('cvc')}
                  />
                </div>
                <ToolTip tip="보안 코드는 보통 카드 뒷면 3-4자리 수입니다.">
                  ?
                </ToolTip>
              </div>
            </StyledCardFieldContainer>
            <StyledCardFieldContainer className="input-container">
              <label className="input-title">비밀번호</label>
              <div className="input-box transparent">
                <input
                  type="password"
                  className={`input-basic w-15 password ${
                    errors.firstPasswordDigit?.showError ? 'error' : ''
                  }`}
                  {...registerInputProps('firstPasswordDigit')}
                />
                <input
                  type="password"
                  className={`input-basic w-15 password ${
                    errors.secondPasswordDigit?.showError ? 'error' : ''
                  }`}
                  {...registerInputProps('secondPasswordDigit')}
                />
                <input
                  type="password"
                  className={`input-basic w-15 disabled ${
                    errors.thirdPasswordDigit?.showError ? 'error' : ''
                  }`}
                  disabled
                  {...registerInputProps('thirdPasswordDigit')}
                />
                <input
                  type="password"
                  className={`input-basic w-15 disabled ${
                    errors.fourthPasswordDigit?.showError ? 'error' : ''
                  }`}
                  disabled
                  {...registerInputProps('fourthPasswordDigit')}
                />
              </div>
            </StyledCardFieldContainer>
            <button className="submit-button" type="submit">
              다음
            </button>
          </StyledCardForm>
        </>
      )}
    </EasyForm>
  );
};

export default CardForm;
