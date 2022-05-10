import styled, { css } from "styled-components";
import { CARD_SIZE } from "constant";

const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

const CardWrapper = styled.div`
  ${FlexAlignCenter}
  background-color: ${(props) => props.color || props.theme.colors.GRAY};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  margin: 10px 0;
  padding: ${(props) => (props.size === CARD_SIZE.SMALL ? "14px" : "20px")};
  font-size: ${(props) => (props.size === CARD_SIZE.SMALL ? "16px" : "18px")};
  width: ${(props) => (props.size === CARD_SIZE.SMALL ? "208px" : "290px")};
  height: ${(props) => (props.size === CARD_SIZE.SMALL ? "130px" : "180px")};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    opacity: ${(props) => props.size === CARD_SIZE.SMALL && 0.8};
  }
`;

const CardTop = styled.div`
  ${FlexAlignCenter}
  width: 100%;
`;

const CardMiddle = styled.div`
  ${FlexAlignCenter}
  width: 100%;

  & div {
    background: #cbba64;
    border-radius: 4px;
    width: ${(props) => (props.size === CARD_SIZE.SMALL ? "40px" : "55px")};
    height: ${(props) => (props.size === CARD_SIZE.SMALL ? "26px" : "36px")};
  }
`;

const CardBottom = styled.div`
  ${FlexAlignCenter}
  flex-direction: column;
  width: 100%;
`;

const CardText = styled.div`
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;

const CardOwner = styled.div`
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardNumber = styled.div`
  ${FlexAlignCenter}
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  height: 16px;
`;

const CardInfo = styled.div`
  ${FlexAlignCenter}
  width: 100%;
  justify-content: space-between;
`;

export {
  CardWrapper,
  CardTop,
  CardMiddle,
  CardBottom,
  CardText,
  CardNumber,
  CardInfo,
  CardOwner,
};
