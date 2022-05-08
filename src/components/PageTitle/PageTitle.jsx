import PrevButton from 'components/PrevButton/PrevButton';
import styled from 'styled-components';

export default function PageTitle({ children, onClickPrev, hasPrevButton }) {
  return (
    <Styled.PageTitleBox>
      {hasPrevButton && <PrevButton onClick={onClickPrev}>&#8249;</PrevButton>}
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
