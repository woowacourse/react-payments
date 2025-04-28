import Input from '../@common/Input/Input';
import Title from "../@common/Title/Title";
import {ChangeEvent} from 'react';
import {cardPeriodInputLayout} from '../CardPeriod/CardPeriodInput.style';
import {CARD_CVC_ERROR, CARD_CVC} from '../../constants';
import {errorInputStyle, errorMessageStyle} from '../../styles/@common/text.style';
import {inputContainer, inputSection} from '../../styles/@common/inputContainer.style';
import {CardCVC, CardCVCError} from "../../types";

type CardCVCInputProps = {
  cardCVC: CardCVC;
  error: CardCVCError;
  cvcRef: React.RefObject<HTMLInputElement | null>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  tabIndex: number;
};

function CardCVCInput({
  cardCVC,
  error,
  cvcRef,
  onChange,
  tabIndex,
}: CardCVCInputProps) {
  const errorMessage = () => {
    if (error === CARD_CVC_ERROR.onlyNumbers) {
      return CARD_CVC_ERROR.onlyNumbers;
    }
    if (error === CARD_CVC_ERROR.invalidFormat) {
      return CARD_CVC_ERROR.invalidFormat;
    }
    return '';
  }

  return (
    <div css={cardPeriodInputLayout}>
      <Title title='CVC 번호를 입력해 주세요'/>
      <Input.Group id="card-cvc">
        <div css={inputContainer}>
          <Input.Label>CVC</Input.Label>
          <article css={inputSection}>
            <Input
              ref={cvcRef}
              type="text"
              name="cvc"
              maxLength={CARD_CVC.maxLength}
              value={cardCVC?.toString()}
              onChange={onChange}
              css={error ? errorInputStyle : undefined}
              tabIndex={tabIndex}
            />
          </article>
          {error && <div css={errorMessageStyle}>{errorMessage()}</div>}
        </div>
      </Input.Group>
    </div>
  );
}

export default CardCVCInput;
