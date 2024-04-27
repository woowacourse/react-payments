import { styled } from 'styled-components';

export const CvcNumberWrapper = styled.div<{ $backgroundColor: string; $padding: string }>`
  background-color: ${(props) =>
    props.$backgroundColor !== '' ? props.$backgroundColor : '#333333'};
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 24px;
`;

export const CvcNumberText = styled.span`
  margin-right: 16px;
`;
