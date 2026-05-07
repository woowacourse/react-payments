import styled from 'styled-components';

const StyledDescription = styled.span`
  font-size: 9.5px;
  font-weight: 400;
  color: #8b95a1;
`;

const Description = ({value}: {value: string}) => {
  return <StyledDescription>{value}</StyledDescription>;
};

export default Description;
