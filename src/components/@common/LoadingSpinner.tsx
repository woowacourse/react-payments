import * as Styled from './LoadingSpinner.styles';

const LoadingSpinner = ({ size }: { size: string }) => {
  return <Styled.Spinner size={size} />;
};

export default LoadingSpinner;
