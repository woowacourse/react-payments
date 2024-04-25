import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  width: 21.2rem;
  height: 13.2rem;
`;

export const CardFront = styled.div<{ $isFocusCVCPreview: boolean; $brandColor: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0.8rem 1.2rem;
  box-shadow: 0.3rem 0.3rem 0.5rem 0rem ${(props) => props.theme.color.dropShadow};
  border-radius: 0.4rem;

  z-index: ${(props) => (props.$isFocusCVCPreview ? -1 : 2)};
  background-color: ${(props) => props.$brandColor};
`;

export const CardBack = styled.div<{ $isFocusCVCPreview: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 0.3rem 0.3rem 0.5rem 0rem ${(props) => props.theme.color.dropShadow};
  border-radius: 0.4rem;

  z-index: ${(props) => (props.$isFocusCVCPreview ? 2 : -1)};
  background-color: ${(props) => props.theme.color.lightGray};
`;

export const CVCNumber = styled.p<{ $brandColor: string }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  height: 2.4rem;
  padding-right: 1.6rem;

  top: 8.4rem;
  left: 0;
  background-color: ${(props) => props.$brandColor};
  ${(props) => props.theme.typography.paragraph2};
  color: ${(props) => props.theme.color.white};
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
  margin: 1.4rem 1.3rem 0.4rem 0.5rem;
`;

export const CardNumberContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const UserInformation = styled.div<{ $typo: string }>`
  flex: 1;
  ${(props) => props.$typo};
  color: ${(props) => props.theme.color.white};
`;
