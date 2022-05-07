import { useContext } from "react";
import Card from "../../components/common/Card";
import { CardListContext } from "../../context/CardListProvider";
import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  const { cardList } = useContext(CardListContext);
  return (
    <div className="home--container">
      <header>
        <p>보유카드</p>
      </header>
      {cardList.map((card, idx) => (
        <div className="labeled" key={idx}>
          <div className="home--container-card">
            <Card cardInfo={card} />
          </div>
          <p>{card.nickname}</p>
        </div>
      ))}
      <Link to="/addcard">
        <button className="home-container-card-add-btn">+</button>
      </Link>
    </div>
  );
};

export default Home;
