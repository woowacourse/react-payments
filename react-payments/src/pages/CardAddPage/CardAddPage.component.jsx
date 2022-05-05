import { useContext, useReducer } from "react";
import Card from "../../component/common/Card/card.component";
import CardTypeSelector from "../../component/CardTypeSelector/CardTypeSelector";
import Header from "../../component/common/Header/Header.component";
import LinkButton from "../../component/common/LinkButton/linkButton.component";
import Modal from "../../component/common/Modal/modal.component";
import PageTitle from "../../component/common/PageTitle/pageTitle.component";
import { CardNumberContext } from "../../provider/CardNumberProvider";
import { ExpireDateContext } from "../../provider/ExpireDateProvider";
import { UserNameContext } from "../../provider/UserNameProvider";
import { SecurityCodeContext } from "../../provider/SecurityCodeProvider";
import { CardPasswordContext } from "../../provider/CardPasswordProvider";
import CardNumberContainer from "../../component/CardNumberContainer/CardNumberContainer.component";
import ExpireDateContainer from "../../component/ExpireDateContainer/ExpireDateContainer.component";
import UserNameContainer from "../../component/UserNameContainer/UserNameContainer.component";
import SecurityCodeContainer from "../../component/SecurityCodeContainer/SecurityCodeContainer.component";
import CardPasswordContainer from "../../component/CardPasswordContainer/CardPasswordContainer.component";
import useReady from "../../hooks/useReady";
import { isAllInputReady } from "../../util/validator";
import { CardTypeContext } from "../../provider/CardTypeProvider";
import PageContainer from "../../component/common/PageContainer/PageContainer.component";

const CardAddPage = () => {
  const {
    state: { cardTypeInfo, cardTypeReady },
  } = useContext(CardTypeContext);
  const {
    state: { cardNumber, cardNumberReady },
  } = useContext(CardNumberContext);
  const {
    state: { expireDate, expireDateReady },
  } = useContext(ExpireDateContext);
  const {
    state: { userName },
  } = useContext(UserNameContext);
  const {
    state: { securityCodeReady },
  } = useContext(SecurityCodeContext);
  const {
    state: { cardPasswordReady },
  } = useContext(CardPasswordContext);
  const [allFormReady] = useReady(
    {
      cardNumberReady,
      expireDateReady,
      securityCodeReady,
      cardPasswordReady,
      cardTypeReady,
    },
    isAllInputReady
  );

  const [isShowModal, toggleShowModal] = useReducer(
    (isShowModal) => !isShowModal,
    false
  );

  return (
    <PageContainer>
      <Header>
        <LinkButton>{"<"}</LinkButton>
        <PageTitle type="header">카드 추가</PageTitle>
      </Header>

      <Card
        cardNumber={cardNumber}
        userName={userName}
        month={expireDate.month}
        year={expireDate.year}
        cardTypeInfo={cardTypeInfo}
        toggleModal={toggleShowModal}
      />
      <CardNumberContainer />
      <ExpireDateContainer />
      <UserNameContainer />
      <SecurityCodeContainer />
      <CardPasswordContainer />

      {allFormReady && (
        <LinkButton type="submit" path="/register">
          다음
        </LinkButton>
      )}
      {isShowModal && (
        <Modal toggleModal={toggleShowModal}>
          <CardTypeSelector />
        </Modal>
      )}
    </PageContainer>
  );
};

export default CardAddPage;
