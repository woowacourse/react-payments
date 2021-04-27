import PropTypes from 'prop-types';
import { memo, useRef, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';
import { CARD_PASSWORD_INPUT } from '../../../constants/input';

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

const CardPasswordInput = memo(({ cardPassword, setCardPassword, isValidCardPassword, setValidCardPassword }) => {
  const $input1 = useRef(null);

  useEffect(() => {
    setValidCardPassword(isValidInput(cardPassword));
  }, [setValidCardPassword, cardPassword]);

  const handleInputChange = ({ target }) => {
    setCardPassword(prevState => ({ ...prevState, [target.name]: target.value }));

    if (
      target.name === CARD_PASSWORD_INPUT.NAME.FIRST && //
      target.value.length === CARD_PASSWORD_INPUT.LENGTH
    ) {
      $input1.current.focus();
    }
  };

  return (
    <div>
      <Styled.InputLabelContainer>카드 비밀번호 {isValidCardPassword && '✔️'}</Styled.InputLabelContainer>
      <Styled.Container>
        <Styled.InputContainer isValidInput={isValidCardPassword}>
          <TransparentInput
            type="password"
            name={CARD_PASSWORD_INPUT.NAME.FIRST}
            minLength={CARD_PASSWORD_INPUT.LENGTH}
            maxLength={CARD_PASSWORD_INPUT.LENGTH}
            value={cardPassword[CARD_PASSWORD_INPUT.NAME.FIRST]}
            onChange={handleInputChange}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        <Styled.InputContainer isValidInput={isValidCardPassword}>
          <TransparentInput
            type="password"
            name={CARD_PASSWORD_INPUT.NAME.SECOND}
            minLength={CARD_PASSWORD_INPUT.LENGTH}
            maxLength={CARD_PASSWORD_INPUT.LENGTH}
            innerRef={$input1}
            value={cardPassword[CARD_PASSWORD_INPUT.NAME.SECOND]}
            onChange={handleInputChange}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>

        {[...Array(2)].map((_, idx) => (
          <Styled.CircleContainer key={`password-${idx + 2}`}>
            <Circle styles={{ backgroundColor: COLOR.MINT }} />
          </Styled.CircleContainer>
        ))}
      </Styled.Container>
    </div>
  );
});

CardPasswordInput.propTypes = {
  cardPassword: PropTypes.object.isRequired,
  setCardPassword: PropTypes.func.isRequired,
  isValidCardPassword: PropTypes.bool.isRequired,
  setValidCardPassword: PropTypes.func.isRequired,
};

export default CardPasswordInput;
