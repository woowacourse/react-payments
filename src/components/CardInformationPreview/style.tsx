import styled from 'styled-components';

export const StyledCardInformationPreview = styled.section<{
  $isBackOfCard: boolean;
  $selectedCardColor: string;
}>`
  ${(props) =>
    props.$isBackOfCard
      ? `position: relative;`
      : `display: flex;
  flex-direction: column;`}

  width: 21.2rem;
  height: 13.2rem;
  ${(props) => (props.$isBackOfCard ? '' : `padding: 0.8rem 1.2rem;`)}

  background-color: ${(props) => props.$selectedCardColor};

  box-shadow: 0.3rem 0.3rem 0.5rem 0rem ${(props) => props.theme.color.dropShadow};
  border-radius: 0.4rem;

  cursor: pointer;
`;

export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const StyledCardImg = styled.img`
  width: 3.6rem;
  height: 2.2rem;
`;

export const StyledUserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
  height: 100%;
  margin: 1.4rem 1.3rem 0.4rem 0.5rem;
`;

export const StyledCardNumberContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;

  width: 100%;
`;

export const StyledUserInfomation = styled.div<{ $typo: string }>`
  flex: 1;

  ${(props) => props.$typo};
  color: ${(props) => props.theme.color.white};
`;

export const StyledCVCContainer = styled.div`
  position: absolute;
  bottom: 2.4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 2.4rem;

  background-color: ${(props) => props.theme.color.ocher};
`;

export const StyledCVC = styled.p`
  width: 2rem;
  margin-right: 1.6rem;

  ${(props) => props.theme.typography.cardCVC};
  color: ${(props) => props.theme.color.white};
`;
