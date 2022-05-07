import { memo } from 'react';
import PropTypes from 'prop-types';
import * as styled from './index.styled';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  return (
    <styled.Container>
      <styled.BackButton type="button" onClick={onClickBackButton}>
        <styled.Arrow />
      </styled.BackButton>
      <styled.Title>{title}</styled.Title>
    </styled.Container>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default memo(Header);
