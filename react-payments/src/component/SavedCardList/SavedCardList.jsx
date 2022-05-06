import { useContext } from "react";
import { CardDataContext } from "../../provider/CardDataProvider";
import CardPreview from "../CardPreview/CardPreview.component";

const SavedCardList = () => {
  const { cardData } = useContext(CardDataContext);

  return (
    <>
      {cardData.map((cardDatum, idx) => (
        <div key={idx}>
          <CardPreview cardDatum={cardDatum} idx={idx} />
        </div>
      ))}
    </>
  );
};

export default SavedCardList;
