import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin: 5px 0;
`;

export const ButtonContainer = styled.div`
  width: 320px;
`;

export const IconImageContainer = styled.div`
  width: 76px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(51, 51, 51, 1);
  border-radius: 50%;
`;
