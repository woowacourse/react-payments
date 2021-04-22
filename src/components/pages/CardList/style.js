import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &: not(: last-child) {
    margin-bottom: 26px;
  }
`;

const CardAlias = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: ${PALETTE.BOLD_BLACK}
  height: 26px;
`;

export { Root, CardWrapper, CardAlias };
