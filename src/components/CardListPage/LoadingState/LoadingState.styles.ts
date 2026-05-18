import styled from '@emotion/styled';

const skeletonColor = 'rgba(218, 218, 218, 1)';
const placeholderColor = 'rgba(241, 241, 241, 1)';

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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  padding: 16px;
  align-items: center;
  border-radius: 4px;
`;

export const CardThumb = styled.div`
  width: 90px;
  height: 60px;
  border-radius: 6px;
  background: ${skeletonColor};
  flex-shrink: 0;
`;

export const Lines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const Line = styled.div<{ width: string }>`
  height: 12px;
  width: ${({ width }) => width};
  border-radius: 4px;
  background: ${skeletonColor};
`;

export const FooterPlaceholder = styled.div`
  width: 100%;
  height: 69px;
  background: ${placeholderColor};
  border-radius: 4px;
`;
