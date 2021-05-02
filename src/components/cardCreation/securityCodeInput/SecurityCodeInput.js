import PropTypes from 'prop-types';
import { memo, useContext, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { INPUT_LENGTH } from '../../../constants/input';
import CardDataContext from '../../../context/CardDataContext';
import { MODAL_TYPE, useBottomModal } from '../../../hooks/useBottomModal';
import { printColorBasedOnBoolean } from '../../../utils/printColor';
import { TransparentInput } from '../../commons/input/TransparentInput';
import { QuestionDescription } from '../../commons/questionDescription/QuestionDescription';
import VirtualKeyboard from '../virtualKeyboard/VirtualKeyboard';
import Styled from './SecurityCodeInput.style';

const transparentInputStyles = {
  color: COLOR.MINT_500,
  fontSize: '24px',
  textAlign: 'center',
};

const SecurityCodeInput = memo(({ isValidSecurityCode }) => {
  const { isModalOpened, openModal, closeModal, BottomModal } = useBottomModal();

  const {
    cardInfo: { securityCode },
    setCardInfo,
  } = useContext(CardDataContext);

  useEffect(() => {
    isValidSecurityCode && closeModal(MODAL_TYPE.VIRTUAL_KEYBOARD);
  }, [isValidSecurityCode, closeModal]);

  const handleInputFocus = () => {
    setCardInfo(prevState => ({ ...prevState, securityCode: '' }));
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
              minLength={INPUT_LENGTH.SECURITY_CODE}
              maxLength={INPUT_LENGTH.SECURITY_CODE}
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
          maxLength={INPUT_LENGTH.SECURITY_CODE}
          targetKey="securityCode"
        />
      )}
    </>
  );
});

SecurityCodeInput.defaultProps = {
  isValidSecurityCode: false,
};

SecurityCodeInput.propTypes = {
  isValidSecurityCode: PropTypes.bool.isRequired,
};

export default SecurityCodeInput;
