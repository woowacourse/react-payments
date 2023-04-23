import * as styled from './CardRegisterPage.styled';

import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import { CardPreview } from '../../components';
import useForm from '../../hooks/useForm';

const CardRegisterPage = ({ setCardList }) => {
  const navigation = useNavigate();

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

  const validator = {
    firstCardNumbers: () => true,
    secondCardNumbers: () => false,
    thirdCardNumbers: () => false,
    fourthCardNumbers: () => false,
    expirationMonth: () => false,
    expirationYear: () => false,
    ownerName: () => false,
    securityNumbers: () => false,
    firstPassword: () => false,
    secondPassword: () => false,
    submitButton: () => false,
  };

  const { values, onChange, error, findError } = useForm(refs, validator);

  const onSubmit = (e) => {
    e.preventDefault();

    if (findError()) return;
  };

  return (
    <>
      <CardPreview cardInfo={values} bgColor="#333333" />
      <styled.CardRegisterForm onSubmit={onSubmit}>
        <div>
          <input
            name="firstCardNumbers"
            ref={refs.firstCardNumbers}
            value={values?.firstCardNumbers}
            onChange={onChange}
            maxLength={4}
            data-type="number"
            data-next="secondCardNumbers"
          />
          <input
            name="secondCardNumbers"
            ref={refs.secondCardNumbers}
            value={values?.secondCardNumbers}
            onChange={onChange}
            maxLength={4}
            data-type="number"
            data-next="thirdCardNumbers"
          />
          <input
            name="thirdCardNumbers"
            ref={refs.thirdCardNumbers}
            value={values?.thirdCardNumbers}
            onChange={onChange}
            maxLength={4}
            data-type="number"
            data-next="fourthCardNumbers"
          />
          <input
            name="fourthCardNumbers"
            ref={refs.fourthCardNumbers}
            value={values?.fourthCardNumbers}
            onChange={onChange}
            maxLength={4}
            data-type="number"
            data-next="expirationMonth"
          />
        </div>
        <div>
          <input
            name="expirationMonth"
            ref={refs.expirationMonth}
            value={values?.expirationMonth}
            onChange={onChange}
            maxLength={2}
            data-type="number"
            data-next="expirationYear"
          />
          <input
            name="expirationYear"
            ref={refs.expirationYear}
            value={values?.expirationYear}
            onChange={onChange}
            maxLength={2}
            data-type="number"
            data-next="ownerName"
          />
        </div>
        <div>
          <input
            name="ownerName"
            ref={refs.ownerName}
            value={values?.ownerName}
            onChange={onChange}
            maxLength={30}
            data-type="text"
            data-next="securityNumbers"
          />
        </div>
        <div>
          <input
            name="securityNumbers"
            ref={refs.securityNumbers}
            value={values?.securityNumbers}
            onChange={onChange}
            maxLength={3}
            data-type="number"
            data-next="firstPassword"
          />
        </div>
        <div>
          <input
            name="firstPassword"
            ref={refs.firstPassword}
            value={values?.firstPassword}
            onChange={onChange}
            maxLength={1}
            data-type="number"
            data-next="secondPassword"
          />
          <input
            name="secondPassword"
            ref={refs.secondPassword}
            value={values?.secondPassword}
            onChange={onChange}
            maxLength={1}
            data-type="number"
            data-next="submitButton"
          />
        </div>
        <styled.CardInfoSubmitButtonContainer>
          <styled.CardInfoSubmitButton ref={refs.submitButton}>다음</styled.CardInfoSubmitButton>
        </styled.CardInfoSubmitButtonContainer>
      </styled.CardRegisterForm>
    </>
  );
};

export default CardRegisterPage;
