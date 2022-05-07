import { Link } from 'react-router-dom';
import Button from 'components/common/Button';
import { ReactComponent as PrevIcon } from 'assets/prev_icon.svg';

const reducer = (_, action) => {
  switch (action.location) {
    case '/react-payments/':
      return {
        title: '보유카드',
        left: null,
        right: null,
      };
    case '/react-payments/add':
      return {
        title: '카드 추가',
        left: (
          <Link to="/react-payments/">
            <Button>
              <PrevIcon />
            </Button>
          </Link>
        ),
        right: null,
      };
    default:
      return {
        title: '',
        left: null,
        right: null,
      };
  }
};

export default reducer;
