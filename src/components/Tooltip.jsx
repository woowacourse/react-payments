import { memo } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Styled = {
  Tooltip: styled.div`
    animation: fadein 0.3s;
    background: #bddffe75;
    border-radius: 3px;
    display: inline-block;
    font-size: 12px;
    height: 23px;
    line-height: 23px;
    margin-left: 15px;
    text-align: center;
    vertical-align: middle;
    width: 200px;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
};

function Tooltip({ visible }) {
  return (
    <>
      {visible && (
        <Styled.Tooltip>카드 뒷면에 적힌 유효성 검사 코드</Styled.Tooltip>
      )}
    </>
  );
}

Tooltip.propTypes = {
  visible: PropTypes.bool,
};

export default memo(Tooltip);
