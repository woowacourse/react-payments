import styled, { css } from "styled-components";

const FullSize = css`
  width: 100%;
`;

const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

const CardWrapper = styled.div`
  ${FlexAlignCenter}
  background-color: ${({ theme }) => theme.colors.GRAY};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  font-size: ${(props) => (props.size === "small" ? "16px" : "18px")};
  padding: ${(props) => (props.size === "small" ? "14px" : "20px")};
  width: ${(props) => (props.size === "small" ? "208px" : "290px")};
  height: ${(props) => (props.size === "small" ? "130px" : "180px")};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

const CardTop = styled.div`
  ${FullSize}
  ${FlexAlignCenter}
`;

const CardMiddle = styled.div`
  ${FullSize}
  ${FlexAlignCenter}

  & div {
    background: #cbba64;
    border-radius: 4px;
    width: ${(props) => (props.size === "small" ? "40px" : "55px")};
    height: ${(props) => (props.size === "small" ? "26px" : "36px")};
  }
`;

const CardBottom = styled.div`
  ${FullSize}
  ${FlexAlignCenter}
  flex-direction: column;
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

const CardBottomNumber = styled.div`
  ${FullSize}
  ${FlexAlignCenter}
  margin-bottom: 10px;
  justify-content: center;
  height: 16px;
`;

const CardBottomInfo = styled.div`
  ${FullSize}
  ${FlexAlignCenter}
  justify-content: space-between;
`;

export {
  CardWrapper,
  CardTop,
  CardMiddle,
  CardBottom,
  CardText,
  CardBottomNumber,
  CardBottomInfo,
  CardOwner,
};
