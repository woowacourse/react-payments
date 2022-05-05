import './index.scss';
import InputContainer from '../elements/InputContainer';
import { Input } from '../elements/Input';
import useControllInput from '../../hooks/useControllInput';
import InputLabel from '../elements/label';
import { Fragment, useCallback } from 'react';

const INPUT_LENGTH = 4;
const NUM_OF_INPUT = 4;
const BACKSPACE_KEY_CODE = 8;

const CardNumberInput = ({ state, updateForm }) => {
  const { itemRef, autoFocusForward, autoFocusBackward } = useControllInput();

  const onKeyDown = useCallback((e) => {
    if (e.keyCode === BACKSPACE_KEY_CODE && e.target.value === '') {
      autoFocusBackward(e.target);
    }
  }, []);

  return (
    <div className='card-number__input__container'>
      <InputLabel>카드 번호</InputLabel>
      <InputContainer>
        {new Array(NUM_OF_INPUT).fill().map((_, idx) => (
          <Fragment key={idx}>
            <Input
              onChange={({ target }) => {
                autoFocusForward(target);
                updateForm({
                  type: 'cardNumber',
                  payload: { value: target.value, index: idx },
                });
              }}
              onKeyDown={onKeyDown}
              value={state[idx]}
              ref={(el) => (itemRef.current[idx] = el)}
              type={idx > 1 ? 'password' : 'text'}
              maxLength={INPUT_LENGTH}
            />
            {idx === NUM_OF_INPUT - 1 ? '' : '-'}
          </Fragment>
        ))}
      </InputContainer>
    </div>
  );
};

export default CardNumberInput;
