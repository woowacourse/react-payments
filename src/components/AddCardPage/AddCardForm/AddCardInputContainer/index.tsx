import React from 'react';
import PALETTE from '../../../../constants/palette';
import Container from '../../../shared/Container';

interface Props {
  children: React.ReactNode;
  width?: string;
  backgroundColor?: string;
}

export const AddCardInputContainer = ({ children, width, backgroundColor }: Props) => (
  <Container
    flex
    justifyContent="center"
    alignItems="center"
    backgroundColor={backgroundColor || PALETTE.GRAY_1}
    width={width}
  >
    {children}
  </Container>
);

export default AddCardInputContainer;
