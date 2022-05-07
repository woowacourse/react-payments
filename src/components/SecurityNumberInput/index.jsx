import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BlockInput } from '../Input';
import InputLabel from '../InputLabel';
import Tooltip from '../Tooltip';
import MESSAGE from '../../constant/message';

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

function SecurityNumberInput({
  securityNumber,
  handleInputChange,
  isValid,
  invalidMessage,
  width,
}) {
  return (
    <Container width={width}>
      <InputLabel label="보안 코드(CVC/CVV)" />
      <InputBody>
        <BlockInput
          style={{
            width: '84px',
          }}
          value={securityNumber}
          onChange={handleInputChange}
          type="password"
          maxLength="3"
          isValid={isValid}
        />
        <Tooltip message={MESSAGE.TOOLTIP_SECURITY_NUMBER} margin="0 0 0 11px" />
      </InputBody>
      <InvalidMessage>{isValid || !securityNumber ? '' : invalidMessage}</InvalidMessage>
    </Container>
  );
}

SecurityNumberInput.propTypes = {
  securityNumber: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  invalidMessage: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default SecurityNumberInput;
