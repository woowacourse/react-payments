import InputContainer from '../elements/InputContainer';
import { Input } from '../elements/Input';
import './index.scss';
import InputLabel from '../elements/label';
import useControllInput from '../../hooks/useControllInput';

const INPUT_LENGTH = 3;

const SecureCodeInput = ({ state, updateForm }) => {
  const { itemRef, autoFocusForward } = useControllInput();
  return (
    <div className='secure__input__container'>
      <InputLabel>보안코드(CVC/CVV)</InputLabel>
      <InputContainer>
        <Input
          ref={(el) => {
            itemRef.current[0] = el;
          }}
          type='password'
          value={state}
          onChange={({ target }) => {
            autoFocusForward(target);
            updateForm({
              type: 'secureCode',
              payload: { value: target.value },
            });
          }}
          maxLength={INPUT_LENGTH}
        />
      </InputContainer>
      <button type='button' className='help--button tooltip'>
        ?<span className='tooltiptext tooltip-bottom'>카드 뒷면의 세자리 숫자를 확인해주세요!</span>
      </button>
    </div>
  );
};

export default SecureCodeInput;
