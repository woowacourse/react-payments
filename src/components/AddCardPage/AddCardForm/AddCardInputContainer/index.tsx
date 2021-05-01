import { FC } from 'react';
import Container from '../../../shared/Container';
import PALETTE from '../../../../constants/palette';

interface Props {
  width?: string;
  backgroundColor?: string;
}

export const AddCardInputContainer: FC<Props> = ({ children, width, backgroundColor }) => (
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
