import { useContext, useEffect } from "react";
import { REDUCER_TYPE } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { CardDataContext } from "../../provider/CardDataProvider";
import CardPreview from "../CardPreview/CardPreview.component";
import { API_URL } from "../../constants";

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
        <div>로딩중...</div>
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
