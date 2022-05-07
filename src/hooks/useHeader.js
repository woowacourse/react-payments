import { useEffect, useReducer } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from 'components/common/Button';
import { ReactComponent as PrevIcon } from 'assets/prev_icon.svg';

const initialState = {
  title: '',
  left: null,
  right: null,
};

const reducer = (_, action) => {
  switch (action.location) {
    case '/react-payments/':
      return {
        ...initialState,
        title: '보유카드',
      };
    case '/react-payments/add':
      return {
        ...initialState,
        title: '카드 추가',
        left: (
          <Link to="/react-payments/">
            <Button>
              <PrevIcon />
            </Button>
          </Link>
        ),
      };
    default:
      return {
        ...initialState,
      };
  }
};

const useHeader = () => {
  const location = useLocation();
  const [header, dispatch] = useReducer(reducer, initialState);
  const { title, left, right } = header;

  useEffect(() => {
    dispatch({ location: location.pathname });
  }, [location]);

  return { title, left, right };
};

export default useHeader;
