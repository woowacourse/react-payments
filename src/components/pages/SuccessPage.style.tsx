import styled from 'styled-components';

export const CardListSection = styled.section`
  margin: auto;
  height: 648px;
  align-items: center;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMessage = styled.p`
  padding-top: 100px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
`;

export const StyleErrorMessage = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: red;
  text-align: center;
`;

export const StyleButton = styled.button`
  width: 51px;

  background: none;
  border: none;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  margin: 0 0 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

export const CardInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  position: relative;
  right: 0;
`;
