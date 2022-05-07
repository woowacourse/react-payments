import { memo } from 'react';
import PropTypes from 'prop-types';
import * as styled from './index.styled';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, hasBackButton = false }) => {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  return (
    <styled.Container>
      {hasBackButton && (
        <styled.BackButton type="button" onClick={onClickBackButton}>
          <styled.Arrow />
        </styled.BackButton>
      )}
      <styled.Title>{title}</styled.Title>
    </styled.Container>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  hasBackButton: PropTypes.bool,
};

export default memo(Header);
