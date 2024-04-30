import styled from 'styled-components';

export default function SubmitCardBox() {
  return <SubmitBox>확인</SubmitBox>;
}

const SubmitBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: #000000;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`;
