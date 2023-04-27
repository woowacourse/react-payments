import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const Tooltip = styled.button`
  position: relative;
  width: 27px;
  height: 27px;
  margin-left: 12px;
  border: 1px solid #969696;
  color: #969696;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;

  &:hover:after {
    content: 'CVC 번호는 카드 뒤 3자리 입니다.';
    display: block;
    width: 100px;
    position: absolute;
    left: 36px;
    top: 0px;
    font-size: 12px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
