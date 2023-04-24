import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import * as styled from './CardRegisterPage.styled';

import validator from '../../domain/validator';

import CardPreview from '../../components/CardPreview';
import Header from '../../components/Header';
import {
  Input,
  CardNumbers,
  ExpirationDate,
  OwnerName,
  Password,
  SecurityNumbers,
} from '../../components/InputBox';

const CardRegisterPage = ({ onChangeCardList }) => {
  const navigate = useNavigate();

  const refs = {
    firstCardNumbers: useRef(null),
    secondCardNumbers: useRef(null),
    thirdCardNumbers: useRef(null),
    fourthCardNumbers: useRef(null),
    expirationMonth: useRef(null),
    expirationYear: useRef(null),
    ownerName: useRef(null),
    securityNumbers: useRef(null),
    firstPassword: useRef(null),
    secondPassword: useRef(null),
    submitButton: useRef(null),
  };

  const { values, onChange, error, findError } = useForm(refs, validator);

  const onSubmit = (e) => {
    e.preventDefault();

    if (findError()) return;

    onChangeCardList(values);

    navigate(`/`);
  };

  return (
    <styled.CardRegisterPage>
      <Header />
      <CardPreview cardInfo={values} bgColor="#333333" />
      <styled.CardRegisterForm onSubmit={onSubmit}>
        <CardNumbers error={error}>
          <>
            <Input
              name="firstCardNumbers"
              ref={refs.firstCardNumbers}
              value={values?.firstCardNumbers}
              onChange={onChange}
              maxLength={4}
              center={true}
              type="text"
              dataType="number"
              dataNext="secondCardNumbers"
            />
            <Input
              name="secondCardNumbers"
              ref={refs.secondCardNumbers}
              value={values?.secondCardNumbers}
              onChange={onChange}
              maxLength={4}
              center={true}
              type="text"
              dataType="number"
              dataNext="thirdCardNumbers"
            />
            <Input
              name="thirdCardNumbers"
              ref={refs.thirdCardNumbers}
              value={values?.thirdCardNumbers}
              onChange={onChange}
              maxLength={4}
              center={true}
              type="password"
              dataType="number"
              dataNext="fourthCardNumbers"
            />
            <Input
              name="fourthCardNumbers"
              ref={refs.fourthCardNumbers}
              value={values?.fourthCardNumbers}
              onChange={onChange}
              maxLength={4}
              center={true}
              type="password"
              dataType="number"
              dataNext="expirationMonth"
            />
          </>
        </CardNumbers>
        <ExpirationDate error={error}>
          <>
            <Input
              name="expirationMonth"
              ref={refs.expirationMonth}
              value={values?.expirationMonth}
              onChange={onChange}
              maxLength={2}
              center={true}
              placeholder="MM"
              type="text"
              dataType="number"
              dataNext="expirationYear"
            />
            <Input
              name="expirationYear"
              ref={refs.expirationYear}
              value={values?.expirationYear}
              onChange={onChange}
              maxLength={2}
              center={true}
              placeholder="YY"
              type="text"
              dataType="number"
              dataNext="ownerName"
            />
          </>
        </ExpirationDate>
        <OwnerName ownerName={values?.ownerName} maxLength={30} error={error}>
          <Input
            name="ownerName"
            ref={refs.ownerName}
            value={values?.ownerName}
            onChange={onChange}
            maxLength={30}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            type="text"
            dataType="text"
            dataNext="securityNumbers"
          />
        </OwnerName>
        <SecurityNumbers error={error}>
          <Input
            name="securityNumbers"
            ref={refs.securityNumbers}
            value={values?.securityNumbers}
            onChange={onChange}
            maxLength={3}
            center={true}
            type="text"
            dataType="number"
            dataNext="firstPassword"
          />
        </SecurityNumbers>
        <Password error={error}>
          <>
            <Input
              name="firstPassword"
              ref={refs.firstPassword}
              value={values?.firstPassword}
              onChange={onChange}
              maxLength={1}
              center={true}
              type="password"
              dataType="number"
              dataNext="secondPassword"
            />
            <Input
              name="secondPassword"
              ref={refs.secondPassword}
              value={values?.secondPassword}
              onChange={onChange}
              maxLength={1}
              center={true}
              type="password"
              dataType="number"
              dataNext="submitButton"
            />
          </>
        </Password>
        <styled.CardInfoSubmitButtonContainer>
          <styled.CardInfoSubmitButton ref={refs.submitButton}>다음</styled.CardInfoSubmitButton>
        </styled.CardInfoSubmitButtonContainer>
      </styled.CardRegisterForm>
    </styled.CardRegisterPage>
  );
};

export default CardRegisterPage;
