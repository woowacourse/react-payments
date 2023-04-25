import React from 'react';
import styled from 'styled-components';

interface ErrorProps {
  text: string;
}

export default function Error({ text }: ErrorProps) {
  return (
    <Wrapper>
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
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </Svg>
      <Message>{text}</Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #ff0033;
  margin-top: 12px;
`;

const Svg = styled.svg`
  height: 28px;
  stroke-width: 1.5px;
`;

const Message = styled.span`
  margin-left: 8px;
  font-weight: 400;
  font-size: 16px;
`;
