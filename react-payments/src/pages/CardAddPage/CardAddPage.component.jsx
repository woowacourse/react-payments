import Card from "../../component/Card/card.component";
import Form from "../../component/Form/form.component";
import Header from "../../component/Header/Header.component";
import "./CardAddPage.css";

const CardAddPage = () => {
  return (
    <div className="card-add-page">
      <Header title="카드 추가" linkLabel="<" linkClass="back-link" />
      <Card
        cardNumbers={["1111", "2345", "3456", "4567"]}
        name="SMING"
        month="09"
        year="99"
      />
      <Form
        required={true}
        inputInfo={[
          { type: "number" },
          { type: "number" },
          { type: "password" },
          { type: "password" },
        ]}
        connector="-"
        inputClass="default-input"
        label="카드 번호"
        name="card-number"
      />
      <Form
        required={true}
        inputInfo={[
          { type: "number", placeholder: "MM" },
          { type: "number", placeholder: "YY" },
        ]}
        connector="/"
        inputClass="expire-date-input"
        label="만료일"
        name="expire-date"
      />
      <Form
        required={false}
        inputInfo={[
          {
            type: "text",
            placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
          },
        ]}
        inputClass="default-input"
        label="카드 소유자 이름 (선택)"
        name="card-user"
      />
      <Form
        required={true}
        inputInfo={[{ type: "password" }]}
        inputClass="security-code-input"
        label="보안 코드(CVC/CVV)"
        name="security-code"
      />
      <Form
        required={true}
        inputInfo={[{ type: "password" }]}
        inputClass="card-password-input"
        label="카드 비밀번호"
        name="card-password"
      />
    </div>
  );
};

export default CardAddPage;
