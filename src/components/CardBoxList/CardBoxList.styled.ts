import styled from 'styled-components';

export const CardBoxList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const CardBoxItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

export const NicknameParagraph = styled.p`
  margin-top: 12px;

  font-size: 14px;
  font-weight: 700;
`;
