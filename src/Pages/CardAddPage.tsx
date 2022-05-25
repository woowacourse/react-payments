import { useState } from "react";
import styled from "styled-components";

import useLocalStorage from "useLocalStorage";
import CardInfoContext, {
  CardInfoStateTypeInterface,
} from "context/CardInfoContext";

import PageHeader from "containers/PageHeader";
import CardInfoForm from "containers/CardInfoForm";
import CardNicknameForm from "containers/CardNicknameForm";

import { CardPreview } from "components";

import {
  CARD_REGISTER_SUCCESS_MESSAGE,
  CARD_INFO_RULES,
  CARD_REGISTER_FAIL_MESSAGE,
  NICKNAME_REGISTER_SUCCESS_MESSAGE,
  NICKNAME_REGISTER_FAIL_MESSAGE,
  PAGE_NAME,
} from "../utils/constants";

const {
  NUMBER_UNIT_COUNT,
  NUMBER_UNIT_LENGTH,
  EXPIRE_DATE_LENGTH,
  SECURITY_CODE_LENGTH,
  PASSWORD_LENGTH,
} = CARD_INFO_RULES;

const initialCardInfoState = {
  cardNumber: ["", "", "", ""],
  expireDate: ["", ""],
  holderName: "",
  securityCodeLength: 0,
  passwordLength: [0, 0],
};

const CardAddPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SuccessMessage = styled.h1`
  font-size: 18px;
  text-align: center;
  margin: 80px auto;
`;

export default function CardAddPage({ setPage }) {
  const [cardInfo, setCardInfo] = useState(initialCardInfoState);

  const [isValidCardInfo, setValidCardInfo] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState<number | null>(null);

  const [formDataArray, saveFormData] = useLocalStorage("card-info");

  const isCompleteCardNumber =
    cardInfo.cardNumber.join("").length ===
    NUMBER_UNIT_COUNT * NUMBER_UNIT_LENGTH;

  const isCompleteExpireDate =
    cardInfo.expireDate.join("").length === EXPIRE_DATE_LENGTH;

  const isCompleteSecurityCode =
    cardInfo.securityCodeLength === SECURITY_CODE_LENGTH;

  const isCompletePassword =
    cardInfo.passwordLength[0] + cardInfo.passwordLength[1] === PASSWORD_LENGTH;

  const isCompleteCardInfo =
    isCompleteCardNumber &&
    isCompleteExpireDate &&
    isCompleteSecurityCode &&
    isCompletePassword;

  const handleFormSubmit = (formData: CardInfoStateTypeInterface) => {
    try {
      setCurrentCardIndex(formDataArray.length);
      saveFormData([...formDataArray, formData]);
      alert(CARD_REGISTER_SUCCESS_MESSAGE);
      setSubmitted(true);
    } catch {
      alert(CARD_REGISTER_FAIL_MESSAGE);
    }
  };

  const moveToListPage = () => setPage(PAGE_NAME.CARD_LIST);

  const handleAddNickname = ({ nickname }: { nickname: string }) => {
    const currentCardInfo = formDataArray[currentCardIndex];
    currentCardInfo.nickname = nickname;

    const newFormData = [...formDataArray.slice(0, -1), currentCardInfo];

    try {
      saveFormData(newFormData);
      alert(NICKNAME_REGISTER_SUCCESS_MESSAGE);
      moveToListPage();
    } catch {
      alert(NICKNAME_REGISTER_FAIL_MESSAGE);
    }
  };

  const setFormValidity = (formElements: HTMLInputElement[]) => {
    setValidCardInfo(
      isCompleteCardInfo &&
        formElements.every((element) => element.validity.valid)
    );
  };

  const CardPreviewElement = (
    <CardPreview
      cardInfo={cardInfo}
      isValidCardInfo={isValidCardInfo}
      isSubmitted={isSubmitted}
    />
  );

  return (
    <CardInfoContext.Provider
      value={{ state: cardInfo, setState: setCardInfo }}
    >
      <CardAddPageContainer>
        <PageHeader
          isSubmitted={isSubmitted}
          page={PAGE_NAME.CARD_ADD}
          moveToListPage={moveToListPage}
        />
        {!isSubmitted ? (
          <>
            {CardPreviewElement}
            <CardInfoForm
              handleFormSubmit={handleFormSubmit}
              isCompleteCardInfo={isCompleteCardInfo}
              isValidCardInfo={isValidCardInfo}
              setFormValidity={setFormValidity}
            />
          </>
        ) : (
          <>
            <SuccessMessage>카드 등록이 완료되었습니다.</SuccessMessage>
            {CardPreviewElement}
            <CardNicknameForm handleAddNickname={handleAddNickname} />
          </>
        )}
      </CardAddPageContainer>
    </CardInfoContext.Provider>
  );
}
