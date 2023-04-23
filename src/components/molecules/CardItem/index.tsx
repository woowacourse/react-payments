import React from 'react';
import styled from 'styled-components';
import Message from '../../atomics/Message';
import { SBetweenStack } from '../../layout/flexbox';

const CardItem: React.FC = () => {
  return (
    <StyledCardItemBox>
      <StyledCardItemGoldBox />
      <CardNumberWrapper>
        <MessageBox>
          <Message
            fontWeight={500}
            fontSize="16px"
            lineHeight="14px"
            color="#fff"
            letterSpacing="2.5px"
          >
            9999
          </Message>
        </MessageBox>
        <MessageBox>
          <Message
            fontWeight={500}
            fontSize="16px"
            lineHeight="14px"
            color="#fff"
            letterSpacing="2.5px"
          >
            1111
          </Message>
        </MessageBox>
        <MessageBox>
          <Message
            fontWeight={500}
            fontSize="16px"
            lineHeight="14px"
            color="#fff"
            letterSpacing="2.5px"
          >
            1111
          </Message>
        </MessageBox>
        <MessageBox>
          <Message
            fontWeight={500}
            fontSize="16px"
            lineHeight="14px"
            color="#fff"
            letterSpacing="2.5px"
          >
            1111
          </Message>
        </MessageBox>
      </CardNumberWrapper>
      <CardInfo>
        <Message fontWeight={500} fontSize="12px" lineHeight="14px" color="#fff">
          Junseung
        </Message>
        <Message fontWeight={500} fontSize="12px" lineHeight="14px" color="#fff">
          04 / 23
        </Message>
      </CardInfo>
    </StyledCardItemBox>
  );
};

const StyledCardItemBox = styled.div`
  width: 214px;
  height: 132px;
  background-color: #333333;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding: 14px;
`;

const StyledCardItemGoldBox = styled.div`
  margin-top: 40px;

  width: 40px;
  height: 28px;
  background-color: #cbba64;
  border-radius: 4px;
`;

const CardNumberWrapper = styled.ul`
  display: flex;
  margin-top: 12px;
  margin-left: 4px;
`;

const MessageBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 1.6;

  width: 36px;

  & + & {
    margin-left: 12px;
  }
`;

const CardInfo = styled.div`
  ${SBetweenStack}

  margin-top: 4px;
  margin-left: 4px;
  margin-right: 6px;
`;

export default CardItem;
