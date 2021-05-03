import styled from 'styled-components';
import { FlexCenter } from '../../utils/style/FlexCenter';

const Modal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const ModalInner = styled(FlexCenter)`
  min-width: 23.5rem;
  min-height: 14.2rem;
  background-color: white;
  margin: 0;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export { Modal, ModalInner };
