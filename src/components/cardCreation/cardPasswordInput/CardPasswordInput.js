import PropTypes from 'prop-types';
import { memo, useRef, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';
import { CARD_PASSWORD_INPUT } from '../../../constants/input';
import { useState } from 'react';
import VirtualKeyboardModal from '../virtualKeyboardModal/VirtualKeyboardModal';

const transparentInputStyles = {
  color: COLOR.MINT,
  fontSize: '24px',
  textAlign: 'center',
};

const isValidInput = cardPassword => {
  return Object.values(cardPassword).every(
    cardPassword => cardPassword.length === CARD_PASSWORD_INPUT.LENGTH && !isNaN(cardPassword)
  );
};

const CardPasswordInput = ({ cardPassword, setCardPassword, isValidCardPassword, setValidCardPassword }) => {
  const [isModalOpened, setModalOpen] = useState(false);
  const [pressedKeyList, setPressedKeyList] = useState([]);

  const $input1 = useRef(null);

  useEffect(() => {
    const lastPressedKey = pressedKeyList.slice(-1)[0] || '';

    switch (lastPressedKey) {
      case '확인':
        setModalOpen(false);

        break;
      case '전체삭제':
        setCardPassword({
          [CARD_PASSWORD_INPUT.NAME.FIRST]: '',
          [CARD_PASSWORD_INPUT.NAME.SECOND]: '',
        });

        break;
      default:
        if (cardPassword[CARD_PASSWORD_INPUT.NAME.FIRST] === '') {
          setCardPassword(prevState => ({ ...prevState, [CARD_PASSWORD_INPUT.NAME.FIRST]: lastPressedKey }));
        } else if (cardPassword[CARD_PASSWORD_INPUT.NAME.SECOND] === '') {
          setCardPassword(prevState => ({ ...prevState, [CARD_PASSWORD_INPUT.NAME.SECOND]: lastPressedKey }));
        } else {
          setModalOpen(false);
        }

        break;
    }
  }, [pressedKeyList]);

  useEffect(() => {
    setValidCardPassword(isValidInput(cardPassword));

    if (Object.values(cardPassword).every(password => password !== '')) {
      setModalOpen(false);
    }
  }, [setValidCardPassword, cardPassword]);

  const handleInputChange = ({ target }) => {
    setCardPassword(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  return (
    <>
      <div>
        <Styled.InputLabelContainer>카드 비밀번호 {isValidCardPassword && '✔️'}</Styled.InputLabelContainer>
        <Styled.Container>
          <Styled.InputContainer isValidInput={isValidCardPassword} onClick={() => setModalOpen(true)}>
            <TransparentInput
              type="password"
              name={CARD_PASSWORD_INPUT.NAME.FIRST}
              minLength={CARD_PASSWORD_INPUT.LENGTH}
              maxLength={CARD_PASSWORD_INPUT.LENGTH}
              value={cardPassword[CARD_PASSWORD_INPUT.NAME.FIRST]}
              onChange={handleInputChange}
              styles={transparentInputStyles}
              disabled
            />
          </Styled.InputContainer>
          <Styled.InputContainer isValidInput={isValidCardPassword} onClick={() => setModalOpen(true)}>
            <TransparentInput
              type="password"
              name={CARD_PASSWORD_INPUT.NAME.SECOND}
              minLength={CARD_PASSWORD_INPUT.LENGTH}
              maxLength={CARD_PASSWORD_INPUT.LENGTH}
              innerRef={$input1}
              value={cardPassword[CARD_PASSWORD_INPUT.NAME.SECOND]}
              onChange={handleInputChange}
              styles={transparentInputStyles}
              disabled
            />
          </Styled.InputContainer>

          {[...Array(2)].map((_, idx) => (
            <Styled.CircleContainer key={`password-${idx + 2}`}>
              <Circle styles={{ backgroundColor: COLOR.MINT }} />
            </Styled.CircleContainer>
          ))}
        </Styled.Container>
      </div>
      {isModalOpened && (
        <VirtualKeyboardModal closeModal={() => setModalOpen(false)} setPressedKeyList={setPressedKeyList} />
      )}
    </>
  );
};

CardPasswordInput.propTypes = {
  cardPassword: PropTypes.object.isRequired,
  setCardPassword: PropTypes.func.isRequired,
  isValidCardPassword: PropTypes.bool.isRequired,
  setValidCardPassword: PropTypes.func.isRequired,
};

export default memo(CardPasswordInput);
