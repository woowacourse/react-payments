import styled from 'styled-components';

export const CardRegistrationCompleteLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  border-radius: 76px;
  background: ${({ theme }) => theme.color.primary.main};
`;

export const CardRegistrationMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  line-height: 36.2px;
  text-align: center;
`;

export const ConfirmButton = styled.button`
  width: 320px;
  height: 44px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.primary.main};
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
`;
