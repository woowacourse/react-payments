import styled from '@emotion/styled';

interface TitleProps {
  main: string;
  caption?: string;
}

function Title({ main, caption }: TitleProps) {
  return (
    <S.AnnouncementContainer>
      <S.MainTitle>{main}</S.MainTitle>
      <S.Caption>{caption ?? ''}</S.Caption>
    </S.AnnouncementContainer>
  );
}

export default Title;

const S = {
  AnnouncementContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  MainTitle: styled.p`
    margin-top: 16px;
    font-size: 18px;
    font-weight: 700;
  `,

  Caption: styled.p`
    color: #8b95a1;
    font-size: 9.5px;
    margin-bottom: 16px;
  `,
};
