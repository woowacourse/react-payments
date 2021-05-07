import PropTypes from 'prop-types';
import Styled from './LoadingCircle.style';

export const LoadingCircle = ({ borderColor }) => {
  return (
    <Styled.LoadingCircleWrapper>
      <Styled.LoadingCircle borderColor={borderColor}></Styled.LoadingCircle>
    </Styled.LoadingCircleWrapper>
  );
};

LoadingCircle.propTypes = {
  borderColor: PropTypes.string,
};
