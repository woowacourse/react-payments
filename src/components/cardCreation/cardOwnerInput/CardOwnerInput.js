import { useContext } from 'react';
import { COLOR } from '../../../constants/color';
import { INPUT_LENGTH } from '../../../constants/input';
import { ALPHABET_REG_EXR } from '../../../constants/regExp';
import CardDataContext from '../../../context/CardDataContext';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardOwnerInput.style';

const isValidInput = value => {
  return ALPHABET_REG_EXR.test(value) && value.length <= INPUT_LENGTH.CARD_OWNER;
};

const CardOwnerInput = () => {
  const {
    cardInfo: { cardOwner },
    setCardInfo,
  } = useContext(CardDataContext);

  const handleInputChange = ({ target }) => {
    if (!isValidInput(target.value)) return;

    setCardInfo(prevState => ({ ...prevState, cardOwner: target.value.toUpperCase() }));
  };

  return (
    <>
      <Styled.InputLabelContainer>
        <div>카드 소유자 이름(선택)</div>
        <div>
          {cardOwner.length} / {INPUT_LENGTH.CARD_OWNER}
        </div>
      </Styled.InputLabelContainer>
      <Styled.InputContainer>
        <TransparentInput
          value={cardOwner}
          onChange={handleInputChange}
          styles={{ color: COLOR.MINT_500 }}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </Styled.InputContainer>
    </>
  );
};

export default CardOwnerInput;
