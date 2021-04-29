import PropTypes from 'prop-types';
import { Button } from '../../commons/button/Button';
import Styled from './VirtualKeyboard.style';
import { useState } from 'react';
import { arrayShuffle } from '../../../utils/shuffle';
import { randomKey } from '../../../utils/randomKey';
import { MODAL_TYPE } from '../../../hooks/useBottomModal';

const virtualKeyboardValueList = Array.from({ length: 10 }, (_, i) => i);
const CONFIRM = '확인';
const DELETE = '삭제';

const VirtualKeyboard = ({ BottomModal, closeModal, currentInputName, inputValue, setInputValue, maxLength }) => {
  const [shuffledButtonList, setShuffledButtonList] = useState(arrayShuffle(virtualKeyboardValueList));

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

    setInputValue(prevState => (value === DELETE ? prevState.slice(0, -1) : prevState + value));
  };

  const setMultipleInputValue = value => {
    if (inputValue[currentInputName].length >= maxLength && value !== DELETE) return;

    setInputValue(prevState => ({
      ...prevState,
      [currentInputName]:
        value === DELETE ? prevState[currentInputName].slice(0, -1) : prevState[currentInputName] + value,
    }));
  };

  return (
    <BottomModal>
      <Styled.ButtonContainer onClick={handleButtonClick}>
        {shuffledButtonList.map(value => (
          <Button type="button" key={randomKey()}>
            {value}
          </Button>
        ))}
        <Button type="button">확인</Button>
        <Button type="button">삭제</Button>
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
  currentInputName: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default VirtualKeyboard;
