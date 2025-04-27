import Title from "../@common/Title/Title";
import Input from "../@common/Input/Input";
import {inputContainer, inputSection} from "../../styles/@common/inputContainer.style";
import {errorInputStyle, errorMessageStyle} from "../../styles/@common/text.style";
import {cardPeriodInputLayout} from "../CardPeriod/CardPeriodInput.style";
import {CARD_PASSWORD, CARD_PASSWORD_ERROR} from "../../constants";
import {ChangeEvent} from "react";
import {CardPassword} from "../../types";

type CardPasswordInputProps = {
  cardPassword: CardPassword;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  getCardPasswordErrorMessage?: () => string | null;
}

function CardPasswordInput({cardPassword, onChange, hasError, getCardPasswordErrorMessage}: CardPasswordInputProps) {
  const getErrorMessage = (): string => {
    if (getCardPasswordErrorMessage) {
      return getCardPasswordErrorMessage() || CARD_PASSWORD_ERROR.onlyNumbers;
    }
    return CARD_PASSWORD_ERROR.onlyNumbers;
  }

  return (
    <div css={cardPeriodInputLayout}>
      <Title title='비밀번호를 입력해 주세요' subTitle='앞의 2자리를 입력해주세요'/>
      <Input.Group id="password">
        <div css={inputContainer}>
          <Input.Label>비밀번호 앞 2자리</Input.Label>
          <article css={inputSection}>
            <Input
              type="password"
              name="password"
              maxLength={CARD_PASSWORD.maxLength}
              value={cardPassword?.toString()}
              onChange={onChange}
              css={hasError ? errorInputStyle : undefined}
            />
          </article>
          {hasError && <div css={errorMessageStyle}>{getErrorMessage()}</div>}
        </div>
      </Input.Group>
    </div>
  );
}

export default CardPasswordInput;
