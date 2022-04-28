import React from 'react';

import styled from 'styled-components';

const QuestionMarkContainerStyle = styled.div`
  border-radius: 50%;
  border: 1px solid #bababa;
  color: #bababa;
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuestionMark = ({ handler }) => {
  return (
    <QuestionMarkContainerStyle onClick={handler}>
      <div>?</div>
    </QuestionMarkContainerStyle>
  );
};
