import { css } from '@emotion/react';
import { GRADATION } from './theme';
import responsive from './utils/responsive';

const appStyles = css`
  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: bold;
    font-weight: 700;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix')
        format('embedded-opentype'),
      url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff') format('woff'),
      url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix')
        format('embedded-opentype'),
      url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'),
      url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
  }

  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 300;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix')
        format('embedded-opentype'),
      url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff') format('woff'),
      url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf') format('truetype');
  }

  :root {
    font-size: 3.4vw;
    height: 100%;

    ${responsive.notMobile(css`
      font-size: 16px;
    `)}
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'NanumBarunGothic';
    margin: 0px;
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
    position: relative;

    ${responsive.notMobile(css`
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      background-image: ${GRADATION['mystic-bottom']};
    `)}
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0 0 1.2rem;
  }

  p {
    margin: 0 0 0.5rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  .button-container {
    &.flex {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    &.right {
      text-align: right;
    }
  }
`;

export default appStyles;
