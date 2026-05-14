import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #0a0d13;
`;

const Label = ({value}: {value: string}) => {
  return <StyledLabel>{value}</StyledLabel>;
};

export default Label;
