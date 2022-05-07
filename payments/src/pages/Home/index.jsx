import { useContext, useState } from "react";
import Card from "../../components/common/Card";
import { CardListContext } from "../../context/CardListProvider";
import { Link } from "react-router-dom";
import "./index.scss";
import useModal from "../../hooks/useModal";
import ConfirmCardControl from "../../components/organisms/ConfirmCardControl";

const Home = () => {
  const { cardList, updateCardList } = useContext(CardListContext);
  const [targetIndex, setTargetIndex] = useState(null);
  const [
    openConfirmCardControlModal,
    closeConfirmCardControlModal,
    ConfirmCardControlModal,
  ] = useModal(
    <ConfirmCardControl
      closeModal={() => {
        closeConfirmCardControlModal();
      }}
      removeCard={() => {
        updateCardList({
          type: "removeCard",
          payload: {
            targetIndex,
          },
        });
        closeConfirmCardControlModal();
      }}
    />
  );
  return (
    <div className="home--container">
      <header>
        <p>💳보유카드</p>
      </header>
      {cardList.map((card, idx) => (
        <div className="labeled" key={idx}>
          <div className="home--container-card">
            <Card
              cardInfo={card}
              onClick={() => {
                openConfirmCardControlModal();
                setTargetIndex(idx);
              }}
            />
          </div>
          <p>{card.nickname}</p>
        </div>
      ))}
      <Link to="/addcard">
        <button className="home-container-card-add-btn">+</button>
      </Link>
      <ConfirmCardControlModal />
    </div>
  );
};

export default Home;
