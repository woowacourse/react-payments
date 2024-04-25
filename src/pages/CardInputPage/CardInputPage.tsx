import styles from "./CardInputPage.module.css";
import Form from "../../components/common/Form/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShelfSection from "../../components/common/ShelfSection/ShelfSection";
import Card from "../../components/Card/Card";
import { CARD_NUMBER_UNIT_LENGTH } from "../../constants";
import SubmitButton from "../../components/\bButton/SubmitButton";
import CardNumbersInputField from "../../components/Field/CardNumbersInputField/CardNumbersInputField";
import CardExpirationDateInputField from "../../components/Field/CardExpirationDateInputField/CardExpirationDateInputField";
import CardOwnerNameInputField from "../../components/Field/CardOwnerNameInputField/CardOwnerNameInputField";
import CardCompanySelectField from "../../components/Field/CardCompanySelectField/CardCompanySelectField";

function CardInputPage() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(() =>
    new Array(CARD_NUMBER_UNIT_LENGTH).fill("")
  );

  const [cardCompanyName, setCardCompanyName] = useState<string>("");

  const [date, setDate] = useState<Record<string, string>>({
    month: "",
    year: "",
  });
  const [ownerName, setOwnerName] = useState<string>("");

  const [isCompletedSections, setIsCompletedSections] = useState<boolean[]>(
    () => new Array(5).fill(false)
  );

  const navigate = useNavigate();

  const handleCardAdded = () => {
    navigate("/card-added", {
      state: {
        firstFourCardNumber: cardNumbers[0],
      },
    });
  };

  return (
    <main className={styles.background}>
      <section className={styles.layout}>
        <Card
          cardNumbers={cardNumbers}
          cardCompanyName={cardCompanyName}
          date={date}
          ownerName={ownerName}
        />
        <Form>
          <ShelfSection title="카드 소유자 이름을 입력해주세요">
            <CardOwnerNameInputField
              ownerName={ownerName}
              setOwnerName={setOwnerName}
            />
          </ShelfSection>

          <ShelfSection
            title="카드 유효기간을 입력해 주세요"
            description="월/년도(MMYY)를 순서대로 입력해 주세요."
          >
            <CardExpirationDateInputField date={date} setDate={setDate} />
          </ShelfSection>

          <ShelfSection
            title="카드사를 선택해 주세요"
            description="현재 국내 카드사만 가능합니다."
          >
            <CardCompanySelectField
              cardCompanyName={cardCompanyName}
              setCardCompanyName={setCardCompanyName}
            ></CardCompanySelectField>
          </ShelfSection>

          <ShelfSection
            title="결제할 카드 번호를 입력해 주세요"
            description="본인 명의의 카드만 결제 가능합니다."
          >
            <CardNumbersInputField
              cardNumbers={cardNumbers}
              setCardNumbers={setCardNumbers}
              isCompletedSections={isCompletedSections}
              setIsCompletedSections={setIsCompletedSections}
            />
          </ShelfSection>
        </Form>
        <SubmitButton
          isCompletedSections={isCompletedSections}
          onClick={handleCardAdded}
        ></SubmitButton>
      </section>
    </main>
  );
}

export default CardInputPage;
