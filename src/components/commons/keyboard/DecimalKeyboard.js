import PropTypes from 'prop-types';
import { BottomModal } from '../modal/BottomModal';
import Styled from './DecimalKeyboard.style';

const BACKSPACE = 'backspace';
const NUM_COL = 4;
const NUM_ROW = 3;
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const TABLE_ITEMS = NUMBERS.concat(Array.from({ length: NUM_COL * NUM_ROW - NUMBERS.length }).fill(''));

const getRandomSortingArray = arr => {
  return [...arr].sort(() => Math.random() - Math.random());
};

export const DecimalKeyboard = ({ closeKeyboard, setInput, maxLength }) => {
  const handleClick = ({ target }) => {
    const input = target.dataset.input;
    if (!input) return;

    if (input === BACKSPACE) {
      setInput(prevState => prevState.slice(0, -1));

      return;
    }

    if (NUMBERS.some(number => number === Number(input))) {
      setInput(prevState => {
        if (prevState.length < maxLength) {
          return prevState + input;
        }

        return prevState;
      });
    }
  };

  return (
    <BottomModal closeModal={closeKeyboard} dimmerStyles={{ backgroundColor: 'transparent' }}>
      <Styled.Keyboard>
        <Styled.NumberContainer>
          {getRandomSortingArray(TABLE_ITEMS).map((item, index) => (
            <Styled.Number
              type="button"
              className={'number-item ' + (item === '' ? 'empty' : 'number')}
              key={index}
              data-input={item === '' ? '' : item}
              onClick={handleClick}
            >
              {item}
            </Styled.Number>
          ))}
          <Styled.Backspace type="button" onClick={handleClick} data-input={BACKSPACE}>
            ⌫
          </Styled.Backspace>
        </Styled.NumberContainer>
      </Styled.Keyboard>
    </BottomModal>
  );
};

DecimalKeyboard.propTypes = {
  closeKeyboard: PropTypes.func,
  setInput: PropTypes.func,
  maxLength: PropTypes.number,
};

DecimalKeyboard.defaultProps = {
  maxLength: 100,
};
