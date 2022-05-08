import { useContext, useReducer } from "react";
import Card from "../../component/common/Card/Card.component";
import CardTypeSelector from "../../component/CardTypeSelector/CardTypeSelector";
import Header from "../../component/common/Header/Header.component";
import LinkButton from "../../component/common/LinkButton/LinkButton.component";
import Modal from "../../component/common/Modal/Modal.component";
import PageTitle from "../../component/common/PageTitle/PageTitle.component";
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
    action: { resetCardTypeInfo },
  } = useContext(CardTypeContext);
  const {
    state: { cardNumber, cardNumberReady },
    action: { resetCardNumber },
  } = useContext(CardNumberContext);
  const {
    state: { expireDate, expireDateReady },
    action: { resetExpireDate },
  } = useContext(ExpireDateContext);
  const {
    state: { userName },
    action: { resetUserName },
  } = useContext(UserNameContext);
  const {
    state: { securityCodeReady },
    action: { resetSecurityCode },
  } = useContext(SecurityCodeContext);
  const {
    state: { cardPasswordReady },
    action: { resetCardPassword },
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

  const onClickResetData = () => {
    resetCardTypeInfo();
    resetCardNumber();
    resetExpireDate();
    resetUserName();
    resetSecurityCode();
    resetCardPassword();
  };

  return (
    <PageContainer>
      <Header>
        <LinkButton path="/" onClick={onClickResetData}>
          {"<"}
        </LinkButton>
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
