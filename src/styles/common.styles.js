import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const ScreenContainer = styled.main`
  max-width: 375px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.borderColor.default};
  overflow-y: auto;
  position: relative;
  box-sizing: border-box;
  padding-bottom: 100px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
