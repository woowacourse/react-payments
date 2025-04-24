import styled from '@emotion/styled';

export const CardInfoMainSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardInfoTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;

export const CardInfoDescription = styled.span`
  color: #8b95a1;
  font-size: 9.5px;
  font-weight: 400;
`;

export const CardInfoSubSection = styled.div`
  min-height: 80px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardInfoSubTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

export const CardInfoInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

export const CardInfoError = styled.span`
  color: #ff3d3d;
  font-size: 9.5px;
  font-weight: 400;
`;

export const CardSelection = styled.select`
  width: 100%;
  padding: 8px;
`;
