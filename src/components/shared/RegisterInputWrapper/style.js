import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  &: not(: last-child) {
    margin-bottom: 19px;
  }
`;

const InputHeader = styled.div`
  display: flex;
  position: relative;
  width: ${({ width }) => width};
`;

const DefaultInputWrapper = styled.fieldset`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 45px;
  background-color: ${PALETTE.INPUT_BG_GRAY};
  border-color: transparent;
  border-radius: 7px;
  padding: 2px 8px;
`;

const DefaultInput = styled.input`
  width: ${({ width }) => width};
  font-size: 1rem;
  color: ${PALETTE.DEFAULT_CYAN};
  border-color: transparent;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 3px;
  color: ${PALETTE.INPUT_LABEL_BLACK};
`;

const WordCount = styled.span`
  position: absolute;
  right: 0;
  font-size: 12px;
  color: ${PALETTE.INPUT_LABEL_BLACK};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export { Root, InputHeader, DefaultInputWrapper, DefaultInput, Label, WordCount, FlexContainer };
