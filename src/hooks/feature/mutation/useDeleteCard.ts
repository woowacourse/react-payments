import { deleteCard } from "@apis/api/cards/[id]";
import useMutation from "@hooks/common/useMutation";

const useDeleteCard = () => {
  return useMutation({
    mutationFn: deleteCard,
  });
};

export default useDeleteCard;
