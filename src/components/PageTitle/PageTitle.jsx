import PrevButton from 'components/PrevButton/PrevButton';
import * as S from 'styles.js';

export default function PageTitle({ children, onClickPrev, hasPrevButton }) {
  return (
    <S.PageTitleBox>
      {hasPrevButton && <PrevButton onClick={onClickPrev}>&#8249;</PrevButton>}
      <S.PageTitle>{children}</S.PageTitle>
    </S.PageTitleBox>
  );
}
