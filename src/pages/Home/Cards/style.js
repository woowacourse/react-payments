import styled from 'styled-components';

import CircleStyled from '../../../components/Circle/style';

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
  height: calc(100% - 230px);
  overflow-y: auto;
`;

export const CardWrapperStyled = styled.div`
  position: relative;
`;

export const CardDeleteButtonStyled = styled(CircleStyled)`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -17px;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  background-color: rebeccapurple;
  color: white;
  font-weight: bold;
`;

export const AliasStyled = styled.p`
  margin-top: 5px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: var(--card-alias-bold-color);
  opacity: 0.9;
`;
