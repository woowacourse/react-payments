import { useEffect, useRef } from "react";

const useAutoFocus = (inputCount: number, maxLength: number) => {
	const inputRef = Array.from({ length: inputCount }, () => {
		return useRef<HTMLInputElement>(null);
	});

	const moveFocus = (index: number, numbers: string) => {
		if (numbers.length === maxLength && index !== inputCount - 1) {
			inputRef[index + 1]?.current?.focus();
		}
	};

	useEffect(() => {
		inputRef[0]?.current?.focus();
	}, []);

	return { inputRef, moveFocus };
};

export default useAutoFocus;
