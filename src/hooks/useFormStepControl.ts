import { useCallback, useEffect, useState } from "react";

interface IsComplete {
	cardNumber: boolean;
	company: boolean;
	expirationDate: boolean;
	cvc: boolean;
	password: boolean;
}

const useFormStepControl = (isComplete: IsComplete) => {
	const [step, setStep] = useState(0);

	const checkVariationStep = useCallback(
		(currentStep: number) => {
			const key = Object.keys(isComplete)[currentStep] as keyof IsComplete;
			if (isComplete[key]) return true;
			return false;
		},
		[isComplete]
	);

	useEffect(() => {
		if (checkVariationStep(step)) setStep(step + 1);
	}, [checkVariationStep]);

	return { step };
};

export default useFormStepControl;
