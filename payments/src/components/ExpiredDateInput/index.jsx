import useControllInput from '../../hooks/useControllInput';
import InputContainer from '../elements/InputContainer';
import { Input } from '../elements/Input';
import './index.scss';
import InputLabel from '../elements/label';
import { Fragment } from 'react';

const INPUT_LENGTH = 2;
const NUM_OF_INPUT = 2;
const BACKSPACE_KEY_CODE = 8;

const ExpiredDateInput = ({ state, updateForm }) => {
  const { itemRef, autoFocusForward, autoFocusBackward, blockCharacter } = useControllInput();

  return (
    <div className='expire__input__container'>
      <InputLabel>만료일</InputLabel>
      <InputContainer>
        {new Array(NUM_OF_INPUT).fill().map((_, idx) => (
          <Fragment key={idx}>
            <Input
              placeholder={idx === 0 ? 'MM' : 'YY'}
              type='text'
              value={state[idx]}
              ref={(el) => {
                itemRef.current[idx] = el;
              }}
              onChange={({ target }) => {
                autoFocusForward(target);
                blockCharacter(target);
                updateForm({
                  type: 'expiredDate',
                  payload: { value: target.value, index: idx },
                });
              }}
              onKeyDown={(e) => {
                if (e.keyCode === BACKSPACE_KEY_CODE && e.target.value === '') {
                  autoFocusBackward(e.target);
                }
              }}
              maxLength={INPUT_LENGTH}
            />
            {idx === 0 ? '/' : ''}
          </Fragment>
        ))}
      </InputContainer>
    </div>
  );
};

export default ExpiredDateInput;
