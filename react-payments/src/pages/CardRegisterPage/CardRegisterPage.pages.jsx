import { useContext, useState } from "react";
import styled from "styled-components";
import CardNameInput from "../../component/CardNameInput/CardNameInput.component";
import Card from "../../component/common/Card/card.component";
import LinkButton from "../../component/common/LinkButton/linkButton.component";
import MessageBox from "../../component/common/MessageBox/messageBox.component";
import PageContainer from "../../component/common/PageContainer/PageContainer.component";
import PageTitle from "../../component/common/PageTitle/pageTitle.component";
import { ERROR_MESSAGE, REDUCER_TYPE, SUCCESS_MESSAGE } from "../../constants";
import useReady from "../../hooks/useReady";
import { CardDataContext } from "../../provider/CardDataProvider";
import { CardNumberContext } from "../../provider/CardNumberProvider";
import { CardPasswordContext } from "../../provider/CardPasswordProvider";
import { CardTypeContext } from "../../provider/CardTypeProvider";
import { ExpireDateContext } from "../../provider/ExpireDateProvider";
import { SecurityCodeContext } from "../../provider/SecurityCodeProvider";
import { UserNameContext } from "../../provider/UserNameProvider";
import { isDuplicatedCardName, isInvalidCardName } from "../../util/validator";

const CardRegisterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin: auto;
`;

const CardRegisterPage = () => {
  const { cardData } = useContext(CardDataContext);
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
    state: { cardTypeInfo },
    action: { resetCardTypeInfo },
  } = useContext(CardTypeContext);
  const {
    action: { resetSecurityCode },
  } = useContext(SecurityCodeContext);
  const {
    action: { resetCardPassword },
  } = useContext(CardPasswordContext);

  const [cardName, setCardName] = useState("");
  const [cardNameLengthReady] = useReady(cardName, isInvalidCardName);
  const [uniqueCardNameReady] = useReady(
    cardName,
    isDuplicatedCardName,
    cardData
  );
  const { dispatch } = useContext(CardDataContext);

  const handleSubmitCardData = () => {
    resetCardNumber();
    resetCardPassword();
    resetCardTypeInfo();
    resetExpireDate();
    resetUserName();
    resetSecurityCode();

    dispatch({
      type: REDUCER_TYPE.CREATE,
      payload: {
        cardNumber,
        month: expireDate.month,
        year: expireDate.year,
        userName,
        cardTypeInfo,
        cardName,
      },
    });
  };

  const onChangeCardName = (e) => {
    setCardName(e.target.value);
  };

  return (
    <PageContainer>
      <CardRegisterGroup>
        <PageTitle>카드 등록이 완료되었습니다.</PageTitle>
        <Card
          size="big"
          cardNumber={cardNumber}
          cardTypeInfo={cardTypeInfo}
          month={expireDate.month}
          year={expireDate.year}
          userName={userName}
        />
        <CardNameInput
          value={cardName}
          onChange={onChangeCardName}
          ready={cardNameLengthReady && uniqueCardNameReady}
        />
        {!cardNameLengthReady && (
          <MessageBox type="error">
            {ERROR_MESSAGE["card-name-length"]}
          </MessageBox>
        )}
        {!uniqueCardNameReady && (
          <MessageBox type="error">
            {ERROR_MESSAGE["unique-card-name"]}
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
