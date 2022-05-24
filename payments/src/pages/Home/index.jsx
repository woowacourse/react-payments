import { useContext } from "react";
import Card from "../../components/common/Card";
import { CardListContext } from "../../context/CardListProvider";
import { Link } from "react-router-dom";
import "./index.scss";
import useModal from "../../hooks/useModal";
import ConfirmCardControl from "../../components/organisms/ConfirmCardControl";
import { useEffect } from "react";

const Home = () => {
  const { cardList, updateCardList } = useContext(CardListContext);
  const [closeConfirmCardControlModal, ConfirmCardControlModal, setModal] =
    useModal();

  useEffect(() => {
    localStorage.setItem("CARD_LIST", JSON.stringify(cardList));
  }, [cardList]);

  const handleCardClick = (idx) => {
    setModal(
      <ConfirmCardControl
        closeModal={closeConfirmCardControlModal}
        removeCard={() => {
          updateCardList({
            type: "removeCard",
            payload: {
              targetIndex: idx,
            },
          });
          closeConfirmCardControlModal();
        }}
      />
    );
  };

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
                handleCardClick(idx);
              }}
            />
          </div>
          <p>{card.nickname}</p>
        </div>
      ))}
      <div className="card-add-btn--container">
        <Link to="/addCard">
          <button className="home-container-card-add-btn">+</button>
        </Link>
      </div>
      <ConfirmCardControlModal />
    </div>
  );
};

export default Home;
