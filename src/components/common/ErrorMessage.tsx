import styled from 'styled-components';

const ErrorMessage = ({ message }: { message: string }) => {
  return <ErrorMessageWrapper>{message}</ErrorMessageWrapper>;
};

const ErrorMessageWrapper = styled.p`
  color: red;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  padding: 4px 0 18px 0;
`;

export default ErrorMessage;
