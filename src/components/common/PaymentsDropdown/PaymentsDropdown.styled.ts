import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const Container = styled.div<{ isOpened: boolean; width?: number }>`
  box-sizing: border-box;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  border-radius: 2px;
  border: ${(props) =>
    props.isOpened ? 'solid 1px #000000' : 'solid 1px #acacac'};
`;

export const PreviewContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px;
`;

export const Preview = styled.p<{ value: any }>`
  width: 100%;
  font-family: 'Inter', sans-serif;
  color: ${(props) => (props.value ? '#000000' : '#acacac')};
  font-size: 11px;
  line-height: 15px;
`;

export const Img = styled.img`
  width: 16px;
  height: 16px;
`;
