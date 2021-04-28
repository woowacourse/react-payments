import PropTypes from 'prop-types';
import { CARD_PASSWORD_INPUT, SECURITY_CODE_INPUT } from '../../../constants/input';
import { shuffle } from '../../../utils';
import { BottomModal } from '../../commons/modal/BottomModal';
import Styled from './VirtualKeyboardModal.style';

const getRandomKeyboardElements = () => {
  const keyboardElements = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  keyboardElements.splice(9, 0, '전체삭제');
  keyboardElements.splice(11, 0, '확인');

  return keyboardElements;
};

const VirtualKeyboardModal = ({ closeModal, currentInput, state, setState }) => {
  const initState = () => {
    switch (currentInput) {
      case 'securityCode':
        setState('');

        break;
      case 'cardPassword':
        setState({
          [CARD_PASSWORD_INPUT.NAME.FIRST]: '',
          [CARD_PASSWORD_INPUT.NAME.SECOND]: '',
        });

        break;
      default:
        break;
    }
  };

  const updateState = target => {
    switch (currentInput) {
      case 'securityCode':
        if (state.length < SECURITY_CODE_INPUT.LENGTH) {
          setState(prevState => prevState + target.textContent);
        }

        break;
      case 'cardPassword':
        if (state[CARD_PASSWORD_INPUT.NAME.FIRST] === '') {
          setState(prevState => ({ ...prevState, [CARD_PASSWORD_INPUT.NAME.FIRST]: target.textContent }));
        } else if (state[CARD_PASSWORD_INPUT.NAME.SECOND] === '') {
          setState(prevState => ({ ...prevState, [CARD_PASSWORD_INPUT.NAME.SECOND]: target.textContent }));
        }

        break;
      default:
        break;
    }
  };

  const handleItemClick = ({ target }) => {
    switch (target.textContent) {
      case '확인':
        closeModal();

        break;
      case '전체삭제':
        initState();

        break;
      default:
        updateState(target);

        break;
    }
  };

  return (
    <BottomModal closeModal={closeModal}>
      <Styled.List>
        {getRandomKeyboardElements().map(value => {
          return <Styled.ListItem onClick={handleItemClick}>{value}</Styled.ListItem>;
        })}
      </Styled.List>
    </BottomModal>
  );
};

VirtualKeyboardModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  currentInput: PropTypes.string,
  setState: PropTypes.func.isRequired,
};

export default VirtualKeyboardModal;
