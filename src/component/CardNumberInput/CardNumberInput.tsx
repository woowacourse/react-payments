import Input from '../@common/Input/Input';
import {
  errorInputStyle,
  errorMessageStyle,
} from '../../styles/@common/text.style';
import { CARD_NUMBER } from '../../constants';
import {
  inputContainer,
  inputSection,
} from '../../styles/@common/inputContainer.style';
import Title from '../@common/Title/Title';
import { useCard } from '../../context/CardContext';
import { handleAutoFocus } from '../../utils';
import { Button } from '../@common/Button/Button';

interface CardNumberInputProps {
  onNext: () => void;
  onClickBackButton: () => void;
}

function CardNumberInput(props: CardNumberInputProps) {
  const { onNext, onClickBackButton } = props;
  const { cardNumber } = useCard();

  const hasError =
    cardNumber.error.first ||
    cardNumber.error.second ||
    cardNumber.error.third ||
    cardNumber.error.forth;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cardNumber.onChange(e);

    const fieldMappings = {
      first: 'second',
      second: 'third',
      third: 'forth',
    };

    const prevFieldMappings = {
      second: 'first',
      third: 'second',
      forth: 'third',
    };

    handleAutoFocus(e, CARD_NUMBER.maxLength, fieldMappings, prevFieldMappings);
  };

  return (
    <>
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
                value={cardNumber.value.first?.toString()}
                autoFocus
                onChange={handleInputChange}
                css={cardNumber.error.first ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-second">
              <Input
                type="text"
                name="second"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.value.second?.toString()}
                onChange={handleInputChange}
                css={cardNumber.error.second ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-third">
              <Input
                type="text"
                name="third"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.value.third?.toString()}
                onChange={handleInputChange}
                css={cardNumber.error.third ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-forth">
              <Input
                type="text"
                name="forth"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.value.forth?.toString()}
                onChange={handleInputChange}
                css={cardNumber.error.forth ? errorInputStyle : undefined}
              />
            </Input.Group>
          </article>
          {hasError && (
            <div css={errorMessageStyle}>{cardNumber.getErrorMessage()}</div>
          )}
        </div>
      </Input.Group>
      <Button variant="small" onClick={() => onClickBackButton()}>
        뒤로가기
      </Button>
      <Button variant="small" onClick={onNext} colorVariant="gray">
        다음
      </Button>
    </>
  );
}

export default CardNumberInput;
