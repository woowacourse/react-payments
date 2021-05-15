import React from 'react';
import Card from '../../components/Card/Card';
import PropTypes from 'prop-types';
import { PAGE } from '../../utils/constant';

const CardListPage = (props) => {
  const { setPageRouter } = props;

  const handlePageRouter = () => {
    setPageRouter(PAGE.ADD);
  };

  return (
    <div className="p-5">
      <h1 className="ml-1 text-xl">보유카드</h1>
      <ul className="flex flex-col items-center mt-10">
        {/* <li className="mt-5">
          <Card
            size="small"
            cardNumbers={{
              0: '1234',
              1: '1234',
              2: '1234',
              3: '1234',
            }}
            cardCompany={{
              name: '로이드카드',
            }}
            expiration={'4/30'}
          />
          <h2 className="mt-2 text-center text-xl">asd</h2>
        </li> */}
        <li className="mt-5">
          <div className="flex items-center justify-center w-208 h-130 bg-gray-350 rounded-xl">
            <button className="text-4xl" onClick={handlePageRouter}>
              +
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardListPage;

CardListPage.propTypes = {
  setPageRouter: PropTypes.func.isRequired,
};
