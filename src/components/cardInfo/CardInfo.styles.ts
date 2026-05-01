import styled from "@emotion/styled";


export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 45px 30px 20px 30px;
  gap: 8px;
`;

export const CardInfoSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const InfoInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
`;

export const ErrorMessage = styled.p`
  padding: 0;
  margin: 8px 0;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: rgba(255, 61, 61, 1);
`;
