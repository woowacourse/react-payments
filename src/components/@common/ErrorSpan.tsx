import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

function ErrorSpan({ children }: Props) {
  return <StyleSpan>{children}</StyleSpan>;
}

export default ErrorSpan;

const StyleSpan = styled.label`
  font-size: 13px;
  font-weight: 600;
  line-height: 21px;
  color: red;
`;
