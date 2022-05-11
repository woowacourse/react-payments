import React from 'react';
import IconBackArrow from '../../../images/back-arrow.svg';
import SS from '../../styled';

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function BackButton({ onClick }: Props) {
  return (
    <SS.BackButton type="button" onClick={onClick}>
      <img src={IconBackArrow} alt="" />
    </SS.BackButton>
  );
}

export default BackButton;
