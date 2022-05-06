import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import './index.scss';
const NextButton = ({ onClick }) => {
  return (
    <div className='next--button' onClick={onClick}>
      <Link to={'/enterNickname'}>
        <Button>다음</Button>
      </Link>
    </div>
  );
};
export default NextButton;
