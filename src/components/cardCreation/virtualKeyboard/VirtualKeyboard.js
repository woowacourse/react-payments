import PropTypes from 'prop-types';
import { Button } from '../../commons/button/Button';
import Styled from './VirtualKeyboard.style';
import { useContext, useState } from 'react';
import { arrayShuffle } from '../../../utils/shuffle';
import { randomKey } from '../../../utils/randomKey';
import { MODAL_TYPE } from '../../../hooks/useBottomModal';
import CardDataContext from '../../../context/CardDataContext';

const virtualKeyboardValueList = Array.from({ length: 10 }, (_, i) => i);
const CONFIRM = '확인';
const DELETE = '삭제';

const VirtualKeyboard = ({ BottomModal, closeModal, currentInputName, inputValue, maxLength, targetKey }) => {
  const [shuffledButtonList, setShuffledButtonList] = useState(arrayShuffle(virtualKeyboardValueList));
  const { setCardInfo } = useContext(CardDataContext);

  const handleButtonClick = ({ target }) => {
    if (target.tagName !== 'BUTTON') return;
    if (target.innerText === CONFIRM) {
      closeModal(MODAL_TYPE.VIRTUAL_KEYBOARD);

      return;
    }

    setShuffledButtonList(arrayShuffle(virtualKeyboardValueList));

    if (typeof inputValue === 'string') {
      setSingleInputValue(target.innerText);

      return;
    }

    setMultipleInputValue(target.innerText);
  };

  const setSingleInputValue = value => {
    if (inputValue.length >= maxLength && value !== DELETE) return;

    setCardInfo(prevState => ({
      ...prevState,
      [targetKey]: value === DELETE ? inputValue.slice(0, -1) : inputValue + value,
    }));
  };

  const setMultipleInputValue = value => {
    if (inputValue[currentInputName].length >= maxLength && value !== DELETE) return;

    setCardInfo(prevState => {
      const copiedValue = { ...inputValue };
      copiedValue[currentInputName] =
        value === DELETE ? copiedValue[currentInputName].slice(0, -1) : copiedValue[currentInputName] + value;

      return { ...prevState, [targetKey]: copiedValue };
    });
  };

  return (
    <BottomModal>
      <Styled.ButtonContainer onClick={handleButtonClick}>
        {shuffledButtonList.map(value => (
          <Button type="button" key={randomKey()}>
            {value}
          </Button>
        ))}
        <Button type="button">{CONFIRM}</Button>
        <Button type="button">{DELETE}</Button>
      </Styled.ButtonContainer>
    </BottomModal>
  );
};

VirtualKeyboard.defaultProps = {
  currentInputName: '',
  inputValue: '',
  maxLength: 0,
};

VirtualKeyboard.propTypes = {
  BottomModal: PropTypes.func.isRequired,
  currentInputName: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  maxLength: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
  targetKey: PropTypes.string.isRequired,
};

export default VirtualKeyboard;
