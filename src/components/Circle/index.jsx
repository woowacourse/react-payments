import styled from 'styled-components';

export default function Circle({ size, color }) {
  return <Styled.Circle size={size} color={color} />;
}

const Styled = {
  Circle: styled.div`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 100%;
    background-color: ${({ color }) => color};
  `,
};
