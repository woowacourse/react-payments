import PropTypes from 'prop-types';
import { shuffle } from '../../../utils';
import { BottomModal } from '../../commons/modal/BottomModal';
import Styled from './VirtualKeyboardModal.style';

const getRandomKeyboardElements = () => {
  const keyboardElements = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  keyboardElements.splice(9, 0, '전체삭제');
  keyboardElements.splice(11, 0, '확인');

  return keyboardElements;
};

const VirtualKeyboardModal = ({ closeModal, setPressedKeyList }) => {
  const handleItemClick = ({ target }) => {
    setPressedKeyList(prevState => [...prevState, target.textContent]);
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
  setPressedKeyList: PropTypes.func.isRequired,
};

export default VirtualKeyboardModal;
