import React from 'react';
import styled from 'styled-components';
import useEasyForm from '../../hooks/useEasyForm';
import CardPreview from '../common/CardPreview';
import ToolTip from '../common/ToolTip';

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
`;

const StyledInput = styled.input`
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

  &::placeholder {
    letter-spacing: -0.02em;
  }

  &.error {
    outline: 1px solid #ff9e9e;
    outline-offset: -1px;
    background-color: #ffc6c6;
  }
`;

const CardForm = () => {
  const { registerForm, registerInput, watchingValues, errors } = useEasyForm({
    initialValues: {
      firstCardNumber: '',
      secondCardNumber: '',
      thirdCardNumber: '',
      fourthCardNumber: '',
      expiredMonth: '',
      expiredYear: '',
      owner: '',
    },
    validationMode: 'onChange',
    shouldUseReportValidity: false,
  });

  const addCard = (values) => {
    console.log(values);
  };

  const onSubmit = (event) => {
    const formData = new FormData(event.target);
    formData.append('brand', '우아한카드');
    formData.set('owner', formData.get('owner').trim().toUpperCase());

    addCard(formData);
    alert('제출 성공');
  };

  const onError = ({ target: { elements } }) => {
    const firstInvalidInput = Array.from(elements).find(
      ({ validationMessage }) => validationMessage !== ''
    );

    alert(`${firstInvalidInput.validationMessage} [${firstInvalidInput.name}]`);
    firstInvalidInput.focus();
  };

  return (
    <>
      <CardPreview
        brand="우아한카드"
        cardNumber={[
          watchingValues.firstCardNumber,
          watchingValues.secondCardNumber,
          watchingValues.thirdCardNumber,
          watchingValues.fourthCardNumber,
        ]}
        owner={watchingValues.owner}
        expiredDate={{
          month: watchingValues.expiredMonth,
          year: watchingValues.expiredYear,
        }}
      />
      <StyledCardForm {...registerForm({ onSubmit, onError })}>
        <StyledCardFieldContainer className="Input-container">
          <label className="input-title">카드 번호</label>
          <div className="input-box">
            <StyledInput
              type="text"
              className={`input-basic ${
                errors?.firstCardNumber ? 'error' : ''
              }`}
              {...registerInput('firstCardNumber', {
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
                watch: true,
              })}
            />
            <p>-</p>
            <StyledInput
              type="text"
              className={`input-basic ${
                errors?.secondCardNumber ? 'error' : ''
              }`}
              {...registerInput('secondCardNumber', {
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
                watch: true,
              })}
            />
            <p>-</p>
            <StyledInput
              type="password"
              className={`input-basic ${
                errors?.thirdCardNumber ? 'error' : ''
              }`}
              {...registerInput('thirdCardNumber', {
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
                watch: true,
              })}
            />
            <p>-</p>
            <StyledInput
              type="password"
              className={`input-basic ${
                errors?.fourthCardNumber ? 'error' : ''
              }`}
              {...registerInput('fourthCardNumber', {
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
                watch: true,
              })}
            />
          </div>
        </StyledCardFieldContainer>
        <StyledCardFieldContainer className="input-container">
          <label className="input-title">만료일</label>
          <div className="input-box w-50">
            <StyledInput
              type="text"
              className={`input-basic ${errors?.expiredMonth ? 'error' : ''}`}
              placeholder="MM"
              {...registerInput('expiredMonth', {
                minLength: 2,
                maxLength: 2,
                pattern: '^(0?[1-9]|1[012])$',
                required: true,
                watch: true,
              })}
            />
            <p>/</p>
            <StyledInput
              type="text"
              className={`input-basic ${errors?.expiredYear ? 'error' : ''}`}
              placeholder="YY"
              {...registerInput('expiredYear', {
                minLength: 2,
                maxLength: 2,
                pattern: '[0-9][0-9]',
                validation: [
                  {
                    assert: (year) => year >= new Date().getFullYear() % 100,
                    message: '유효하지 않은 연도입니다.',
                  },
                ],
                required: true,
                watch: true,
              })}
            />
          </div>
        </StyledCardFieldContainer>
        <StyledCardFieldContainer className="input-container">
          <label className="input-title">카드 소유자 이름 (선택)</label>
          <span className="input-title name-length">
            {' '}
            {watchingValues.owner?.length}/30
          </span>
          <div className="input-box">
            <StyledInput
              type="text"
              className={`input-basic ${errors?.owner ? 'error' : ''}`}
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              {...registerInput('owner', {
                pattern: '(?:[A-Za-z]+ ?){0,3}',
                maxLength: 30,
                watch: true,
              })}
            />
          </div>
        </StyledCardFieldContainer>
        <StyledCardFieldContainer className="input-container">
          <label className="input-title">보안코드 (CVC/CVV)</label>
          <div className="cvc-block">
            <div className="input-box w-25">
              <StyledInput
                type="password"
                className={`input-basic ${errors?.cvc ? 'error' : ''}`}
                {...registerInput('cvc', {
                  minLength: 3,
                  maxLength: 4,
                  pattern: '[0-9]{3,4}',
                  required: true,
                })}
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
            <StyledInput
              type="password"
              className={`input-basic w-15 password ${
                errors?.firstPasswordDigit ? 'error' : ''
              }`}
              {...registerInput('firstPasswordDigit', {
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
                required: true,
              })}
            />
            <StyledInput
              type="password"
              className={`input-basic w-15 password ${
                errors?.secondPasswordDigit ? 'error' : ''
              }`}
              {...registerInput('secondPasswordDigit', {
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
                required: true,
              })}
            />
            <StyledInput
              type="password"
              className="input-basic w-15 disabled"
              value="*"
              disabled
              {...registerInput('thirdPasswordDigit', {
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
              })}
            />
            <StyledInput
              type="password"
              className="input-basic w-15 disabled"
              value="*"
              disabled
              {...registerInput('fourthPasswordDigit', {
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
              })}
            />
          </div>
        </StyledCardFieldContainer>
        <button className="submit-button" type="submit">
          다음
        </button>
      </StyledCardForm>
    </>
  );
};

export default CardForm;
