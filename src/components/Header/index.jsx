import { memo } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './index.styled';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, hasBackButton = false }) => {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  return (
    <Styled.Container>
      {hasBackButton && (
        <Styled.BackButton type="button" onClick={onClickBackButton}>
          <Styled.Arrow />
        </Styled.BackButton>
      )}
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  hasBackButton: PropTypes.bool,
};

export default memo(Header);
