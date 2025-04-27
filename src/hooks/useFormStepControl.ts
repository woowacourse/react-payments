import { useEffect, useState } from "react";

interface IsComplete {
	cardNumber: boolean;
	company: boolean;
	expirationDate: boolean;
	cvc: boolean;
	password: boolean;
}

const useFormStepControl = (isComplete: IsComplete) => {
	const [maxStep, setMaxStep] = useState(0);
	const step = Object.values(isComplete).filter(Boolean).length;

	useEffect(() => {
		setMaxStep((prev) => Math.max(prev, step));
	}, [step]);

	return { step, maxStep };
};

export default useFormStepControl;
