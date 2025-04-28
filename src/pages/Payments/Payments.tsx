import { INPUT_TYPE, MAGIC_NUMBER } from "../../constants/constants";
import { useInputError } from "../../hooks/useInputError";
import Preview from "../../components/Preview/Preview";
import { PaymentsCSS } from "./Payments.styled";
import { useVisibleSteps } from "../../hooks/useVisibleSteps";
import { useMemo } from "react";
import Button from "../../components/Button/Button";
import { useCard } from "../../hooks/useCard";
import { useNavigate } from "react-router-dom";
import InputSection from "../../components/\bInputSection/InputSection";

function Payments() {
  const { error, validators } = useInputError();
  const { cardNumbers, cardBrand, expirationPeriod, cvcNumber, password } =
    useCard();
  const visible = useVisibleSteps({
    cardNumbers,
    cardBrand,
    expirationPeriod,
    cvcNumber,
    password,
  });
  const navigate = useNavigate();

  const isButtonShowing = useMemo(() => {
    const isAllComplete =
      Object.values(cardNumbers).every(
        (num) => num.length === MAGIC_NUMBER.maxLength.cardNumber
      ) &&
      cardBrand !== "" &&
      Object.values(expirationPeriod).every(
        (val) => val.length === MAGIC_NUMBER.maxLength.expirationPeriod
      ) &&
      cvcNumber.length === MAGIC_NUMBER.maxLength.cvcNumber &&
      password.length === MAGIC_NUMBER.maxLength.password;
    const isAllErrorFree = [
      ...Object.values(error.cardNumbers),
      ...Object.values(error.expirationPeriod),
      error.cvcNumber,
      error.cardBrand,
      error.password,
    ].every((v) => v === null);

    return isAllComplete && isAllErrorFree;
  }, [cardNumbers, cardBrand, expirationPeriod, cvcNumber, password, error]);

  const handleClick = () => {
    navigate("/success", {
      state: {
        cardNumber: `${cardNumbers.first}`,
        cardBrand: `${cardBrand}`,
      },
    });
  };

  return (
    <PaymentsCSS>
      <Preview />
      <form>
        {visible.password && (
          <InputSection
            type={INPUT_TYPE.password}
            error={error}
            validators={validators}
          />
        )}
        {visible.cvcNumber && (
          <InputSection
            type={INPUT_TYPE.cvcNumber}
            error={error}
            validators={validators}
          />
        )}
        {visible.expirationPeriod && (
          <InputSection
            type={INPUT_TYPE.expirationPeriod}
            error={error}
            validators={validators}
          />
        )}
        {visible.cardBrand && (
          <InputSection
            type={INPUT_TYPE.cardBrand}
            error={error}
            validators={validators}
          />
        )}
        <InputSection
          type={INPUT_TYPE.cardNumbers}
          error={error}
          validators={validators}
        />
        {isButtonShowing && <Button onClick={handleClick} variant="home" />}
      </form>
    </PaymentsCSS>
  );
}

export default Payments;
