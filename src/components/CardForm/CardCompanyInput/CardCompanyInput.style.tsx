import styled from 'styled-components';

export const CardCompanyInputContainer = styled.div`
  position: relative;
  padding-bottom: 22px;
`;

export const SelectedCardCompanyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.primary.light};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const CardCompanyOptionList = styled.ul`
  z-index: 999;
  position: absolute;
  top: 38px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.primary.light};
  border-radius: 2px;
  background: #ffffff;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const CardCompanyOption = styled.li`
  width: 100%;
  padding: 8px;
  height: 32px;

  &:hover {
    background: #eeeeee;
  }
`;
