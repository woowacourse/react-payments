import styles from "./CardInputPage.module.css";
import Form from "../../components/common/Form/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShelfSection from "../../components/common/ShelfSection/ShelfSection";
import Card from "../../components/Card/Card";
import { CARD_NUMBER_UNIT_LENGTH } from "../../constants";
import SubmitButton from "../../components/Button/SubmitButton";
import CardNumbersInputField from "../../components/Field/CardNumbersInputField/CardNumbersInputField";
import CardExpirationDateInputField from "../../components/Field/CardExpirationDateInputField/CardExpirationDateInputField";
import CardOwnerNameInputField from "../../components/Field/CardOwnerNameInputField/CardOwnerNameInputField";
import CardCompanySelectField from "../../components/Field/CardCompanySelectField/CardCompanySelectField";
import CardCVCInputField from "../../components/Field/CardCVCInputField/CardCVCInputField";
import CardPasswordInput from "../../components/Field/CardPasswordInput/CardPasswordInput";

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

  const [cardCVC, setCardCVC] = useState<string>("");

  const [cardPassword, setCardPassword] = useState<string>("");

  const [isOpenForm, setIsOpenForm] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [isCompletedSections, setIsCompletedSections] = useState<boolean[]>(
    () => new Array(5).fill(false)
  );

  const navigate = useNavigate();

  const handleCardAdded = () => {
    navigate("/card-added", {
      state: {
        firstFourCardNumber: cardNumbers[0],
        cardCompanyName: cardCompanyName,
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
          {isOpenForm[5] && (
            <ShelfSection
              title="비밀번호를 입력해 주세요"
              description="앞의 두자리를 입력해주세요."
            >
              <CardPasswordInput
                cardPassword={cardPassword}
                setCardPassword={setCardPassword}
                isCompletedSections={isCompletedSections}
                setIsCompletedSections={setIsCompletedSections}
              ></CardPasswordInput>
            </ShelfSection>
          )}

          {isOpenForm[4] && (
            <ShelfSection title="CVC 번호를 입력해 주세요">
              <CardCVCInputField
                cardCVC={cardCVC}
                setCardCVC={setCardCVC}
                isCompletedSections={isCompletedSections}
                setIsCompletedSections={setIsCompletedSections}
                isOpenForm={isOpenForm}
                setIsOpenForm={setIsOpenForm}
              ></CardCVCInputField>
            </ShelfSection>
          )}

          {isOpenForm[3] && (
            <ShelfSection
              title="카드 소유자 이름을 입력해주세요"
              description="엔터를 눌러 입력을 완료할 수 있습니다."
            >
              <CardOwnerNameInputField
                ownerName={ownerName}
                setOwnerName={setOwnerName}
                isCompletedSections={isCompletedSections}
                setIsCompletedSections={setIsCompletedSections}
                isOpenForm={isOpenForm}
                setIsOpenForm={setIsOpenForm}
              />
            </ShelfSection>
          )}

          {isOpenForm[2] && (
            <ShelfSection
              title="카드 유효기간을 입력해 주세요"
              description="월/년도(MMYY)를 순서대로 입력해 주세요."
            >
              <CardExpirationDateInputField
                date={date}
                setDate={setDate}
                isCompletedSections={isCompletedSections}
                setIsCompletedSections={setIsCompletedSections}
                isOpenForm={isOpenForm}
                setIsOpenForm={setIsOpenForm}
              />
            </ShelfSection>
          )}

          {isOpenForm[1] && (
            <ShelfSection
              title="카드사를 선택해 주세요"
              description="현재 국내 카드사만 가능합니다."
            >
              <CardCompanySelectField
                cardCompanyName={cardCompanyName}
                setCardCompanyName={setCardCompanyName}
                isCompletedSections={isCompletedSections}
                setIsCompletedSections={setIsCompletedSections}
                isOpenForm={isOpenForm}
                setIsOpenForm={setIsOpenForm}
              ></CardCompanySelectField>
            </ShelfSection>
          )}

          {isOpenForm[0] && (
            <ShelfSection
              title="결제할 카드 번호를 입력해 주세요"
              description="본인 명의의 카드만 결제 가능합니다."
            >
              <CardNumbersInputField
                cardNumbers={cardNumbers}
                setCardNumbers={setCardNumbers}
                isCompletedSections={isCompletedSections}
                setIsCompletedSections={setIsCompletedSections}
                isOpenForm={isOpenForm}
                setIsOpenForm={setIsOpenForm}
              />
            </ShelfSection>
          )}
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
