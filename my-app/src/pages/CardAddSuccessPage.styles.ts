import styled from '@emotion/styled';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 25px;
`;

export const SuccessImage = styled.img`
  width: 72px;
  height: 72px;
`;

export const SuccessMessage = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #353c49;
  text-align: center;
  line-height: 1.5;
`;

export const SubmitButton = styled.button`
  width: 320px;
  border-radius: 5px;
  height: 44px;
  padding: 8px;
  font-size: 15px;
  color: #ffffff;
  background-color: #333333;
  border: none;
  cursor: pointer;
`;
