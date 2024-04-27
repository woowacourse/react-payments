import styled from "styled-components";

export const ConfirmPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const ConfirmPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 376px;
  gap: 25px;
`;

export const ConfirmImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 50%;
`;

export const ConfirmImg = styled.img`
  width: 32px;
  height: 20px;
`;

export const TextWrapper = styled.div``;
