import styled from 'styled-components';

export const CardCompanyInputContainer = styled.div`
  position: relative;
  padding-bottom: 22px;
`;

export const SelectedCardCompanyBox = styled.div<{ $isDefault: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.primary.light};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;

  p {
    color: ${(props) =>
      props.$isDefault ? ({ theme }) => theme.color.primary.light : ({ theme }) => theme.color.primary.dark};
  }
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
  height: 32px;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }
`;

export const CardCompanyOptionDefault = styled.p`
  color: ${({ theme }) => theme.color.primary.light};
`;

export const CardCompanyOptionLabel = styled.label`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 8px;
`;
