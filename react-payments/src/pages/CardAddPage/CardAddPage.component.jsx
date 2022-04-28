import Card from "../../component/Card/card.component";
import Form from "../../component/Form/form.component";
import Header from "../../component/Header/Header.component";
import LinkButton from "../../component/LinkButton/linkButton.component";
import useCardNumber from "../../hooks/useCardNumber";
import useCardPassword from "../../hooks/useCardPassword";
import useExpireDate from "../../hooks/useExpireDate";
import useReady from "../../hooks/useReady";
import useSecurityCode from "../../hooks/useSecurityCode";
import useUserName from "../../hooks/useUserName";
import "./CardAddPage.css";

const CardAddPage = () => {
  const [cardNumber, onChange] = useCardNumber();
  const [expireDate, onChangeExpireDate] = useExpireDate();
  const [userName, onChangeUserName] = useUserName();
  const [securityCode, onChangeSecurityCode] = useSecurityCode();
  const [cardPassword, onChangeCardPassword] = useCardPassword();
  const [ready, checkReady] = useReady(
    cardNumber,
    expireDate,
    securityCode,
    cardPassword
  );

  checkReady();

  return (
    <div className="card-add-page">
      <Header title="카드 추가" linkLabel="<" linkClass="back-link" />
      <Card
        cardNumbers={cardNumber}
        name={userName}
        month={expireDate[0]}
        year={expireDate[1]}
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
        onChange={onChange}
      />
      <Form
        required={true}
        inputInfo={[
          {
            type: "number",
            placeholder: "MM",
            name: "first",
            value: expireDate[0],
          },
          {
            type: "number",
            placeholder: "YY",
            name: "second",
            value: expireDate[1],
          },
        ]}
        connector="/"
        inputClass="expire-date-input"
        label="만료일"
        formType="expire-date"
        onChange={onChangeExpireDate}
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
        onChange={onChangeSecurityCode}
      />
      <Form
        required={true}
        inputClass="card-password-input"
        label="카드 비밀번호"
        formType="card-password"
        onChange={onChangeCardPassword}
        value={cardPassword}
      />
      {ready && <LinkButton linkLabel="다음" linkClass="next-link" />}
    </div>
  );
};

export default CardAddPage;
