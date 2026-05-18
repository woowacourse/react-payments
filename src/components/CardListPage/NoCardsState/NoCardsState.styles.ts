import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 20px;
  width: 100%;
  max-width: 376px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
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

export const Heading = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 8px 0 0 0;
  color: rgba(20, 20, 20, 1);
`;

export const Description = styled.p`
  font-size: 13px;
  margin: 0;
  color: rgba(140, 140, 140, 1);
`;

export const AddButton = styled.button`
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
