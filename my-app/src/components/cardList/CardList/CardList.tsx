import { useCardList } from "../../../hooks/queries/useCardList";

import CardListLoading from "../CardListLoading/CardListLoading";
import CardListEmpty from "../CardListEmpty/CardListEmpty";
import CardListError from "../CardListError/CardListError";
import CardListSuccess from "../CardListSuccess/CardListSuccess";

const CardList = () => {
  const { state, retry } = useCardList();

  switch (state.status) {
    case "idle":
    case "loading":
      return <CardListLoading />;
    case "error":
      return <CardListError onRetry={retry} />;
    case "success":
      return state.data.length === 0
        ? <CardListEmpty />
        : <CardListSuccess cards={state.data} onDelete={retry} />;
  }
};

export default CardList;
