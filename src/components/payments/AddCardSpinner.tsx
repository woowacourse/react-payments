import styled from 'styled-components';
import CardSpinner from '../common/CardSpinner';

const AddCardSpinner = () => {
  return (
    <AddCardSpinnerContainer>
      <CardSpinner />
      <Message>카드를 등록중입니다.</Message>
    </AddCardSpinnerContainer>
  );
};

const AddCardSpinnerContainer = styled.div`
  position: relative;
  top: -80px;
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 9999;
`;

const Message = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-top: 42px;
`;

export default AddCardSpinner;
