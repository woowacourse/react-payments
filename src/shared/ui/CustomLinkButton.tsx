import { useNavigate } from 'react-router';
import * as S from './CustomLinkButton.styles';
import { SerializedStyles } from '@emotion/react';

interface CustomLinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  path: string;
  css?: SerializedStyles;
}

export default function CustomLinkButton({ path, css, onClick }: CustomLinkButtonProps) {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    navigate(path);
  };

  return (
    <S.CustomLinkButton onClick={handleLinkClick} css={css} type='button'>
      확인
    </S.CustomLinkButton>
  );
}
