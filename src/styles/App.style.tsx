import styled from 'styled-components';

export const Container = styled.div`
  width: 37.6rem;
  min-height: 70rem;
  margin: 5rem auto;

  background-color: ${(props) => props.theme.color.white};
  border: 0.1rem solid ${(props) => props.theme.color.gray};
  border-radius: 0.4rem;
`;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;

  width: 100%;
  height: 100%;
  padding: 7.7rem 3.2rem 2rem 3.2rem;
`;

export const Submit = styled.div`
  position: sticky;
  width: 100%;
  height: 4.4rem;
  bottom: 0;
`;
