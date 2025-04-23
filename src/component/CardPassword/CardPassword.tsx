import Title from "../@common/Title/Title.tsx";
import Input from "../@common/Input/Input.tsx";
import {inputContainer, inputSection} from "../../styles/@common/inputContainer.style.ts";
import {CARD_PASSWORD} from "../../constants";
import {errorInputStyle, errorMessageStyle} from "../../styles/@common/text.style.ts";
import {cardPeriodInputLayout} from "../CardPeriod/CardPeriodInput.style.ts";

function CardPassword() {
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
              // value={cardCVC?.toString()}
              // onChange={onChange}
              // css={hasError ? errorInputStyle : undefined}
            />
          </article>
          {/*{hasError && <div css={errorMessageStyle}>{getErrorMessage()}</div>}*/}
        </div>
      </Input.Group>
    </div>
  );
}

export default CardPassword;
