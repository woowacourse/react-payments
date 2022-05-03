import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input';
import InputLabel from '../InputLabel';
import { numberRegex } from '../../constant/regularExpression';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${props => props.width};
  gap: 7px;
`;

const InputBody = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const InvalidMessage = styled.span`
  position: absolute;
  word-break: normal;
  bottom: -14px;
  width: 300px;
  overflow: visible;

  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: red;
`;

function PasswordInput({ password, handleInputChange, isValid, invalidMessage, width }) {
  const isValidPassword = password => {
    return numberRegex.test(password);
  };

  const isAllEmptyValue = () => {
    return password.every(word => !word);
  };

  return (
    <Container width={width}>
      <InputLabel label="보안 코드(CVC/CVV)" />
      <InputBody>
        {password.map((word, index) => (
          <Input
            key={index}
            value={word}
            onChange={handleInputChange}
            type="password"
            width="43px"
            maxLength={1}
            isValid={isValidPassword(word)}
            name={index}
          />
        ))}
        {Array.from({ length: 2 }).map((_, index) => (
          <Input
            key={index}
            type="password"
            defaultValue="."
            width="43px"
            maxLength={1}
            disabled={true}
            backgroundColor="#fff"
          />
        ))}
      </InputBody>
      <InvalidMessage>{isValid || isAllEmptyValue() ? '' : invalidMessage}</InvalidMessage>
    </Container>
  );
}

PasswordInput.propTypes = {
  password: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  invalidMessage: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default PasswordInput;
