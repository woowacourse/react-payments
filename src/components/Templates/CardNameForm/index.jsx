import styled from 'styled-components';
import SubmitButton from '../../Atoms/SubmitButton';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 234px;
  width: 100%;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

function CardNameForm({ onCardNameSubmit, children }) {
  return (
    <Form onSubmit={onCardNameSubmit}>
      {children}
      <SubmitButtonWrapper>
        <SubmitButton>건너뛰기</SubmitButton>
      </SubmitButtonWrapper>
    </Form>
  );
}

export default CardNameForm;
