import styled from 'styled-components';

export const FrontOfTheCard = styled.section<{
  $selectedCardColor: string;
}>`
  display: flex;
  flex-direction: column;

  width: 21.2rem;
  height: 13.2rem;
  padding: 0.8rem 1.2rem;

  background-color: ${(props) => props.$selectedCardColor};

  box-shadow: 0.3rem 0.3rem 0.5rem 0rem ${(props) => props.theme.color.dropShadow};
  border-radius: 0.4rem;

  cursor: pointer;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const CardImg = styled.img`
  width: 3.6rem;
  height: 2.2rem;
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
  height: 100%;
  margin: 1.4rem 1.3rem 0.4rem 0.5rem;
`;

export const CardNumberContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;

  width: 100%;
`;

export const UserInfomation = styled.div<{ $typo: string }>`
  flex: 1;

  ${(props) => props.$typo};
  color: ${(props) => props.theme.color.white};
`;
