import { useNavigate } from 'react-router';
import * as S from './CustomLinkButton.styles';
import { SerializedStyles } from '@emotion/react';

export default function CustomLinkButton({ path, css }: { path: string; css?: SerializedStyles }) {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(`${path}`);
  };
  return (
    <S.CustomLinkButton onClick={handleLinkClick} css={css} type='button'>
      확인
    </S.CustomLinkButton>
  );
}
