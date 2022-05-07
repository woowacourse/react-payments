import styled from 'styled-components';
import Circle from 'components/Circle';

export default function DeleteCircleButton({ onDeleteCard }) {
  return (
    <Styled.DeleteButtonBox onClick={onDeleteCard}>
      <Circle size="30px" color="orange">
        <Styled.Span>삭제</Styled.Span>
      </Circle>
    </Styled.DeleteButtonBox>
  );
}

const Styled = {
  DeleteButtonBox: styled.div`
    cursor: pointer;
    position: absolute;
    right: -30px;
    top: 0px;
  `,

  Span: styled.span`
    font-size: 8px;
  `,
};
