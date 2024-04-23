import { COLOR } from '../styles/color';
import styled from '@emotion/styled';

export interface InputContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  childrenBorderColor?: 'normal' | 'error';
}

const childrenBorderColor = { normal: COLOR.gray1, error: COLOR.error };

const TextInputContainer = styled.section((props: InputContainerProps) => ({
  display: 'flex',
  width: '100%',
  margin: 0,
  gap: '5px',
  '&>input': {
    flex: '1 !important',
    borderColor: props.childrenBorderColor
      ? childrenBorderColor[props.childrenBorderColor] + '!important'
      : undefined,
  },
}));

export default TextInputContainer;
