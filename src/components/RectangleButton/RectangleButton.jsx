import styled from 'styled-components';

export default function RectangleButton({ children, onClick, colorType }) {
  return (
    <Styled.Box onClick={onClick}>
      <Styled.Span colorType={colorType}>{children}</Styled.Span>
    </Styled.Box>
  );
}

const Styled = {
  Box: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 170px;
    height: 50px;
    border: 1px solid #d3d3d3;
    margin: 10px;
    border-radius: 5px;
    &:hover {
      background-color: #ecebf1;
    }
  `,

  Span: styled.span`
    font-size: 18px;
    color: ${({ colorType }) => colorType === 'delete' && 'red'};
  `,
};
