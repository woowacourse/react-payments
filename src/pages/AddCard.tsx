import Card from '../component/card/Card';
import Description from '../component/Description';
import styled from 'styled-components';
import { justifyBrandLogo } from '../util/justifyBrandLogo';
import { getFirstErrorMessage } from '../util/getFirstErrorMessage';
import CardBrandSelects from '../component/select/CardBrandSelects';
import DESCRIPTION_TEXT from '../constants/descriptionText';
import useCardInputs from '../hook/useCardInputs';
import CardLabeledInput from '../component/input/CardLabeledInput';

const AddCard = () => {
  const { cardInput, handleCardInput, errorMessages, isError } = useCardInputs();
  const cardNumberErrorMessage = getFirstErrorMessage([
    errorMessages.first,
    errorMessages.second,
    errorMessages.third,
    errorMessages.fourth,
  ]);
  const expirationDateErrorMessage = getFirstErrorMessage([errorMessages.MM, errorMessages.YY]);

  return (
    <Wrap>
      <Card cardNumber={cardInput} cardType={cardInput.first ? justifyBrandLogo(cardInput.first) : 'default'} />
      <Form>
        <Description headText={DESCRIPTION_TEXT.CVC.headText} detailText={DESCRIPTION_TEXT.CVC.detailText} />
        <CardLabeledInput
          id="password"
          label="비밀번호 앞 2자리"
          InputKeys={['password']}
          errorMessage={errorMessages.password}
          handleCardInput={handleCardInput}
          isError={isError}
          placeholder="**"
          maxLength={2}
        />

        <Description headText={DESCRIPTION_TEXT.CVC.headText} detailText={DESCRIPTION_TEXT.CVC.detailText} />
        <CardLabeledInput
          id="CVC"
          label="CVC"
          InputKeys={['CVC']}
          errorMessage={errorMessages.CVC}
          handleCardInput={handleCardInput}
          isError={isError}
          placeholder="123"
          maxLength={3}
        />

        <Description
          headText={DESCRIPTION_TEXT.expirationDate.headText}
          detailText={DESCRIPTION_TEXT.expirationDate.detailText}
        />
        <CardLabeledInput
          id="expiration-date"
          label="유효기간"
          InputKeys={['MM', 'YY']}
          errorMessage={expirationDateErrorMessage}
          handleCardInput={handleCardInput}
          isError={isError}
          placeholder="MM/YY"
          maxLength={2}
        />

        <Description
          headText={DESCRIPTION_TEXT.cardBrand.headText}
          detailText={DESCRIPTION_TEXT.cardBrand.detailText}
        />
        <CardBrandSelects />

        <Description
          headText={DESCRIPTION_TEXT.cardNumber.headText}
          detailText={DESCRIPTION_TEXT.cardNumber.detailText}
        />
        <CardLabeledInput
          id="card-number"
          label="카드 번호"
          InputKeys={['first', 'second', 'third', 'fourth']}
          errorMessage={cardNumberErrorMessage}
          isError={isError}
          handleCardInput={handleCardInput}
          placeholder="1234"
          maxLength={4}
        />
      </Form>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  padding: 30px;
  background-color: var(--color-white);
  padding-top: 77px;
  gap: 45px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;

export default AddCard;
