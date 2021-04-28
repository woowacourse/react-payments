import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  margin-top: 130px;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 400;
`;

const CardWrapper = styled.div`
  margin-top: 77px;
`;

const AliasInput = styled.input`
  width: 242px;
  margin-top: 33px;
  padding-bottom: 2px;
  border: none;
  border-bottom: 1.5px solid ${PALETTE.INPUT_TEXT_GRAY};
  font-size: 18px;
  text-align: center;

  &: focus {
    outline: none;
    border-bottom: 1.5px solid ${PALETTE.DEFAULT_CYAN};
  }
`;

export { Root, Title, CardWrapper, AliasInput };
