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
import { CardTypeContext } from "../../provider/CardTypeProvider";
import { ExpireDateContext } from "../../provider/ExpireDateProvider";
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
  } = useContext(CardTypeContext);
  const {
    state: { cardNumber },
  } = useContext(CardNumberContext);
  const {
    state: { expireDate },
  } = useContext(ExpireDateContext);
  const {
    state: { userName },
  } = useContext(UserNameContext);
  const { dispatch } = useContext(CardDataContext);

  const onChangeCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleSubmitCardData = () => {
    dispatch({
      type: "CREATE",
      payload: { cardNumber, userName, expireDate, cardTypeInfo, cardName },
    });
  };

  return (
    <PageContainer type="register">
      <CardRegisterGroup>
        <PageTitle>카드등록이 완료되었습니다.</PageTitle>
        <Card
          size="big"
          cardNumbers={cardNumber}
          name={userName}
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
