import styled from 'styled-components';

export const BackOfTheCard = styled.section`
  position: relative;

  width: 21.2rem;
  height: 13.2rem;

  background-color: ${(props) => props.theme.color.brightGray};

  box-shadow: 0.3rem 0.3rem 0.5rem 0rem ${(props) => props.theme.color.dropShadow};
  border-radius: 0.4rem;

  cursor: pointer;
`;

export const CVCContainer = styled.div`
  position: absolute;
  bottom: 2.4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 2.4rem;

  background-color: ${(props) => props.theme.color.ocher};
`;

export const CVC = styled.p`
  width: 2rem;
  margin-right: 1.6rem;

  ${(props) => props.theme.typography.cardCVC};
  color: ${(props) => props.theme.color.white};
`;
