import * as S from './CardPreview.styled';

const BackCardPreview = ({ cvc }: { cvc: string }) => {
  return (
    <S.BackCardPreviewLayout>
      <S.BlankBox />
      <S.CVCWrapper>{cvc}</S.CVCWrapper>
    </S.BackCardPreviewLayout>
  );
};

export default BackCardPreview;
