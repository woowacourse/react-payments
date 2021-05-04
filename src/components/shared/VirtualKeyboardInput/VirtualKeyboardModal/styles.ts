import styled from 'styled-components';
import { GRAY } from '../../../../constants/palette';
import Button from '../../Button';
import Modal from '../../Modal';

const VirtualKeyboardModalContainer = styled(Modal)`
  background-color: rgba(0, 0, 0, 0);

  ${Button} {
    background-color: ${GRAY[100]};
    box-shadow: 2px 2px white inset;
  }
`;

export default VirtualKeyboardModalContainer;
