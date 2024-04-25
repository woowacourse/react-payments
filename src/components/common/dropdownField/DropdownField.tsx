import * as S from './DropdownField.styled';

export interface DropdownFieldProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function DropdownField({ title, subtitle, children }: DropdownFieldProps) {
  return (
    <S.Container>
      <S.Title role="heading" aria-level={1}>
        {title}
      </S.Title>
      {subtitle && (
        <S.Subtitle role="heading" aria-level={2}>
          {subtitle}
        </S.Subtitle>
      )}
      <S.SelectWrapper>{children}</S.SelectWrapper>
    </S.Container>
  );
}
