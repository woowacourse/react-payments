import { useContext } from "react";
import { CardRegistrationInfoContext } from "../context/CardRegistrationInfoContext";

const useCardRegistrationInfoContext = () => useContext(CardRegistrationInfoContext);

export default useCardRegistrationInfoContext;
