import Spinner from '../Spinner/Spinner';

interface SpinnerContainerProps {
  message?: string;
  spinnerSize?: number;
}

const SpinnerContainer = ({ message, spinnerSize }: SpinnerContainerProps) => {
  return (
    <div className="center-vert-item">
      {message && <h3 className="align-center mg-b-24">{message}</h3>}
      <Spinner className="center-hoz-item" size={spinnerSize} />
    </div>
  );
};

export default SpinnerContainer;
