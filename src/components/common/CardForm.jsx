import React, { useContext } from 'react';
import styled from 'styled-components';
import CardPreview from './CardPreview';
import ToolTip from './ToolTip';
import useCardForm from '../../hooks/useCardForm';
import InputFieldContainer from './InputFieldContainer';
import Button from './Button';
import CardContext from '../../contexts/CardContext';

const StyledCardForm = styled.form`
  margin: 0;
`;

const CardForm = ({ cardFormSchema }) => {
  const { values } = useContext(CardContext);
  const { isSubmitting, handleSubmit, registerInputProps, getInputClassName } =
    useCardForm({ cardFormSchema }, '/complete-add-card');

  return (
    <>
      <CardPreview values={values} />
      <StyledCardForm onSubmit={handleSubmit} disabled={isSubmitting}>
        <InputFieldContainer>
          <label className="input-title">카드 번호</label>
          <div className="input-box">
            <input
              className={getInputClassName('firstCardNumber')}
              {...registerInputProps('firstCardNumber')}
            />
            <p>-</p>
            <input
              className={getInputClassName('secondCardNumber')}
              {...registerInputProps('secondCardNumber')}
            />
            <p>-</p>
            <input
              type="password"
              className={getInputClassName('thirdCardNumber')}
              {...registerInputProps('thirdCardNumber')}
            />
            <p>-</p>
            <input
              type="password"
              className={getInputClassName('fourthCardNumber')}
              {...registerInputProps('fourthCardNumber')}
            />
          </div>
        </InputFieldContainer>
        <InputFieldContainer>
          <label className="input-title">만료일</label>
          <div className="input-box w-50">
            <input
              className={getInputClassName('expiredMonth')}
              placeholder="MM"
              {...registerInputProps('expiredMonth')}
            />
            <p>/</p>
            <input
              className={getInputClassName('expiredYear')}
              placeholder="YY"
              {...registerInputProps('expiredYear')}
            />
          </div>
        </InputFieldContainer>
        <InputFieldContainer>
          <label className="input-title">카드 소유자 이름 (선택)</label>
          <span className="input-title name-length">
            {' '}
            {values.owner.length}/30
          </span>
          <div className="input-box">
            <input
              className={getInputClassName('owner')}
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              {...registerInputProps('owner')}
            />
          </div>
        </InputFieldContainer>
        <InputFieldContainer>
          <label className="input-title">보안코드 (CVC/CVV)</label>
          <div className="cvc-block">
            <div className="input-box w-25">
              <input
                type="password"
                className={getInputClassName('cvc')}
                {...registerInputProps('cvc')}
              />
            </div>
            <ToolTip tip="보안 코드는 보통 카드 뒷면 3-4자리 수입니다.">
              ?
            </ToolTip>
          </div>
        </InputFieldContainer>
        <InputFieldContainer>
          <label className="input-title">비밀번호</label>
          <div className="input-box transparent">
            <input
              type="password"
              className={getInputClassName(
                'firstPasswordDigit',
                'w-15 password'
              )}
              {...registerInputProps('firstPasswordDigit')}
            />
            <input
              type="password"
              className={getInputClassName(
                'secondPasswordDigit',
                'w-15 password'
              )}
              {...registerInputProps('secondPasswordDigit')}
            />
            <input
              type="password"
              className="input-basic w-15 disabled"
              disabled
              {...registerInputProps('thirdPasswordDigit')}
            />
            <input
              type="password"
              className="input-basic w-15 disabled"
              disabled
              {...registerInputProps('fourthPasswordDigit')}
            />
          </div>
        </InputFieldContainer>
        <Button className="submit-button" type="submit">
          다음
        </Button>
      </StyledCardForm>
    </>
  );
};

export default CardForm;
