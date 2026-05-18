import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  width: 100%;
  max-width: 376px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const EmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 64px;
`;

export const CardPlaceholder = styled.div`
  width: 200px;
  height: 130px;
  border-radius: 8px;
  border: 2px dashed rgba(200, 200, 200, 1);
  background: rgba(241, 241, 241, 1);
`;

export const EmptyHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 8px 0 0 0;
  color: rgba(20, 20, 20, 1);
`;

export const EmptyDescription = styled.p`
  font-size: 13px;
  margin: 0;
  color: rgba(140, 140, 140, 1);
`;

export const SolidAddButton = styled.button`
  width: 100%;
  padding: 18px 0;
  margin-top: 12px;
  background: rgba(45, 45, 45, 1);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: rgba(20, 20, 20, 1);
  }
`;

export const DashedAddButton = styled.button`
  width: 100%;
  padding: 16px 0;
  background: transparent;
  color: rgba(80, 80, 80, 1);
  border: 1.5px dashed rgba(200, 200, 200, 1);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-color: rgba(140, 140, 140, 1);
    color: rgba(20, 20, 20, 1);
  }
`;

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
