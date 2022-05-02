import styled from 'styled-components';
import { INPUT_PRIMARY_BG_COLOR, LABEL_PRIMARY_COLOR } from '../../../style';

const InputContainer = styled.div`
  position: ${props => props.position || 'static'};
  width: ${props => props.width || '100%'};
  margin: 16px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '100%'};
  margin-top: 0.375rem;
  color: ${props => props.color};
  border-radius: 0.25rem;
  background-color: ${INPUT_PRIMARY_BG_COLOR};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: ${LABEL_PRIMARY_COLOR};
`;

const DotContainer = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
`;

const Span = styled.span`
  padding: ${props => props.padding || '8px'};
`;

export { InputContainer, InputWrapper, Label, DotContainer, Span };
