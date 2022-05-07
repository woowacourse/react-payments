import { useContext, useEffect } from "react";

import CardPreview from "component/CardPreview/CardPreview.component";
import SkeletonCardBox from "component/common/SkeletonCard/SkeletonCard.component";

import useFetch from "hooks/useFetch";
import { API_URL, REDUCER_TYPE } from "constants";
import { CardDataContext } from "provider/CardDataProvider";

const SavedCardList = () => {
  const { data, loading } = useFetch(`${API_URL}/api/cards`);
  const { cardData, dispatch } = useContext(CardDataContext);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    dispatch({
      type: REDUCER_TYPE.INIT,
      payload: data.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.id]: { id: cur.id, ...cur.attributes },
        };
      }, {}),
    });
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
