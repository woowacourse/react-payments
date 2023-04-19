import React from 'react';
import styled from 'styled-components';

const CardPreview = () => {
  return (
    <CardPreviewWrapper>
      <CardChip />
      <CardNumberWrapper>
        <CardNumber>1111</CardNumber>
        <CardNumber>1111</CardNumber>
        <CardNumber>1111</CardNumber>
        <CardNumber>1111</CardNumber>
      </CardNumberWrapper>
      <CardInfo>
        <div>이름</div>
        <div>
          <span>04</span>/<span>21</span>
        </div>
      </CardInfo>
    </CardPreviewWrapper>
  );
};

const CardPreviewWrapper = styled.div`
  color: #fff;

  width: 212px;
  height: 132px;
  background-color: #333;
  padding: 12px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const CardChip = styled.div`
  margin-top: 40px;
  width: 40px;
  height: 24px;
  background-color: #cbba64;
  border-radius: 4px;
`;

const CardNumberWrapper = styled.ul`
  display: flex;
  margin-top: 12px;
  margin-left: 4px;
  letter-spacing: 3px;
`;

const CardNumber = styled.li`
  & + & {
    margin-left: 12px;
  }
`;

const CardInfo = styled.div`
  margin-top: 4px;

  font-size: 12px;

  display: flex;
  justify-content: space-between;
  margin-left: 4px;
  margin-right: 6px;
`;

export default CardPreview;
