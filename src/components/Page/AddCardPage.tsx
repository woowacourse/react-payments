import { useState } from "react";
import Card from "../Card";
import CardNumberInput from "../Input/CardNumberInput";
import CvcInput from "../Input/CvcInput";
import ExpiracyInput from "../Input/ExpiracyInput";
import InformationButton from "../Button/InformationButton";
import InputField from "../common/InputField";
import NextButton from "../Button/NextButton";
import OwnerInput from "../Input/OwnerInput";
import PasswordInput from "../Input/PasswordInput";
import PrevButton from "../Button/PrevButton";
import ToolTip from "../ToolTip";
import {
  CardWrapper,
  CvcButtonWrapper,
  CvcWrapper,
  InputWrapper,
  InputWrapperParent,
  NextButtonWrapper,
  Page,
  Title,
  TitleWrapper,
} from "./AddCardPage.styles";
import { useCardForm } from "../../hooks/useCardForm";
import CardTypeDrawer from "../CardTypeDrawer";
import { CARD_COMPANYS } from "../../constant";

interface AddCardPageProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClick: () => void;
}

export default function AddCardPage({ onSubmit, onClick }: AddCardPageProps) {
  const {
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
    year,
    month,
    owner,
    cvc,
    firstPassword,
    secondPassword,
    formRef,
    isFormFilled,
  } = useCardForm();

  const [isOpenToolTip, setIsOpenToolTip] = useState(false);

  const handleToolTip = () => {
    setIsOpenToolTip((prev) => !prev);
  };

  return (
    <>
      <Page>
        <TitleWrapper>
          <PrevButton onClick={onClick} />
          <Title>카드 추가</Title>
        </TitleWrapper>
        <CardWrapper>
          <Card
            cardColor={CARD_COMPANYS["BC"].backgroundColor}
            cardTitle={CARD_COMPANYS["BC"].title}
            cardNumberSet={[
              firstCardNumber.value,
              secondCardNumber.value,
              thirdCardNumber.value,
              fourthCardNumber.value,
            ]}
            expiracy={`${month.value ? month.value : "MM"}/${
              year.value ? year.value : "YY"
            }`}
            owner={owner.value.toUpperCase()}
          />
        </CardWrapper>
        <InputWrapperParent onSubmit={onSubmit} ref={formRef}>
          <InputWrapper>
            <InputField kind="cardNumber">
              <CardNumberInput
                firstNumber={firstCardNumber}
                secondNumber={secondCardNumber}
                thirdNumber={thirdCardNumber}
                fourthNumber={fourthCardNumber}
              />
            </InputField>
            <InputField kind="expiracy">
              <ExpiracyInput year={year} month={month} />
            </InputField>
            <InputField kind="owner" inputLength={`${owner.value.length}/30`}>
              <OwnerInput owner={owner} />
            </InputField>
            <InputField kind="cvc">
              <CvcWrapper>
                <CvcInput cvc={cvc} />
                <CvcButtonWrapper>
                  <InformationButton onClick={handleToolTip} />
                  {isOpenToolTip && (
                    <ToolTip
                      text={
                        "CVC번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다"
                      }
                    />
                  )}
                </CvcButtonWrapper>
              </CvcWrapper>
            </InputField>
            <InputField kind="password">
              <PasswordInput
                firstPassword={firstPassword}
                secondPassword={secondPassword}
              />
            </InputField>
          </InputWrapper>
          <NextButtonWrapper>
            <NextButton disabled={isFormFilled} />
          </NextButtonWrapper>
        </InputWrapperParent>
        <CardTypeDrawer />
      </Page>
    </>
  );
}
