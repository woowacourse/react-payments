import styled from 'styled-components';

export default function Circle({ children, size, color }) {
  return (
    <Styled.Circle size={size} color={color}>
      {children}
    </Styled.Circle>
  );
}

const Styled = {
  Circle: styled.div`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 100%;
    background-color: ${({ color }) => color};
  `,
};
