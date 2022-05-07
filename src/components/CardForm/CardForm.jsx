import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useEasyForm from '../../hooks/useEasyForm';
import useStore from '../../hooks/useStore';
import CardPreview from '../CardPreview/CardPreview';
import Field from '../Field/Field';
import Label from '../Label/Label';
import InputBox from '../InputBox/InputBox';
import Input from '../Input/Input';
import ToolTip from '../ToolTip/ToolTip';
import SubmitButton from '../SubmitButton/SubmitButton';
import convertFormDataToObject from '../../utils/commons';

const CardForm = () => {
  const navigate = useNavigate();
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
  const { addCard } = useStore();

  const onSubmit = (event) => {
    const formData = new FormData(event.target);

    formData.append('brand', '우아한카드');
    formData.set('owner', formData.get('owner').trim().toUpperCase());

    const cardInfo = convertFormDataToObject(formData);

    addCard(cardInfo);
    navigate('/confirm', { state: cardInfo });
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
              className={`w-25 ${errors?.firstCardNumber ? 'error' : ''}`}
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
              className={`w-25 ${errors?.secondCardNumber ? 'error' : ''}`}
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
              className={`w-25 ${errors?.thirdCardNumber ? 'error' : ''}`}
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
              className={`w-25 ${errors?.fourthCardNumber ? 'error' : ''}`}
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
              className={`w-50 ${errors?.expiredMonth ? 'error' : ''}`}
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
            <Input
              type="text"
              className={`w-50 ${errors?.expiredYear ? 'error' : ''}`}
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
          </InputBox>
        </Field>
        <Field>
          <Label>카드 소유자 이름 (선택)</Label>
          <span className="name-length">
            {' '}
            {watchingValues.owner?.length}/30
          </span>
          <InputBox>
            <Input
              type="text"
              className={`${errors?.owner ? 'error' : ''}`}
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              {...registerInput('owner', {
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
            <InputBox className="w-25">
              <Input
                type="password"
                className={errors?.cvc ? 'error' : ''}
                {...registerInput('cvc', {
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
          <InputBox className="transparent">
            <Input
              type="password"
              className={`password ${
                errors?.firstPasswordDigit ? 'error' : ''
              }`}
              {...registerInput('firstPasswordDigit', {
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
                required: true,
              })}
            />
            <Input
              type="password"
              className={`password ${
                errors?.secondPasswordDigit ? 'error' : ''
              }`}
              {...registerInput('secondPasswordDigit', {
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
                required: true,
              })}
            />
            <Input
              type="password"
              className="password"
              value="*"
              disabled
              {...registerInput('thirdPasswordDigit', {
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
              })}
            />
            <Input
              type="password"
              className="password"
              value="*"
              disabled
              {...registerInput('fourthPasswordDigit', {
                minLength: 1,
                maxLength: 1,
                pattern: '[0-9]',
              })}
            />
          </InputBox>
        </Field>
        <SubmitButton type="submit">다음</SubmitButton>
      </StyledCardForm>
    </>
  );
};

const StyledCardForm = styled.form`
  margin: 0;
`;

export default CardForm;
