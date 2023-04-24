import { InputBoxProps } from '../../../types/InputBox';
import * as styled from './CardNumbers.styled';

const CardNumbers = ({ children, error }: InputBoxProps) => {
  return (
    <styled.CardNumbers>
      <label>
        <styled.LabelHeader>카드 번호</styled.LabelHeader>
        <styled.CardNumbersInputs>{children}</styled.CardNumbersInputs>
      </label>
      {(error?.firstCardNumbers ||
        error?.secondCardNumbers ||
        error?.thirdCardNumbers ||
        error?.fourthCardNumbers) && (
        <styled.ErrorMessage>
          {error?.firstCardNumbers ||
            error?.secondCardNumbers ||
            error?.thirdCardNumbers ||
            error?.fourthCardNumbers}
        </styled.ErrorMessage>
      )}
    </styled.CardNumbers>
  );
};

export default CardNumbers;
