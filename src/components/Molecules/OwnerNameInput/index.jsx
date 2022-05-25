import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BlockInput } from 'components/Atoms/Input';
import InputLabel from 'components/Atoms/InputLabel';
import { PLACEHOLDER } from 'constant';
import { CLASS } from 'constant/selector';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${props => props.width};
  gap: 7px;
`;

const InputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.width || '100%'};
`;

const LengthChecker = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.05em;
  color: #525252;
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

function OwnerNameInput({ ownerName, handleInputChange, isValid, invalidMessage, width }) {
  return (
    <Container width={width}>
      <InputHeader>
        <InputLabel label="카드 소유자 이름(선택)" />
        <LengthChecker>{ownerName.length} / 30</LengthChecker>
      </InputHeader>
      <BlockInput
        style={{
          width: '100%',
          textAlign: 'left',
        }}
        value={ownerName}
        onChange={handleInputChange}
        type="text"
        placeholder={PLACEHOLDER.OWNER_NAME}
        maxLength="30"
        isValid={isValid}
      />
      {isValid || !ownerName || <InvalidMessage>{invalidMessage}</InvalidMessage>}
    </Container>
  );
}

OwnerNameInput.propTypes = {
  ownerName: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  invalidMessage: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default OwnerNameInput;
