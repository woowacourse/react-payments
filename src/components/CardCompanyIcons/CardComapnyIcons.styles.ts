import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  justify-items: center;
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
