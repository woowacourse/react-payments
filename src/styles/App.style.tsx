import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 37.6rem;
  min-height: 70rem;

  background-color: ${(props) => props.theme.color.white};
  border: 0.1rem solid ${(props) => props.theme.color.gray};
  border-radius: 0.4rem;
`;
