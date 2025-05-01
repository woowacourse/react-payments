import styled from 'styled-components';
import AnnounceSection from '../announceSecton/AnnounceSection';

const StyledFrame = styled.div`
  display: inline-flex;
  padding: 77px 30px 19px 31px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  background-color: white;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
`;

export default function AnnounceContainer() {
  return (
    <StyledFrame>
      <AnnounceSection />
    </StyledFrame>
  );
}
