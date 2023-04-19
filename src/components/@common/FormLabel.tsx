import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

function FormLabel({ children }: Props) {
  return <StyleLabel>{children}</StyleLabel>;
}

export default FormLabel;

const StyleLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;
