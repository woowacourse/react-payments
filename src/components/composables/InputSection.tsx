import { PropsWithChildren } from 'react';
import * as S from '../registerSection/inputSection.style';

type InfoProps = {
  title: string;
  description?: string;
  inputTitle: string;
};

export default function InputSection({
  title,
  description,
  inputTitle,
  children,
}: PropsWithChildren<InfoProps>) {
  return (
    <S.Section>
      <S.TitleDescriptionWrapper>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
        </S.TitleContainer>
        {description ? (
          <S.DescriptionContainer>
            <S.Description>{description}</S.Description>
          </S.DescriptionContainer>
        ) : null}
      </S.TitleDescriptionWrapper>
      <S.TitleChildrenWrapper>
        <S.SpanWrapper>
          <S.Span>{inputTitle}</S.Span>
        </S.SpanWrapper>
        <S.InputWrapper>{children}</S.InputWrapper>
      </S.TitleChildrenWrapper>
    </S.Section>
  );
}
