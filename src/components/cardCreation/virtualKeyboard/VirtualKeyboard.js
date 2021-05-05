import PropTypes from 'prop-types';
import { Button } from '../../commons/button/Button';
import Styled from './VirtualKeyboard.style';
import { useContext, useState } from 'react';
import { arrayShuffle } from '../../../utils/shuffle';
import { randomKey } from '../../../utils/randomKey';
import { MODAL_TYPE } from '../../../hooks/useBottomModal';
import CardDataContext from '../../../context/CardDataContext';
import { BottomModal } from '../../commons/modal/BottomModal';

const virtualKeyboardValueList = Array.from({ length: 10 }, (_, i) => i);
const VIRTUAL_KEYBOARD_CONFIRM_TEXT = '확인';
const VIRTUAL_KEYBOARD_DELETE_TEXT = '삭제';

const VirtualKeyboard = ({ closeModal, currentInputName, inputValue, maxLength, targetKey }) => {
  const [shuffledButtonList, setShuffledButtonList] = useState(arrayShuffle(virtualKeyboardValueList));
  const { setCardInfo } = useContext(CardDataContext);

  const handleNumberClick = ({ target }) => {
    setShuffledButtonList(arrayShuffle(virtualKeyboardValueList));

    if (typeof inputValue === 'string') {
      setSingleInputValue(inputValue + target.innerText);

      return;
    }

    setMultipleInputValue(inputValue[currentInputName] + target.innerText);
  };

  const handleDeleteTextClick = () => {
    if (typeof inputValue === 'string') {
      setSingleInputValue(inputValue.slice(0, -1));

      return;
    }

    setMultipleInputValue(inputValue[currentInputName].slice(0, -1));
  };

  const setSingleInputValue = changedValue => {
    if (inputValue.length >= maxLength) return;

    setCardInfo(prevState => ({
      ...prevState,
      [targetKey]: changedValue,
    }));
  };

  const setMultipleInputValue = changedValue => {
    if (inputValue[currentInputName].length >= maxLength) return;

    setCardInfo(prevState => {
      const copiedValue = { ...inputValue };
      copiedValue[currentInputName] = changedValue;

      return { ...prevState, [targetKey]: copiedValue };
    });
  };

  return (
    <BottomModal closeModal={closeModal.bind(null, MODAL_TYPE.VIRTUAL_KEYBOARD)}>
      <Styled.ButtonContainer>
        {shuffledButtonList.map(value => (
          <Button type="button" key={randomKey()} onClick={handleNumberClick}>
            {value}
          </Button>
        ))}
        <Button type="button" onClick={() => closeModal(MODAL_TYPE.VIRTUAL_KEYBOARD)}>
          {VIRTUAL_KEYBOARD_CONFIRM_TEXT}
        </Button>
        <Button type="button" onClick={handleDeleteTextClick}>
          {VIRTUAL_KEYBOARD_DELETE_TEXT}
        </Button>
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
  closeModal: PropTypes.func.isRequired,
  targetKey: PropTypes.string.isRequired,
};

export default VirtualKeyboard;
