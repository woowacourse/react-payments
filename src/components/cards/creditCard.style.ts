import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  margin-bottom: 45px;

  width: 100%;
`;

export const CardContainer = styled.div<{ $backgroundColor: string; $padding: string }>`
  background-color: ${(props) =>
    props.$backgroundColor !== '' ? props.$backgroundColor : '#333333'};
  width: 212px;
  height: 132px;
  padding: ${(props) => (props.$padding ? props.$padding : '0')};
  border-radius: 4px;
  position: relative;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

export const NumbersContainer = styled.div`
  display: flex;
  gap: 10px;
  min-height: 20px;
`;

export const NumbersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  min-width: 32px;
`;

export const Text = styled.span`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

export const Dot = styled.span`
  width: 4px;
  height: 4px;

  background-color: #fff;
  border-radius: 50%;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardHeaderContentWrapper = styled.div`
  width: 36px;
  height: 22px;
`;

export const IcChip = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: #ddcd78;
`;

export const CardBrand = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 14px;
  margin-left: 5px;
`;

export const CvcNumberWrapper = styled.div<{ $backgroundColor: string; $padding: string }>`
  background-color: ${(props) =>
    props.$backgroundColor !== '' ? props.$backgroundColor : '#333333'};
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 24px;
`;

export const CvcNumberText = styled(Text)`
  margin-right: 16px;
`;
