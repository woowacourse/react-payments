import * as S from 'styles.js';

export default function PageTitle({ children, onClickPrev, hasPrevButton }) {
  return (
    <S.PageTitleBox>
      {hasPrevButton && <S.PrevButton onClick={onClickPrev}>&#8249;</S.PrevButton>}
      <S.PageTitle>{children}</S.PageTitle>
    </S.PageTitleBox>
  );
}
