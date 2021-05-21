import styled from 'styled-components';

const MessageContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  justify-content: center;
  align-items: flex-end;
`;

const CardPreviewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5rem 0 2.2rem 0;
  align-items: center;
`;

const CardNickNameFormContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export { MessageContainer, CardPreviewContainer, CardNickNameFormContainer };
