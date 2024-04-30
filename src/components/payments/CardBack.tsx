import { COLOR } from '../../styles/color';
import { HTMLProps } from 'react';
import styled from '@emotion/styled';

interface Props {
  cvc: string;
}

export default function CardBack({ cvc }: Props) {
  return (
    <CardPreviewContainer>
      <Magnetic>{cvc === '' ? '' : cvc}</Magnetic>
    </CardPreviewContainer>
  );
}

interface CardPreviewContainerProps extends HTMLProps<HTMLElement> {
  backgroundColor?: string;
}

const CardPreviewContainer = styled.section<CardPreviewContainerProps>({
  width: '246px',
  minHeight: '120px',
  top: '77px',
  left: '82px',
  borderRadius: '4px',
  backgroundColor: COLOR.gray5,
  boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.25)',
  color: COLOR.white,
});
const Magnetic = styled.div({
  minHeight: '20px',
  boxSizing: 'border-box',
  position: 'relative',
  backgroundColor: COLOR.yellow,
  top: '80px',

  padding: '0px 20px',

  width: '100%',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  letterSpacing: '0.08em',
  textAlign: 'right',
});
