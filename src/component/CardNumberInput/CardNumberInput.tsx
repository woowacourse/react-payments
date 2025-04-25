import Input from '../@common/Input/Input';
import {
  errorInputStyle,
  errorMessageStyle,
} from '../../styles/@common/text.style';
import { cardNumberInputLayout } from './CardNumberInput.style';
import { CARD_NUMBER } from '../../constants';
import {
  inputContainer,
  inputSection,
} from '../../styles/@common/inputContainer.style';
import Title from '../@common/Title/Title';
import { useCard } from '../../context/CardContext';
import { handleAutoFocus } from '../../utils';

interface CardNumberInputProps {
  onNext: () => void;
}

function CardNumberInput(props: CardNumberInputProps) {
  const { onNext } = props;
  const {
    cardNumber,
    handleCardNumberChange,
    cardNumberError: errorState,
    getCardNumberErrorMessage,
    isCardNumberValid,
  } = useCard();

  const hasError =
    errorState.first ||
    errorState.second ||
    errorState.third ||
    errorState.forth;

  if (isCardNumberValid()) {
    onNext();
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCardNumberChange(e);

    const fieldMappings = {
      first: 'second',
      second: 'third',
      third: 'forth',
    };

    handleAutoFocus(e, CARD_NUMBER.maxLength, fieldMappings);
  };

  return (
    <div css={cardNumberInputLayout}>
      <Title>
        <Title.Text>결제할 카드 번호를 입력해 주세요</Title.Text>
        <Title.SubTitle>본인 명의의 카드만 결제 가능합니다.</Title.SubTitle>
      </Title>
      <Input.Group id="card-number">
        <div css={inputContainer}>
          <Input.Label>카드 번호</Input.Label>
          <article css={inputSection}>
            <Input.Group id="card-number">
              <Input
                type="text"
                name="first"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.first?.toString()}
                onChange={handleInputChange}
                css={errorState.first ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-second">
              <Input
                type="text"
                name="second"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.second?.toString()}
                onChange={handleInputChange}
                css={errorState.second ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-third">
              <Input
                type="text"
                name="third"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.third?.toString()}
                onChange={handleInputChange}
                css={errorState.third ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-forth">
              <Input
                type="text"
                name="forth"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.forth?.toString()}
                onChange={handleInputChange}
                css={errorState.forth ? errorInputStyle : undefined}
              />
            </Input.Group>
          </article>
          {hasError && (
            <div css={errorMessageStyle}>{getCardNumberErrorMessage()}</div>
          )}
        </div>
      </Input.Group>
    </div>
  );
}

export default CardNumberInput;
