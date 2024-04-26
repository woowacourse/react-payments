import styled from 'styled-components';

export const StyledPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;

  width: 37.6rem;
  height: 70rem;
  margin: 5rem auto;
  padding: 18.8rem 3.2rem 0 3.2rem;
  border: 0.1rem solid ${(props) => props.theme.color.gray};
  border-radius: 0.4rem;

  background-color: ${(props) => props.theme.color.white};
`;

export const StyledRegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2.5rem;

  width: 32rem;

  & button {
    position: static;

    border-radius: 5px;
  }
`;

export const StyledImage = styled.img`
  width: 7.6rem;
  height: 7.6rem;
`;

export const StyledPhrase = styled.p`
  text-align: center;

  width: 100%;
  height: 10rem;

  ${(props) => props.theme.typography.phrase};
  color: ${(props) => props.theme.color.darkNavy};
`;
