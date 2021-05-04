import React from 'react';
import PropTypes from 'prop-types';
import PALETTE from '../../../styles/palette';
import * as Style from './style';

const ActionSheet = (props) => {
  const { options, isOpen, setActionSheetOpen } = props;

  const optionsLength = Object.keys(options).length + 1;

  const closeActionSheet = () => {
    setActionSheetOpen(false);
  };

  const handleClickDimmed = (event) => {
    if (event.currentTarget === event.target) {
      setActionSheetOpen(false);
    }
  };

  return (
    <Style.Root isOpen={isOpen} onClick={handleClickDimmed}>
      <Style.ActionSheetInner optionsLength={optionsLength}>
        {Object.entries(options).map(([option, action]) => (
          <Style.Option key={option} color={PALETTE.DEFAULT_RED} onClick={action}>
            {option}
          </Style.Option>
        ))}
        <Style.Option onClick={closeActionSheet}>닫기</Style.Option>
      </Style.ActionSheetInner>
    </Style.Root>
  );
};

ActionSheet.propTypes = {
  options: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setActionSheetOpen: PropTypes.func.isRequired,
};

export default ActionSheet;
