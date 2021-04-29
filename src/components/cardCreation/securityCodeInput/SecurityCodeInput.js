import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { MODAL_TYPE, useBottomModal } from '../../../hooks/useBottomModal';
import { printColorBasedOnBoolean } from '../../../utils/printColor';
import { TransparentInput } from '../../commons/input/TransparentInput';
import { QuestionDescription } from '../../commons/questionDescription/QuestionDescription';
import VirtualKeyboard from '../virtualKeyboard/VirtualKeyboard';
import Styled from './SecurityCodeInput.style';

const FULL_INPUT_LENGTH = 3;
const transparentInputStyles = {
  color: COLOR.MINT_500,
  fontSize: '24px',
  textAlign: 'center',
};

const SecurityCodeInput = memo(({ securityCode, setSecurityCode, isValidSecurityCode, setValidSecurityCode }) => {
  const { isModalOpened, openModal, closeModal, BottomModal } = useBottomModal();

  const isValidInput = securityCode.length === FULL_INPUT_LENGTH;

  useEffect(() => {
    setValidSecurityCode(isValidInput);
    isValidInput && closeModal(MODAL_TYPE.VIRTUAL_KEYBOARD);
  }, [setValidSecurityCode, isValidInput, closeModal]);

  const handleInputFocus = () => {
    setSecurityCode('');
    openModal(MODAL_TYPE.VIRTUAL_KEYBOARD);
  };

  return (
    <>
      <div>
        <Styled.InputLabelContainer>보안 코드(CVC/CVV) {isValidSecurityCode && '✔️'}</Styled.InputLabelContainer>
        <Styled.Container>
          <Styled.InputContainer validColor={securityCode && printColorBasedOnBoolean(isValidSecurityCode)}>
            <TransparentInput
              type="password"
              minLength={FULL_INPUT_LENGTH}
              maxLength={FULL_INPUT_LENGTH}
              value={securityCode}
              onFocus={handleInputFocus}
              styles={transparentInputStyles}
              readOnly
            />
          </Styled.InputContainer>
          <QuestionDescription />
        </Styled.Container>
      </div>
      {isModalOpened && (
        <VirtualKeyboard
          BottomModal={BottomModal}
          closeModal={closeModal}
          inputValue={securityCode}
          setInputValue={setSecurityCode}
          maxLength={FULL_INPUT_LENGTH}
        />
      )}
    </>
  );
});

SecurityCodeInput.defaultProps = {
  securityCode: '',
};

SecurityCodeInput.propTypes = {
  securityCode: PropTypes.string.isRequired,
  setSecurityCode: PropTypes.func.isRequired,
  isValidSecurityCode: PropTypes.bool.isRequired,
  setValidSecurityCode: PropTypes.func.isRequired,
};

export default SecurityCodeInput;
