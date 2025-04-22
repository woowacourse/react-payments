import Card from "../component/card/Card";
import Description from "../component/Description";
import styled from "styled-components";
import { useState } from "react";
import { justifyBrandLogo } from "../util/justifyBrandLogo";
import CardNumberInputs from "../component/formSections/cardNumberInputs/CardNumberInputs";
import type { CardInputProps } from "../types/CardInputTypes";
import { useErrorMessages } from "../hook/useErrorMessages";
import ExpirationDateInputs from "../component/formSections/expirationDateInputs/ExpirationDateInputs";
import CVCInputs from "../component/formSections/cvcInputs/CVCInputs";
import { getFirstErrorMessage } from "../util/getFirstErrorMessage";
import CardBrandSelects from "../component/formSections/cardBrandSelects";
import CardPasswordInputs from "../component/formSections/cardPasswordInputs";
import DESCRIPTION_TEXT from "../constants/descriptionText";

const AddCard = () => {
  const [cardInput, setCardInput] = useState<CardInputProps>({
    first: null,
    second: null,
    third: null,
    fourth: null,
    MM: null,
    YY: null,
    CVC: null,
    password: null,
  });

  const { errorMessages, handleErrorMessages } = useErrorMessages();

  return (
    <Wrap>
      <Card
        cardNumber={cardInput}
        cardType={
          cardInput.first ? justifyBrandLogo(cardInput.first) : "default"
        }
      />
      <Form>
        <Description
          headText={DESCRIPTION_TEXT.password.headText}
          detailText={DESCRIPTION_TEXT.password.detailText}
        />
        <CardPasswordInputs
          errorMessage={errorMessages.password}
          handleErrorMessages={handleErrorMessages}
          setCardInput={setCardInput}
        />

        <Description
          headText={DESCRIPTION_TEXT.CVC.headText}
          detailText={DESCRIPTION_TEXT.CVC.detailText}
        />
        <CVCInputs
          errorMessage={errorMessages.CVC}
          handleErrorMessages={handleErrorMessages}
          setCardInput={setCardInput}
        />

        <Description
          headText={DESCRIPTION_TEXT.expirationDate.headText}
          detailText={DESCRIPTION_TEXT.expirationDate.detailText}
        />
        <ExpirationDateInputs
          errorMessage={getFirstErrorMessage([
            errorMessages.YY,
            errorMessages.MM,
          ])}
          handleErrorMessages={handleErrorMessages}
          setCardInput={setCardInput}
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
        <CardNumberInputs
          errorMessage={getFirstErrorMessage([
            errorMessages.first,
            errorMessages.second,
            errorMessages.third,
            errorMessages.fourth,
          ])}
          handleErrorMessages={handleErrorMessages}
          setCardInput={setCardInput}
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
