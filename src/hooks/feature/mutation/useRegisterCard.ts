import { registerCard } from "@apis/api/cards";
import useMutation from "@hooks/common/useMutation";

const useRegisterCard = () => {
  return useMutation({
    mutationFn: registerCard,
  });
};

export default useRegisterCard;
