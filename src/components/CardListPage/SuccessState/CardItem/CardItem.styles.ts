import styled from '@emotion/styled';

export const Row = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(247, 247, 247, 1);
  border-radius: 8px;
  list-style: none;
`;

export const CardThumb = styled.div<{ color: string }>`
  width: 64px;
  height: 40px;
  border-radius: 6px;
  background: ${({ color }) => color};
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;

export const BrandLabel = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: rgba(20, 20, 20, 1);
`;

export const CardNumber = styled.span`
  font-size: 13px;
  color: rgba(110, 110, 110, 1);
`;

export const ExpireDate = styled.span`
  font-size: 12px;
  color: rgba(150, 150, 150, 1);
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: rgba(150, 150, 150, 1);
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;

  &:hover {
    color: rgba(80, 80, 80, 1);
  }
`;
