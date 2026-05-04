import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #0a0d13;
`;

const Label = ({ value, htmlFor }: { value: string; htmlFor: string }) => {
  return <StyledLabel htmlFor={htmlFor}>{value}</StyledLabel>;
};

export default Label;
