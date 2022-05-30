import { memo } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  animation: fadein 0.3s;
  background: #bddffe75;
  border-radius: 3px;
  display: inline-block;
  font-size: 12px;
  height: 23px;
  line-height: 23px;
  margin-left: 15px;
  text-align: center;
  vertical-align: middle;
  width: 200px;
`;

type Props = {
  visible: boolean;
  description: string;
};

function Modal({ visible, description }: Props) {
  return <>{visible && <StyledModal>{description}</StyledModal>}</>;
}

export default memo(Modal);
