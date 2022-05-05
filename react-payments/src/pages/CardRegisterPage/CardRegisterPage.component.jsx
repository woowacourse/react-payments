import { useContext, useState } from "react";
import styled from "styled-components";
import CardNameInput from "../../component/CardNameInput/CardNameInput.component";
import Card from "../../component/common/Card/card.component";
import LinkButton from "../../component/common/LinkButton/linkButton.component";
import MessageBox from "../../component/common/MessageBox/messageBox.component";
import PageContainer from "../../component/common/PageContainer/PageContainer.component";
import PageTitle from "../../component/common/PageTitle/pageTitle.component";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../../constants";
import useReady from "../../hooks/useReady";
import { CardDataContext } from "../../provider/CardDataProvider";
import { CardNumberContext } from "../../provider/CardNumberProvider";
import { CardPasswordContext } from "../../provider/CardPasswordProvider";
import { CardTypeContext } from "../../provider/CardTypeProvider";
import { ExpireDateContext } from "../../provider/ExpireDateProvider";
import { SecurityCodeContext } from "../../provider/SecurityCodeProvider";
import { UserNameContext } from "../../provider/UserNameProvider";
import { isInValidCardName } from "../../util/validator";

const CardRegisterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: auto;
`;

const CardRegisterPage = () => {
  const [cardName, setCardName] = useState("");
  const [cardNameReady] = useReady(cardName, isInValidCardName);
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

  const onChangeCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleSubmitCardData = () => {
    dispatch({
      type: "CREATE",
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
          ready={cardNameReady}
        />
        {cardNameReady ? (
          <MessageBox type="success">{SUCCESS_MESSAGE}</MessageBox>
        ) : (
          <MessageBox type="error">{ERROR_MESSAGE["card-name"]}</MessageBox>
        )}
      </CardRegisterGroup>
      {cardNameReady && (
        <LinkButton type="submit" onClick={handleSubmitCardData}>
          확인
        </LinkButton>
      )}
    </PageContainer>
  );
};

export default CardRegisterPage;
