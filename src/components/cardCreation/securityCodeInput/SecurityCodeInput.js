import PropTypes from 'prop-types';
import { useState } from 'react';
import { memo, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { SECURITY_CODE_INPUT } from '../../../constants/input';
import { TransparentInput } from '../../commons/input/TransparentInput';
import { QuestionDescription } from '../../commons/questionDescription/QuestionDescription';
import VirtualKeyboardModal from '../virtualKeyboardModal/VirtualKeyboardModal';
import Styled from './SecurityCodeInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  fontSize: '24px',
  textAlign: 'center',
};

const SecurityCodeInput = ({ securityCode, setSecurityCode, isValidSecurityCode }) => {
  const [isModalOpened, setModalOpen] = useState(false);
  const [pressedKeyList, setPressedKeyList] = useState([]);

  useEffect(() => {
    const lastPressedKey = pressedKeyList.slice(-1)[0] || '';

    switch (lastPressedKey) {
      case '확인':
        setModalOpen(false);

        break;
      case '전체삭제':
        setSecurityCode('');

        break;
      default:
        securityCode.length < SECURITY_CODE_INPUT.LENGTH
          ? setSecurityCode(prevState => prevState + lastPressedKey)
          : setModalOpen(false);

        break;
    }
  }, [pressedKeyList]);

  return (
    <>
      <div>
        <Styled.InputLabelContainer>보안 코드(CVC/CVV) {isValidSecurityCode && '✔️'}</Styled.InputLabelContainer>
        <Styled.Container>
          <Styled.InputContainer isValidInput={isValidSecurityCode} onClick={() => setModalOpen(true)}>
            <TransparentInput
              type="password"
              minLength={SECURITY_CODE_INPUT.LENGTH}
              maxLength={SECURITY_CODE_INPUT.LENGTH}
              value={securityCode}
              onChange={({ target }) => setSecurityCode(target.value)}
              styles={transparentInputStyles}
              disabled
            />
          </Styled.InputContainer>
          <QuestionDescription />
        </Styled.Container>
      </div>
      {isModalOpened && (
        <VirtualKeyboardModal closeModal={() => setModalOpen(false)} setPressedKeyList={setPressedKeyList} />
      )}
    </>
  );
};

SecurityCodeInput.propTypes = {
  securityCode: PropTypes.string.isRequired,
  setSecurityCode: PropTypes.func.isRequired,
  isValidSecurityCode: PropTypes.bool.isRequired,
};

export default memo(SecurityCodeInput);
