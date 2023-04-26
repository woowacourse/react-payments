import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  justify-items: center;
  position: fixed;
  bottom: 0;
  width: 375px;
  padding: 36px;
  border-radius: 8px 8px 0px 0px;
  background: #fff;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > :first-child {
    margin-bottom: 8px;
  }
`;
