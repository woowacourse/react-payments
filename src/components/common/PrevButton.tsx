import styled from 'styled-components';

interface PrevButtonProps {
  onClick: () => void;
}

const Wrapper = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;

export default function PrevButton({ onClick }: PrevButtonProps) {
  return (
    <Wrapper onClick={onClick}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </Svg>
    </Wrapper>
  );
}
