import useControllInput from '../../hooks/useControllInput';
import { Input } from '../elements/Input';
import InputContainer from '../elements/InputContainer';
import InputLabel from '../elements/label';
import './index.scss';

const INPUT_LENGTH = 1;
const NUM_OF_INPUT = 2;
const BACKSPACE_KEY_CODE = 8;

const CardPasswordInput = ({ state, updateForm }) => {
  const { itemRef, autoFocusForward, autoFocusBackward } = useControllInput();

  return (
    <div className='password__input__container'>
      <InputLabel>카드비밀번호</InputLabel>
      <div className='password__inputs'>
        {new Array(NUM_OF_INPUT).fill().map((_, idx) => (
          <div className='password__input' key={idx}>
            <InputContainer>
              <Input
                type='text'
                ref={(el) => {
                  itemRef.current[idx] = el;
                }}
                value={state[idx]}
                onChange={({ target }) => {
                  autoFocusForward(target);
                  updateForm({
                    type: 'password',
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
            </InputContainer>
          </div>
        ))}
        <div className='password__input'>
          <div className='dot'></div>
        </div>
        <div className='password__input'>
          <div className='dot'></div>
        </div>
      </div>
    </div>
  );
};

export default CardPasswordInput;
