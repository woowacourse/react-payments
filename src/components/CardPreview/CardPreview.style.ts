import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const CardContainer = styled.div<{ $bgColor: string }>`
  position: relative;

  width: 212px;
  height: 132px;

  perspective: 500px;
  transform-style: preserve-3d;

  & > div {
    position: absolute;

    width: 100%;
    height: 100%;

    box-shadow: 3px 3px 5px 0px #00000040;

    backface-visibility: hidden;
    transition: transform 1.2s ease-in-out;
    background-color: ${(props) => props.$bgColor ?? '#333333'};
  }
`;

export const Front = styled.div<{ $isFlip: boolean }>`
  padding: 8px 12px;

  border-radius: 4px;

  transform: ${(props) => props.$isFlip && 'rotateY(180deg)'};
`;

export const Back = styled.div<{ $isFlip: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  border-radius: 4px;

  transform: ${(props) => !props.$isFlip && 'rotateY(-180deg)'};
`;

export const MagneticStripe = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 24px;

  padding: 2px 16px;

  margin-bottom: 24px;
  background-color: #cbba64;
`;

export const CVCNumber = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #fff;
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
