import styled from 'styled-components';

const StyledTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

const Title = ({value}: {value: string}) => {
  return <StyledTitle>{value}</StyledTitle>;
};

export default Title;
