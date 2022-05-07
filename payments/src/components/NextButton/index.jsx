import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import './index.scss';
const NextButton = ({ onClick }) => {
  const handleOnClick = (e) => {
    try {
      onClick(e);
    } catch (error) {
      alert(error.message);
      e.preventDefault();
    }
  };

  return (
    <div className='next--button'>
      <Link to={'/enterNickname'} onClick={handleOnClick}>
        <Button>다음</Button>
      </Link>
    </div>
  );
};
export default NextButton;
