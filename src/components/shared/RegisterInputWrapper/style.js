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

const InputWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: 45px;
  background-color: ${PALETTE.INPUT_BG_GRAY};
  border-radius: 7px;
  border-color: transparent;
  display: flex;
  align-items: center;
  padding: 2px 8px;
  &: first-child {
    margin-right: ${({ isMultiple }) => isMultiple && '7px'};
  }
`;

const HelpMark = styled.img`
  margin-left: 11px;
`;

const PasswordMark = styled.div`
  width: 43px;
  height: auto;
  margin-left: 7px;
  display: flex;
  justify-content: center;
`;

export { Root, InputHeader, Label, WordCount, FlexContainer, InputWrapper, HelpMark, PasswordMark };
