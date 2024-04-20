import styled from 'styled-components';
import STYLE from '../../constants/style';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${STYLE.COLOR.black};
`;

export const Title = styled.h1`
  font-size: ${STYLE.FONT_SIZE.title};
  font-weight: ${STYLE.BOLD.title};
  line-height: 26px;
  text-align: left;
`;

export const SubTitle = styled.h2`
  font-size: ${STYLE.FONT_SIZE.small};
  line-height: 14px;
  color: ${STYLE.COLOR.gray130};
`;
