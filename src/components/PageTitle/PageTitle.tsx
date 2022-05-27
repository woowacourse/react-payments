import PrevButton from 'components/PrevButton/PrevButton';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  onClickPrev(): void;
  hasPrevButton: boolean;
}

export default function PageTitle({
  children,
  onClickPrev,
  hasPrevButton,
}: PropsWithChildren<Props>) {
  return (
    <Styled.PageTitleBox>
      {hasPrevButton && <PrevButton onClick={onClickPrev} />}
      <Styled.PageTitle>{children}</Styled.PageTitle>
    </Styled.PageTitleBox>
  );
}

const Styled = {
  PageTitleBox: styled.div`
    display: flex;
    margin-bottom: 20px;
  `,

  PageTitle: styled.span`
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.085em;
  `,
};
