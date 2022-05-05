import { css, keyframes } from '@emotion/react';

const insertKeyFrames = (content) => keyframes(content);

const animate = (value, content) =>
  css`
    animation: ${value} ${insertKeyFrames(content)};
  `;

export default animate;
