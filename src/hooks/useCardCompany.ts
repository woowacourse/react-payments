import { useState } from "react";

const useCardCompany = () => {
	const [cardCompany, setCardCompany] = useState<string>("");
	const isComplete = cardCompany !== "";
	const onChange = (value: string): void => {
		setCardCompany(value);
	};

	return { cardCompany, isComplete, onChange };
};

export default useCardCompany;
