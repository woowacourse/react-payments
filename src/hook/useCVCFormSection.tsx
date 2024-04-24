import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";

interface UseCVCFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>;
  handleCardState: (cardState: CardState) => void;
}

const useCVCFormSection = (props: UseCVCFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, handleCardState } = props

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!REGEX.numbers.test(inputValue) && inputValue.length !== 0) {
      dispatchCardInfo({ type: 'SET_CARD_CVC_ERROR_MESSAGE', value: ERROR_MESSAGE.onlyNumber })
      dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value: inputValue.slice(0, -1) })
    }
    else {
      dispatchCardInfo({ type: 'SET_CARD_CVC_ERROR_MESSAGE', value: '' })
      dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value: inputValue })
    }
  }

  const handleOnFocus = () => {
    dispatchCardInfo({ type: 'SET_CARD_CVC_ERROR_MESSAGE', value: '' })
    handleCardState('back')
  };

  const handleOnBlur = () => {
    dispatchCardInfo({ type: 'SET_CARD_CVC_ERROR_MESSAGE', value: '' })

    if (cardInfo.cvc.value.length === OPTION.cvcMaxLength) {
      dispatchCardInfo({ type: 'SET_CARD_CVC_COMPLETED', value: true })
    } else {
      dispatchCardInfo({ type: 'SET_CARD_CVC_ERROR_MESSAGE', value: ERROR_MESSAGE.cvcFormat })
    }

    handleCardState('front')
  };


  return [onChange, handleOnFocus, handleOnBlur] as const;
};

export default useCVCFormSection;