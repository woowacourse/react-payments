import { useContext, useEffect } from "react";

import CardPreview from "component/CardPreview/CardPreview.component";
import SkeletonCardBox from "component/common/SkeletonCard/SkeletonCard.component";

import useFetch from "hooks/useFetch";
import { API_URL } from "constants/index";
import { CardDataContext, initCardDataAction } from "provider/CardDataProvider";

const SavedCardList = () => {
  const { data, loading } = useFetch(`${API_URL}/api/cards`);
  const cardDataContext = useContext(CardDataContext);
  if (!cardDataContext) {
    throw new Error("Cannot find CardDataContext");
  }
  const { cardData, dispatch } = cardDataContext;

  useEffect(() => {
    if (!data) {
      return;
    }

    dispatch(initCardDataAction(data));
  }, [dispatch, data]);

  return (
    <>
      {loading ? (
        <>
          <SkeletonCardBox />
          <SkeletonCardBox />
        </>
      ) : (
        Object.entries(cardData).map(([id, cardDatum]) => (
          <div key={id}>
            <CardPreview cardDatum={cardDatum} />
          </div>
        ))
      )}
    </>
  );
};

export default SavedCardList;
