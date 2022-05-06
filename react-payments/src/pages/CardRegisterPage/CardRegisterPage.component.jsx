import { useContext, useState } from "react";
import styled from "styled-components";
import CardNameInput from "../../component/CardNameInput/CardNameInput.component";
import Card from "../../component/common/Card/Card.component";
import LinkButton from "../../component/common/LinkButton/LinkButton.component";
import MessageBox from "../../component/common/MessageBox/MessageBox.component";
import PageContainer from "../../component/common/PageContainer/PageContainer.component";
import PageTitle from "../../component/common/PageTitle/PageTitle.component";
import { ERROR_MESSAGE, REDUCER_TYPE, SUCCESS_MESSAGE } from "../../constants";
import useReady from "../../hooks/useReady";
import { CardDataContext } from "../../provider/CardDataProvider";
import { CardNumberContext } from "../../provider/CardNumberProvider";
import { CardPasswordContext } from "../../provider/CardPasswordProvider";
import { CardTypeContext } from "../../provider/CardTypeProvider";
import { ExpireDateContext } from "../../provider/ExpireDateProvider";
import { SecurityCodeContext } from "../../provider/SecurityCodeProvider";
import { UserNameContext } from "../../provider/UserNameProvider";
import { isDuplicatedCardName, isInValidCardName } from "../../util/validator";

const CardRegisterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: auto;
`;

const CardRegisterPage = () => {
  const { cardData } = useContext(CardDataContext);
  const {
    state: { cardTypeInfo },
    action: { resetCardTypeInfo },
  } = useContext(CardTypeContext);
  const {
    state: { cardNumber },
    action: { resetCardNumber },
  } = useContext(CardNumberContext);
  const {
    state: { expireDate },
    action: { resetExpireDate },
  } = useContext(ExpireDateContext);
  const {
    state: { userName },
    action: { resetUserName },
  } = useContext(UserNameContext);
  const {
    action: { resetSecurityCode },
  } = useContext(SecurityCodeContext);
  const {
    action: { resetCardPassword },
  } = useContext(CardPasswordContext);
  const { dispatch } = useContext(CardDataContext);

  const [cardName, setCardName] = useState("");
  const [cardNameLengthReady] = useReady(cardName, isInValidCardName);
  const [uniqueCardNameReady] = useReady(
    cardName,
    isDuplicatedCardName,
    cardData
  );

  const onChangeCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleSubmitCardData = () => {
    dispatch({
      type: REDUCER_TYPE.CREATE,
      payload: {
        cardNumber,
        userName,
        month: expireDate.month,
        year: expireDate.year,
        cardTypeInfo,
        cardName,
      },
    });

    resetCardTypeInfo();
    resetCardNumber();
    resetExpireDate();
    resetUserName();
    resetSecurityCode();
    resetCardPassword();
  };

  return (
    <PageContainer type="register">
      <CardRegisterGroup>
        <PageTitle>카드등록이 완료되었습니다.</PageTitle>
        <Card
          size="big"
          cardNumber={cardNumber}
          userName={userName}
          month={expireDate.month}
          year={expireDate.year}
          cardTypeInfo={cardTypeInfo}
        />
        <CardNameInput
          value={cardName}
          onChange={onChangeCardName}
          ready={cardNameLengthReady && uniqueCardNameReady}
        />
        {!cardNameLengthReady && (
          <MessageBox type="error">{ERROR_MESSAGE.CARD_NAME_LENGTH}</MessageBox>
        )}
        {!uniqueCardNameReady && (
          <MessageBox type="error">
            {ERROR_MESSAGE.DUPLICATE_CARD_NAME}
          </MessageBox>
        )}
        {cardNameLengthReady && uniqueCardNameReady && (
          <MessageBox type="success">{SUCCESS_MESSAGE}</MessageBox>
        )}
      </CardRegisterGroup>
      {cardNameLengthReady && uniqueCardNameReady && (
        <LinkButton type="submit" onClick={handleSubmitCardData}>
          확인
        </LinkButton>
      )}
    </PageContainer>
  );
};

export default CardRegisterPage;
