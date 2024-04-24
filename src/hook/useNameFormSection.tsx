import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"

interface UseNameFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const useNameFormSection = (props: UseNameFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!REGEX.name.test(inputValue) && inputValue.length !== 0) {
      dispatchCardInfo({ type: 'SET_CARD_NAME_ERROR_MESSAGE', value: ERROR_MESSAGE.onlyEnglish })
      dispatchCardInfo({ type: 'SET_CARD_NAME_VALUE', value: inputValue.slice(0, -1) })
    }
    else {
      dispatchCardInfo({ type: 'SET_CARD_NAME_ERROR_MESSAGE', value: '' })
      dispatchCardInfo({ type: 'SET_CARD_NAME_VALUE', value: inputValue })
    }
  }

  const handleOnFocus = () => {
    dispatchCardInfo({ type: 'SET_CARD_NAME_ERROR_MESSAGE', value: '' })
  };

  const handleOnBlur = () => {
    dispatchCardInfo({ type: 'SET_CARD_NAME_ERROR_MESSAGE', value: '' })

    if (cardInfo.name.value.length !== 0) {
      dispatchCardInfo({ type: 'SET_CARD_NAME_COMPLETED', value: true })
    }
  };


  return [onChange, handleOnFocus, handleOnBlur] as const;
};

export default useNameFormSection;