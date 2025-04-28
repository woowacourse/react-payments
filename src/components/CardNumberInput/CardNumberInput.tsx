import Input from '../@common/Input/Input';
import Title from "../@common/Title/Title";
import React, { ChangeEvent } from 'react';
import { CardNumber, CardNumberError } from "../../types";
import { cardNumberInputLayout } from './CardNumberInput.style';
import { CARD_NUMBER } from '../../constants';
import { errorInputStyle, errorMessageStyle } from '../../styles/@common/text.style';
import { inputContainer, inputSection } from '../../styles/@common/inputContainer.style';

type CardNumberInputProps = {
  cardNumber: CardNumber;
  error: CardNumberError;
  inputRefs: Array<React.RefObject<HTMLInputElement>>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  autoFocus?: boolean;
};

function CardNumberInput({
  cardNumber,
  error,
  inputRefs,
  onChange,
  onKeyDown,
  tabIndex,
  autoFocus,
}: CardNumberInputProps) {
 const errorMessage = error.first || error.second || error.third || error.forth;

  return (
    <div css={cardNumberInputLayout}>
      <Title title='결제할 카드 번호를 입력해 주세요' subTitle='본인 명의의 카드만 결제 가능합니다.'/>
      <Input.Group id="card-number">
        <div css={inputContainer}>
          <Input.Label>카드 번호</Input.Label>
          <article css={inputSection}>
            <Input.Group id="card-number">
              <Input
                ref={inputRefs?.[0]}
                type="text"
                name="first"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.first?.toString()}
                onChange={onChange}
                onKeyDown={onKeyDown}
                css={error.first ? errorInputStyle : undefined}
                tabIndex={tabIndex ? tabIndex + 1: undefined}
                autoFocus={autoFocus}
              />
            </Input.Group>
            <Input.Group id="card-number-second">
              <Input
                ref={inputRefs?.[1]}
                type="text"
                name="second"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.second?.toString()}
                onChange={onChange}
                onKeyDown={onKeyDown}
                css={error.second ? errorInputStyle : undefined}
                tabIndex={tabIndex ? tabIndex + 2: undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-third">
              <Input
                ref={inputRefs?.[2]}
                type="text"
                name="third"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.third?.toString()}
                onChange={onChange}
                onKeyDown={onKeyDown}
                css={error.third ? errorInputStyle : undefined}
                tabIndex={tabIndex ? tabIndex + 3: undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-forth">
              <Input
                ref={inputRefs?.[3]}
                type="text"
                name="forth"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.forth?.toString()}
                onChange={onChange}
                onKeyDown={onKeyDown}
                css={error.forth ? errorInputStyle : undefined}
                tabIndex={tabIndex ? tabIndex + 4: undefined}
              />
            </Input.Group>
          </article>
          {
            errorMessage && (
            <div css={errorMessageStyle}>{errorMessage}</div>
          )}
        </div>
      </Input.Group>
    </div>
  );
}

export default CardNumberInput;
