import styled from 'styled-components';

export const CVCInputLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const GuideLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 10px;
  align-items: center;
`;

export const GuideIcon = styled.div`
  width: 100%;
  position: relative;
  color: #969696;
  border: 1px solid #969696;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const GuideTextLayout = styled.div`
  position: relative;
`;

export const GuideText = styled.div`
  position: absolute;
  padding: 5px 10px;
  border: 1px solid #ecebf1;
  top: -24px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  color: rgba(94, 94, 94);
`;
