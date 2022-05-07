import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';

const StyledPage = styled.div`
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 757px;

  ${({ alignItems }) => css`
    align-items: ${alignItems};
  `}
`;

export default function AppContainer({ alignItems, children }) {
  return <StyledPage alignItems={alignItems}>{children}</StyledPage>;
}

AppContainer.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.node,
};
