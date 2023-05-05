import React from 'react';
import styled, { css } from 'styled-components';
import { useModalContext } from '.';
import { getContentLayoutStyle } from '../../../utils/getContentLayoutStyle';
import { getCustomChildren } from '../../../utils/getCustomChildren';

import styles from './styles/modal.module.css';

interface ChildProps {
  children: React.ReactNode;
}

interface ContentStyleProps {
  isCenter?: boolean;
  isBottom?: boolean;
}

export interface ContentProps extends ContentStyleProps, ChildProps {
  isCustom?: boolean;
}

const Content: React.FC<ContentProps> = ({ children, isCustom, isCenter, isBottom }) => {
  const { isModal } = useModalContext();

  if (isCustom && isModal) {
    return getCustomChildren(children, {
      className: styles[getContentLayoutStyle(isCenter, isBottom)],
    });
  }

  if (!isCustom && isModal) {
    return (
      <StyledDisplayContent isCenter={isCenter} isBottom={isBottom}>
        {children}
      </StyledDisplayContent>
    );
  }

  return <></>;
};

const StyledDisplayContent = styled.div<ContentStyleProps>`
  position: fixed;
  top: 10%;
  left: 50%;
  width: 80%;
  min-width: 400px;
  height: 200px;
  background-color: #fff;

  transform: translateX(-50%);

  padding: 20px;

  ${(props) => {
    return (
      props.isCenter &&
      css`
        top: 50%;
        transform: translate(-50%, -50%);
      `
    );
  }}

  ${(props) => {
    return (
      props.isBottom &&
      css`
        top: 100%;
        transform: translate(-50%, -100%);
      `
    );
  }}
`;

export default Content;
