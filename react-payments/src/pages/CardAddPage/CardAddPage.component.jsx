import { useReducer } from "react";
import Card from "../../component/Card/card.component";
import CardTypeSelector from "../../component/CardTypeSelector/CardTypeSelector";
import Form from "../../component/Form/form.component";
import Header from "../../component/Header/Header.component";
import LinkButton from "../../component/LinkButton/linkButton.component";
import Modal from "../../component/Modal/modal.component";
import PageTitle from "../../component/PageTitle/pageTitle.component";
import useCardNumber from "../../hooks/useCardNumber";
import useCardPassword from "../../hooks/useCardPassword";
import useCardTypeInfo from "../../hooks/useCardTypeInfo";
import useExpireDate from "../../hooks/useExpireDate";
import useAllFormReady from "../../hooks/useReady";
import useSecurityCode from "../../hooks/useSecurityCode";
import useUserName from "../../hooks/useUserName";

import "./CardAddPage.css";

const CardAddPage = () => {
  const {
    cardNumber,
    onChangeCardNumber,
    onKeyDownCardNumber,
    cardNumberReady,
  } = useCardNumber();
  const { expireDate, onChangeExpireDate, expireDateReady } = useExpireDate();
  const { userName, onChangeUserName } = useUserName();
  const {
    securityCode,
    onClickSecurityVirtualKeyboard,
    onClickSecurityBackspaceButton,
    onChangeSecurityCode,
    securityCodeReady,
  } = useSecurityCode();
  const {
    cardPassword,
    onClickCardPasswordBackspaceButton,
    onClickCardPasswordVirtualKeyboard,
    onChangeCardPassword,
    cardPasswordReady,
  } = useCardPassword();
  const { cardTypeInfo, onClickCardType } = useCardTypeInfo();
  const { allFormReady } = useAllFormReady({
    cardNumberReady,
    expireDateReady,
    securityCodeReady,
    cardPasswordReady,
    cardType: cardTypeInfo.cardType,
  });
  const [isShowModal, toggleShowModal] = useReducer(
    (isShowModal) => !isShowModal,
    false
  );

  return (
    <div className="card-add-page">
      <Header>
        <LinkButton linkClass="back-link">{"<"}</LinkButton>
        <PageTitle>카드 추가</PageTitle>
      </Header>

      <Card
        cardNumbers={cardNumber}
        name={userName}
        month={expireDate.month}
        year={expireDate.year}
        cardTypeInfo={cardTypeInfo}
        toggleModal={toggleShowModal}
      />
      <Form
        required={true}
        inputInfo={[
          { type: "number", name: "first", value: cardNumber[0] },
          { type: "number", name: "second", value: cardNumber[1] },
          { type: "password", name: "third", value: cardNumber[2] },
          { type: "password", name: "fourth", value: cardNumber[3] },
        ]}
        connector="-"
        inputClass="default-input"
        label="카드 번호"
        formType="card-number"
        onChange={onChangeCardNumber}
        onKeyDown={onKeyDownCardNumber}
        ready={cardNumberReady}
      />
      <Form
        required={true}
        inputInfo={[
          {
            type: "number",
            placeholder: "MM",
            name: "month",
            value: expireDate.month,
          },
          {
            type: "number",
            placeholder: "YY",
            name: "year",
            value: expireDate.year,
          },
        ]}
        connector="/"
        inputClass="expire-date-input"
        label="만료일"
        formType="expire-date"
        onChange={onChangeExpireDate}
        ready={expireDateReady}
      />
      <Form
        required={false}
        inputInfo={[
          {
            type: "text",
            placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
            value: userName,
          },
        ]}
        inputClass="default-input"
        label="카드 소유자 이름 (선택)"
        formType="card-user"
        onChange={onChangeUserName}
      />
      <Form
        required={true}
        inputInfo={[{ type: "password", value: securityCode }]}
        inputClass="security-code-input"
        label="보안 코드(CVC/CVV)"
        formType="security-code"
        onChangeSecurityCode={onChangeSecurityCode}
        onClickVirtualKeyboard={onClickSecurityVirtualKeyboard}
        onClickBackspaceButton={onClickSecurityBackspaceButton}
        ready={securityCodeReady}
      />
      <Form
        required={true}
        inputClass="card-password-input"
        label="카드 비밀번호"
        formType="card-password"
        value={cardPassword}
        onChangeCardPassword={onChangeCardPassword}
        onClickVirtualKeyboard={onClickCardPasswordVirtualKeyboard}
        onClickBackspaceButton={onClickCardPasswordBackspaceButton}
        ready={cardPasswordReady}
      />
      {allFormReady && <LinkButton linkClass="next-link">다음</LinkButton>}
      {isShowModal && (
        <Modal toggleModal={toggleShowModal}>
          <CardTypeSelector
            onClickCardType={onClickCardType}
            currentCardType={cardTypeInfo.cardType}
          />
        </Modal>
      )}
    </div>
  );
};

export default CardAddPage;
