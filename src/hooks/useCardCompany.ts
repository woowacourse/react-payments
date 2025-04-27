import { useState } from "react";

const useCardCompany = () => {
	const [cardCompany, setCardCompany] = useState<string>("");
	const isComplete = cardCompany !== "";

	return { cardCompany, setCardCompany, isComplete };
};

export default useCardCompany;
