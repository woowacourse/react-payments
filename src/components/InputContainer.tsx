/** @jsxImportSource @emotion/react */

import { COLOR } from '../styles/color';
import { css } from '@emotion/react';

const style = {
  display: 'flex',
  width: '100%',
  margin: 0,
  gap: '5px',
  '&>input': {
    flex: '1 !important',
  },
};

const childrenBorderColor = { normal: COLOR.gray1, error: COLOR.error };

export interface InputContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  childrenBorderColor?: 'normal' | 'error';
}

export default function TextInputContainer(props: InputContainerProps) {
  return (
    <section
      css={css(
        style,
        props.childrenBorderColor
          ? {
              '&>input': {
                borderColor: childrenBorderColor[props.childrenBorderColor],
              },
            }
          : undefined
      )}
    >
      {props.children}
    </section>
  );
}
