import { COLOR } from '../styles/color';
import styled from '@emotion/styled';

const MainTitle = styled.h2({
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '26.06px',
});

const Description = styled.p({
  fontSize: '9.5px',
  fontWeight: 400,
  lineHeight: '13.76px',
  color: COLOR.gray3,
});

interface SectionTitleProps {
  title: string;
  description?: string;
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <>
      <MainTitle>{title}</MainTitle>
      {description && <Description>{description}</Description>}
    </>
  );
}
