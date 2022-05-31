import styled, { css } from 'styled-components'

interface CardWrapperType {
  size: string
  border?: boolean
}

interface CardMiddleType {
  size: string
}

const FullSize = css`
  width: 100%;
`

const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`

const cardSizeTypes: { [key: string]: string } = {
  small: css`
    font-size: 16px;
    padding: 14px;
    width: 208px;
    height: 130px;
  `,
  large: css`
    font-size: 18px;
    padding: 20px;
    width: 290px;
    height: 180px;
  `,
}

const CardWrapper = styled.div<CardWrapperType>`
  ${FlexAlignCenter}
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  background-color: ${(props) => props.color || props.theme.colors.GRAY};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  ${({ size }) => cardSizeTypes[size]}
  box-shadow: '3px 3px 5px rgba(0, 0, 0, 0.25)';
`

const CardTop = styled.div`
  ${FullSize}
  ${FlexAlignCenter}
`

const CardMiddle = styled.div<CardMiddleType>`
  ${FullSize}
  ${FlexAlignCenter}

  & div {
    background: ${({ theme }) => theme.colors.YELLOW};
    border-radius: 4px;
    width: ${(props) => (props.size === 'small' ? '40px' : '55px')};
    height: ${(props) => (props.size === 'small' ? '26px' : '36px')};
  }
`

const CardBottom = styled.div`
  ${FullSize}
  ${FlexAlignCenter}
  flex-direction: column;
`

const CardText = styled.div`
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`

const CardOwner = styled.div`
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CardBottomNumber = styled.div`
  ${FullSize}
  ${FlexAlignCenter}
  margin-bottom: 10px;
  justify-content: center;
  height: 16px;
`

const CardBottomInfo = styled.div`
  ${FullSize}
  ${FlexAlignCenter}
  justify-content: space-between;
`

const Plus = styled.span`
  font-size: 50px;
  margin-left: 50px;
  margin-top: 10px;
`

export {
  CardWrapper,
  CardTop,
  CardMiddle,
  CardBottom,
  CardText,
  CardBottomNumber,
  CardBottomInfo,
  CardOwner,
  Plus,
}
