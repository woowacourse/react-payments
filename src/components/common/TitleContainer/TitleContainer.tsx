import * as S from './TitleContainer.style';

interface TitleContainerProps {
  title: string;
  subTitle?: string;
}

function TitleContainer({ title, subTitle }: TitleContainerProps) {
  return (
    <S.TitleContainer>
      <S.Title>{title}</S.Title>
      {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
    </S.TitleContainer>
  );
}

export default TitleContainer;
