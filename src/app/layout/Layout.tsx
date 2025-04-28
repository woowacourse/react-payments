import { Outlet } from 'react-router';
import * as S from './Layout.styles';

export default function Layout() {
  return (
    <S.LayoutContainer>
      <Outlet />
    </S.LayoutContainer>
  );
}
