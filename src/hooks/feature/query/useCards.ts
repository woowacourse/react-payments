import { getCards } from "@apis/api/cards";
import useQuery from "@hooks/common/useQuery";

const useCards = () => {
  return useQuery({
    queryFn: getCards,
  });
};

export default useCards;
