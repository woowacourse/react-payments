import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { HeaderProps } from './type';

function Header({ title, hasBackButton }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <S.HeaderLayout>
      {hasBackButton && (
        <S.BackButton type="button" onClick={() => navigate(-1)}>
          {`${'<'}`}
        </S.BackButton>
      )}
      <S.Title>{title}</S.Title>
    </S.HeaderLayout>
  );
}
export default Header;
