import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
  width: 37.6rem;
  height: 70rem;
  margin: 5rem auto;
  padding: 7.7rem 3.2rem 2rem 3.2rem;

  background-color: ${(props) => props.theme.color.white};
  border: 0.1rem solid ${(props) => props.theme.color.gray};
  border-radius: 0.4rem;
`;
