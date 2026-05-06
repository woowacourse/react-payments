import { css } from '@emotion/react';
import { Outlet } from 'react-router';

export default function MobileLayout() {
  return <div css={mobileLayout}><Outlet /></div>;
}

const mobileLayout = css`
  display: flex;
  flex-direction: column;
  width: 376px;
  height: 700px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px 30px;
  overflow: auto;
  border-radius: 20px;
  position: relative;
`;
