import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';

import responsive from 'styles/utils/responsive';
import animate from 'styles/utils/animate';
import { COLORS } from 'styles/theme';

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;

  background-color: ${COLORS['black-55']};
  z-index: 255;

  ${responsive.notMobile(css`
    align-items: start;
    padding-top: 10rem;
  `)}

  > .modal-content {
    width: 100%;
    border-radius: 1rem;
    min-height: 12.5rem;
    background-color: #fff;

    padding: 1.25rem;
    margin: 2rem 1.25rem;

    box-shadow: 0px 0.625rem 1.875rem 1.25rem ${COLORS['black-05']};

    ${responsive.notMobile(css`
      width: 620px;
    `)}
  }

  &:not(.disappear) {
    ${animate(
      '0.3s ease',
      css`
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      `,
    )}

    .modal-content {
      ${animate(
        '0.3s ease',
        css`
          from {
            transform: translateY(100%);
          }

          to {
            transform: translateY(0%);
          }
        `,
      )}
    }
  }

  &.disappear {
    opacity: 0;

    ${animate(
      '0.3s ease',
      css`
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      `,
    )}

    .modal-content {
      ${animate(
        '0.3s ease',
        css`
          from {
            opacity: 1;
            transform: translateY(0%);
          }

          to {
            opacity: 0;
            transform: translateY(100%);
          }
        `,
      )}
    }
  }

  &.hidden {
    display: none;
  }
`;

export default Container;
