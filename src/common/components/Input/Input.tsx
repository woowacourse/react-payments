import type {ComponentPropsWithoutRef} from 'react';
import styled from 'styled-components';

type StrokeModeType = 'default' | 'error';

const STROKE_MODE_COLOR: Record<StrokeModeType, string> = {
  default: '#ACACAC',
  error: '#FF3D3D',
};

const FOCUS_COLOR = '#000000';

type InputPropsType = ComponentPropsWithoutRef<'input'> & {
  strokeMode?: StrokeModeType;
};

const StyledInput = styled.input<{$strokeMode: StrokeModeType}>`
  font-size: 11px;
  font-weight: 400;
  color: #000;
  padding: 8px;
  border: 1px solid ${(props) => STROKE_MODE_COLOR[props.$strokeMode]};
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: ${(props) => (props.$strokeMode === 'error' ? STROKE_MODE_COLOR.error : FOCUS_COLOR)};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px
      ${(props) => (props.$strokeMode === 'error' ? STROKE_MODE_COLOR.error : FOCUS_COLOR)};
  }
`;

const Input = ({strokeMode = 'default', ...rest}: InputPropsType) => {
  return <StyledInput $strokeMode={strokeMode} {...rest} />;
};

export default Input;
