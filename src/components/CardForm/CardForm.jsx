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

const addCard = (values) => {
  console.log(values);
};

const CardForm = () => {
  const { bindForm, register, fieldStates } = useEasyForm({
    initialValues: {
      firstCardNumber: '',
      secondCardNumber: '',
      thirdCardNumber: '',
      fourthCardNumber: '',
      expiredMonth: '',
      expiredYear: '',
      owner: '',
      cvc: '',
      firstPasswordDigit: '',
      secondPasswordDigit: '',
      thirdPasswordDigit: '*',
      fourthPasswordDigit: '*',
    },
    mode: 'onChange',
    shouldUseNativeHint: false,
  });

  const onSubmit = ({ values }) => {
    addCard(values);
    alert('제출 성공');
  };

  const onError = ({ fields }) => {
    const invalidFieldNames = Object.keys(fields).filter(
      (name) => !fields[name].element.validity.valid
    );
    const invalidField = invalidFieldNames
      .map((name) => fields[name])
      .sort((a, b) => a.id - b.id);
    const firstInvalidField = invalidField[0].element;

    firstInvalidField.focus();
    alert(`${firstInvalidField.validationMessage} [${firstInvalidField.name}]`);
  };

  return (
    <>
      <CardPreview
        brand="우아한카드"
        cardNumber={[
          fieldStates.firstCardNumber.value,
          fieldStates.secondCardNumber.value,
          fieldStates.thirdCardNumber.value,
          fieldStates.fourthCardNumber.value,
        ]}
        owner={fieldStates.owner.value}
        expiredDate={{
          month: fieldStates.expiredMonth.value,
          year: fieldStates.expiredYear.value,
        }}
      />
      <StyledCardForm {...bindForm(onSubmit, onError)}>
        <StyledCardFieldContainer className="Input-container">
          <label className="input-title">카드 번호</label>
          <div className="input-box">
            <input
              type="text"
              className={`input-basic ${
                fieldStates.firstCardNumber?.showError ? 'error' : ''
              }`}
              {...register('firstCardNumber', {
                alias: '카드 번호',
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                inputFilter: '[0-9]{0,4}',
                required: true,
              })}
            />
            <p>-</p>
            <input
              type="text"
              className={`input-basic ${
                fieldStates.secondCardNumber?.showError ? 'error' : ''
              }`}
              {...register('secondCardNumber', {
                alias: '카드 번호',
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
              })}
            />
            <p>-</p>
            <input
              type="password"
              className={`input-basic ${
                fieldStates.thirdCardNumber?.showError ? 'error' : ''
              }`}
              {...register('thirdCardNumber', {
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
              })}
            />
            <p>-</p>
            <input
              type="password"
              className={`input-basic ${
                fieldStates.fourthCardNumber?.showError ? 'error' : ''
              }`}
              {...register('fourthCardNumber', {
                alias: '카드 번호',
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
              })}
            />
          </div>
        </StyledCardFieldContainer>
        <StyledCardFieldContainer className="input-container">
          <label className="input-title">만료일</label>
          <div className="input-box w-50">
            <input
              type="text"
              className={`input-basic ${
                fieldStates.expiredMonth?.showError ? 'error' : ''
              }`}
              placeholder="MM"
              {...register('expiredMonth', {
                alias: '만료일',
                minLength: 2,
                maxLength: 2,
                pattern: '[0-1][0-9]',
                required: true,
                validation: [
                  {
                    assert: (month) => month >= 1 && month <= 12,
                    message: '유효하지 않은 월입니다.',
                  },
                ],
              })}
            />
            <p>/</p>
            <input
              type="text"
              className={`input-basic ${
                fieldStates.expiredYear?.showError ? 'error' : ''
              }`}
              placeholder="YY"
              {...register('expiredYear', {
                alias: '만료일',
                minLength: 2,
                maxLength: 2,
                pattern: '[0-9][0-9]',
                required: true,
                validation: [
                  {
                    assert: (year) => year >= new Date().getFullYear() % 100,
                    message: '유효하지 않은 연도입니다.',
                  },
                ],
              })}
            />
          </div>
        </StyledCardFieldContainer>
        <StyledCardFieldContainer className="input-container">
          <label className="input-title">카드 소유자 이름 (선택)</label>
          <span className="input-title name-length">
            {' '}
            {fieldStates?.owner?.value.length}/30
          </span>
          <div className="input-box">
            <input
              type="text"
              className={`input-basic ${
                fieldStates.owner?.showError ? 'error' : ''
              }`}
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              {...register('owner', {
                alias: '카드 소유자 이름',
                pattern: '(?:[A-Za-z]+ ?){0,3}',
                maxLength: 30,
              })}
            />
          </div>
        </StyledCardFieldContainer>
        <StyledCardFieldContainer className="input-container">
          <label className="input-title">보안코드 (CVC/CVV)</label>
          <div className="cvc-block">
            <div className="input-box w-25">
              <input
                type="text"
                className={`input-basic ${
                  fieldStates.cvc?.showError ? 'error' : ''
                }`}
                {...register('cvc', {
                  alias: '보안코드 (cvc/cvv)',
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
            <input
              type="password"
              className={`input-basic w-15 password ${
                fieldStates.firstPasswordDigit?.showError ? 'error' : ''
              }`}
              {...register('firstPasswordDigit', {
                alias: '비밀번호',
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
                required: true,
              })}
            />
            <input
              type="password"
              className={`input-basic w-15 password ${
                fieldStates.secondPasswordDigit?.showError ? 'error' : ''
              }`}
              {...register('secondPasswordDigit', {
                alias: '비밀번호',
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
                required: true,
              })}
            />
            <input
              type="password"
              className={`input-basic w-15 disabled ${
                fieldStates.thirdPasswordDigit?.showError ? 'error' : ''
              }`}
              disabled
              {...register('thirdPasswordDigit', {
                alias: '비밀번호',
                minLength: 1,
                maxLength: 1,
              })}
            />
            <input
              type="password"
              className={`input-basic w-15 disabled ${
                fieldStates.fourthPasswordDigit?.showError ? 'error' : ''
              }`}
              disabled
              {...register('fourthPasswordDigit', {
                alias: '비밀번호',
                minLength: 1,
                maxLength: 1,
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
