import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useEasyForm from '../../hooks/useEasyForm';
import CardPreview from '../CardPreview/CardPreview';
import Field from '../Field/Field';
import Label from '../Label/Label';
import InputBox from '../InputBox/InputBox';
import Input from '../Input/Input';
import ToolTip from '../ToolTip/ToolTip';
import Footer from '../Layout/Footer/Footer';
import SubmitButton from '../SubmitButton/SubmitButton';
import { convertFormDataToObject } from '../../utils/commons';
import CardsContext from '../../contexts/CardsContext';

const CardForm = () => {
  const navigate = useNavigate();
  const { registerForm, registerInput, watchingValues } = useEasyForm({
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
  const { addCard } = useContext(CardsContext);

  const onSubmit = (event) => {
    const formData = new FormData(event.target);

    formData.append('brand', '우아한카드');
    formData.set('owner', formData.get('owner').trim().toUpperCase());
    formData.set('alias', '새 카드');

    const cardInfo = convertFormDataToObject(formData);
    const newCard = addCard(cardInfo);

    navigate('/confirm', { state: newCard });
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
      <CardPreview {...{ ...watchingValues, brand: '우아한카드' }} />
      <StyledCardForm {...registerForm({ onSubmit, onError })}>
        <Field>
          <Label>카드 번호</Label>
          <InputBox>
            <Input
              type="text"
              {...registerInput('firstCardNumber', {
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
                watch: true,
              })}
            />
            <p>-</p>
            <Input
              type="text"
              {...registerInput('secondCardNumber', {
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
                watch: true,
              })}
            />
            <p>-</p>
            <Input
              type="password"
              {...registerInput('thirdCardNumber', {
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
                watch: true,
              })}
            />
            <p>-</p>
            <Input
              type="password"
              {...registerInput('fourthCardNumber', {
                minLength: 4,
                maxLength: 4,
                pattern: '[0-9]{4}',
                required: true,
                watch: true,
              })}
            />
          </InputBox>
        </Field>
        <Field>
          <Label>만료일</Label>
          <InputBox className="w-50">
            <Input
              type="text"
              placeholder="MM"
              {...registerInput('expiredMonth', {
                className: 'input-expired-date',
                minLength: 2,
                maxLength: 2,
                pattern: '0[1-9]|1[0-2]',
                required: true,
                watch: true,
              })}
            />
            <p>/</p>
            <Input
              type="text"
              placeholder="YY"
              {...registerInput('expiredYear', {
                className: 'input-expired-date',
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
          </InputBox>
        </Field>
        <Field>
          <Label>
            카드 소유자 이름 (선택)
            <span className="name-length">
              {watchingValues.owner?.length}/30
            </span>
          </Label>
          <InputBox>
            <Input
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              {...registerInput('owner', {
                className: 'input-owner',
                pattern: '(?:[A-Za-z]+ ?){0,3}',
                maxLength: 30,
                watch: true,
              })}
            />
          </InputBox>
        </Field>
        <Field>
          <Label>보안코드 (CVC/CVV)</Label>
          <div className="cvc-block">
            <InputBox>
              <Input
                type="password"
                {...registerInput('cvc', {
                  className: 'input-cvc',
                  minLength: 3,
                  maxLength: 4,
                  pattern: '[0-9]{3,4}',
                  required: true,
                })}
              />
            </InputBox>
            <ToolTip icon="?">
              보안 코드는 보통 카드 뒷면 3-4자리 수입니다
            </ToolTip>
          </div>
        </Field>
        <Field>
          <Label>비밀번호</Label>
          <div className="password-block">
            <InputBox>
              <Input
                type="password"
                className="input-password"
                {...registerInput('firstPasswordDigit', {
                  className: 'input-password',
                  minLength: 1,
                  maxLength: 1,
                  pattern: '[0-9]',
                  required: true,
                })}
              />
            </InputBox>
            <InputBox>
              <Input
                type="password"
                {...registerInput('secondPasswordDigit', {
                  className: 'input-password',
                  minLength: 1,
                  maxLength: 1,
                  pattern: '[0-9]',
                  required: true,
                })}
              />
            </InputBox>
            <Input
              type="password"
              className="input-password"
              value="*"
              disabled
              {...registerInput('thirdPasswordDigit', {
                className: 'input-password',
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
              })}
            />
            <Input
              type="password"
              className="input-password"
              value="*"
              disabled
              {...registerInput('fourthPasswordDigit', {
                className: 'input-password',
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
              })}
            />
          </div>
        </Field>
        <Footer>
          <SubmitButton type="submit">다음</SubmitButton>
        </Footer>
      </StyledCardForm>
    </>
  );
};

const StyledCardForm = styled.form`
  margin: 0;
  width: 100%;
`;

export default CardForm;
