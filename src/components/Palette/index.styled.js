import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border: none;
  padding: 26px 0;
  gap: 20px;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  z-index: 10;
`;

export const ColorPickerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 0 16px;
  }
`;
