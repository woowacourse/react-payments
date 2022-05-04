import styled from 'styled-components';
import GoBackIcon from '../assets/images/goBackIcon.svg';

const StyledIconContainer = styled.div`
  position: relative;
  left: -10px;
  bottom: -2px;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export default function GoBackButton() {
  return (
    <StyledIconContainer
      onClick={() => {
        alert('🔨 공사 중');
      }}>
      <img src={GoBackIcon} alt="Go Back" />
    </StyledIconContainer>
  );
}
