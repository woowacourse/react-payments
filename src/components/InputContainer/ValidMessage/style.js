import styled from 'styled-components';

const MessageBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Message = styled.span`
  font-weight: 400;
  color: #f24156;
  overflow: visible;
`;

const InputLength = styled.span`
  font-weight: 600;
  word-spacing: -0.05rem;
`;

export { MessageBar, Message, InputLength };
