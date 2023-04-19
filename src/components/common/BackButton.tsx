import styled from 'styled-components';

const StyledBackButton = styled.button`
  width: 10px;
  height: 10px;
  border-left: 1.5px solid black;
  border-bottom: 1.5px solid black;
  transform: rotate(45deg);
`;

export const BackButton = () => {
  return <StyledBackButton />;
};
