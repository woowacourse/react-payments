import { Link } from 'react-router-dom';
import Button from 'components/@common/Button';
import { ReactComponent as PrevIcon } from 'assets/prev_icon.svg';
import { ROUTE } from 'constants';

const reducer = (_, action) => {
  switch (action.location) {
    case ROUTE.MAIN:
      return {
        title: '보유카드',
        left: null,
        right: null,
      };
    case ROUTE.ADD:
      return {
        title: '카드 추가',
        left: (
          <Link to={ROUTE.MAIN}>
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
