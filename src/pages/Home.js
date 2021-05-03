import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { cardList } = props;

  return (
    <>
      <div>
        <p>준비중입니다. - home</p>
        <Link to="/CardAddition">
          <button>카드 추가 하러 가기</button>
        </Link>
      </div>
      <ul>
        {cardList.map(({ cardDescription, cardNumbers }) => (
          <li key={cardNumbers.join("")}>{cardDescription}</li>
        ))}
      </ul>
    </>
  );
};

Home.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      cardType: PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }),
      cardNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
      expirationDate: PropTypes.shape({
        month: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
      }),
      username: PropTypes.string.isRequired,
      secureCode: PropTypes.string.isRequired,
      password: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ),
};

export default Home;
