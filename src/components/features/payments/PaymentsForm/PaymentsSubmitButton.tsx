import styled from 'styled-components';
import { FooterButton } from '../../../common/FooterButton';

function PaymentsSubmitButton({
  handleSubmit,
}: {
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <SubmitButtonWrapper>
      <FooterButton size="large" onClick={handleSubmit}>
        확인
      </FooterButton>
    </SubmitButtonWrapper>
  );
}

const SubmitButtonWrapper = styled.div`
  position: sticky;
  bottom: 20px;
`;

export default PaymentsSubmitButton;
