import { useContext, useState } from "react";
import styled from "styled-components";
import CardNameInput from "../../component/CardNameInput/CardNameInput.component";
import Card from "../../component/common/Card/card.component";
import LinkButton from "../../component/common/LinkButton/linkButton.component";
import PageContainer from "../../component/common/PageContainer/PageContainer.component";
import PageTitle from "../../component/common/PageTitle/pageTitle.component";
import { CardDataContext } from "../../provider/CardDataProvider";
import { CardNumberContext } from "../../provider/CardNumberProvider";
import { CardTypeContext } from "../../provider/CardTypeProvider";
import { ExpireDateContext } from "../../provider/ExpireDateProvider";
import { UserNameContext } from "../../provider/UserNameProvider";

const CardRegisterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin: auto;
`;

const CardRegisterPage = () => {
  const {
    state: { cardNumber },
  } = useContext(CardNumberContext);
  const {
    state: { expireDate },
  } = useContext(ExpireDateContext);
  const {
    state: { userName },
  } = useContext(UserNameContext);
  const {
    state: { cardTypeInfo },
  } = useContext(CardTypeContext);
  const [cardName, setCardName] = useState("");
  const { dispatch } = useContext(CardDataContext);

  const handleSubmitCardData = () => {
    dispatch({
      type: "CREATE",
      payload: {
        cardNumber,
        expireDate,
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
          name={userName}
        />
        <CardNameInput value={cardName} onChange={onChangeCardName} />
      </CardRegisterGroup>
      <LinkButton type="submit" onClick={handleSubmitCardData}>
        확인
      </LinkButton>
    </PageContainer>
  );
};

export default CardRegisterPage;
