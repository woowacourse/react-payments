import styled from '@emotion/styled';

export const CardPreviewContainer = styled.div`
  perspective: 1000px;
`;

export const CardPreviewWrapper = styled.div<{ backgroundColor?: string; isFlipped: boolean }>`
  width: 212px;
  height: 132px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#333'};
  border-radius: 4px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 8px 12px;
  color: #fff;
  font-size: 18px;
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  color: #fff;
  font-size: 18px;
`;

export const MagneticStrip = styled.div`
  width: 100%;
  height: 24px;
  background-color: #2c2c2c;
  margin-top: 16px;
`;

export const CVCWrapper = styled.div`
  margin-top: 16px;
  padding: 0 12px;
`;

export const CVCStrip = styled.div`
  background-color: #fff;
  color: #000;
  padding: 4px 8px;
  text-align: right;
  font-size: 14px;
  width: 60px;
  margin-left: auto;
`;

export const CardPreviewTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ICChip = styled.div`
  width: 36px;
  height: 22px;
  background-color: #ddcd78;
  border: 0.5px solid #ddcd78;
  border-radius: 2.5px;
`;

export const CardPreviewMiddle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  text-align: center;
  vertical-align: middle;
`;

export const CardPreviewNumber = styled.span`
  flex: 1;
`;
