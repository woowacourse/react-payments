/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import EasyField from './EasyField';
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

  .input-box.password {
    background-color: transparent;
    width: auto;
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
  }

  .input-basic.password {
    background-color: #ecebf1;
    width: 15%;
    margin-right: 7px;
  }

  .input-underline {
    text-align: center;
    border: none;
    background: none;
    outline: none;

    margin: 16px 0;
    padding: 4px 0;

    border-bottom: 1px solid #383838;
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
    outline: 2px solid red;
  }
`;

const initiaCardlValues = {
  cardNumber: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expiredDate: {
    month: '',
    year: '',
  },
  owner: '',
  cvc: '',
  password: {
    firstDigit: '',
    secondDigit: '',
    thirdDigit: '*',
    fourthDigit: '*',
  },
};

const validationSchema = {
  cardNumber: {
    assert: (cardNumber) => {
      const isValidLength = Object.values(cardNumber).every(
        (number) => number.length === 4
      );

      return isValidLength;
    },
    errorMessage: '무슨 짓을 한거야!',
  },
  expiredDate: {
    assert: ({ month, year }) => {
      const convertedMonth = Number(month);
      const convertedYear = Number(year);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;
      const isValidLength = month.length === 2 && year.length === 2;
      const isMonthValid =
        convertedMonth >= 1 &&
        convertedMonth <= 12 &&
        (convertedYear === currentYear ? convertedMonth >= currentMonth : true);
      const isYearValid = convertedYear >= currentYear;

      return isValidLength && isMonthValid && isYearValid;
    },
    errorMessage: '무슨 짓을 한거야!',
  },
  owner: {
    assert: () => true,
    errorMessage: '무슨 짓을 한거야!',
  },
  cvc: {
    assert: (cvc) => {
      return /^\d{3}$/.test(cvc);
    },
    errorMessage: '무슨 짓을 한거야!',
  },
  password: {
    assert: ({ firstDigit, secondDigit }) => {
      return !Number.isNaN(Number(firstDigit)) && Number(secondDigit);
    },
    errorMessage: '무슨 짓을 한거야!',
  },
};

const validate = (errors) => {
  const errorMessageList = Object.values(errors)
    .filter(({ isError }) => isError)
    .map(({ errorMessage }) => errorMessage);

  if (errorMessageList.length > 0) {
    throw new Error(errorMessageList.join(' '));
  }
};

const addCard = (data) => {
  console.log(data);
};

const CardForm = () => {
  return (
    <EasyForm
      initialValues={initiaCardlValues}
      onSubmit={(data, setSubmitting, errors) => {
        setSubmitting(true);

        try {
          validate(errors);
          addCard(data);
        } catch (e) {
          alert(e.message);
        } finally {
          setSubmitting(false);
        }
      }}
      validationSchema={validationSchema}
    >
      {(values, submitting, handleChange, handleSubmit, errors) => (
        <>
          <CardPreview
            cardNumber={values.cardNumber}
            expiredDate={values.expiredDate}
            owner={values.owner}
          />
          <StyledCardForm onSubmit={handleSubmit} disabled={submitting}>
            <StyledCardFieldContainer className="input-container">
              <label className="input-title">카드 번호</label>
              <EasyField
                name="cardNumber"
                value={values.cardNumber}
                onChange={handleChange}
                className={`input-box ${errors.cardNumber?.isError && 'error'}`}
              >
                <input
                  name="first"
                  type="text"
                  maxLength="4"
                  className="input-basic"
                  required
                />
                <p>-</p>
                <input
                  name="second"
                  type="text"
                  maxLength="4"
                  className="input-basic"
                  required
                />
                <p>-</p>
                <input
                  name="third"
                  type="password"
                  maxLength="4"
                  className="input-basic"
                  required
                />
                <p>-</p>
                <input
                  name="fourth"
                  type="password"
                  maxLength="4"
                  className="input-basic"
                  required
                />
              </EasyField>
            </StyledCardFieldContainer>
            <StyledCardFieldContainer className="input-container">
              <label className="input-title">만료일</label>
              <EasyField
                name="expiredDate"
                value={values.expiredDate}
                onChange={handleChange}
                className={`input-box w-50 ${
                  errors.expiredDate?.isError && 'error'
                }`}
              >
                <input
                  name="month"
                  type="text"
                  minLength="2"
                  maxLength="2"
                  className="input-basic"
                  required
                />
                <p>/</p>
                <input
                  name="year"
                  type="te"
                  minLength="2"
                  maxLength="2"
                  className="input-basic"
                  required
                />
              </EasyField>
            </StyledCardFieldContainer>
            <StyledCardFieldContainer className="input-container">
              <label className="input-title">카드 소유자 이름 (선택)</label>
              <span className="input-title name-length">
                {' '}
                {values.owner.length}/30
              </span>
              <div className="input-box">
                <input
                  name="owner"
                  type="text"
                  maxLength="30"
                  value={values.owner}
                  onChange={({ target }) => {
                    handleChange('owner', () => target.value);
                  }}
                  className="input-basic"
                />
              </div>
            </StyledCardFieldContainer>
            <StyledCardFieldContainer className="input-container">
              <label className="input-title">보안코드 (CVC/CVV)</label>
              <div className="cvc-block">
                <div
                  className={`input-box w-25 ${errors.cvc?.isError && 'error'}`}
                >
                  <input
                    name="cvc"
                    type="text"
                    minLength="3"
                    maxLength="3"
                    value={values.cvc}
                    onChange={({ target }) => {
                      handleChange('cvc', () => target.value);
                    }}
                    className="input-basic"
                    required
                  />
                </div>
                <ToolTip tip="보안 코드는 보통 카드 뒷면 3자리 수입니다.">
                  ?
                </ToolTip>
              </div>
            </StyledCardFieldContainer>
            <StyledCardFieldContainer className="input-container">
              <label className="input-title">비밀번호</label>
              <EasyField
                name="password"
                value={values.password}
                onChange={handleChange}
                className={`input-box password ${
                  errors.password?.isError && 'error'
                }`}
              >
                <input
                  name="firstDigit"
                  type="text"
                  maxLength="1"
                  className="input-basic w-15 password"
                  required
                />
                <input
                  name="secondDigit"
                  type="text"
                  maxLength="1"
                  className="input-basic w-15 password"
                  required
                />
                <input
                  name="thirdDigit"
                  type="password"
                  maxLength="1"
                  className="input-basic w-15 password"
                  disabled
                />
                <input
                  name="fourthDigit"
                  type="password"
                  maxLength="1"
                  className="input-basic w-15 password"
                  disabled
                />
              </EasyField>
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
