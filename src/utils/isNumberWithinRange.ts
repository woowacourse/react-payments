const isNumberWithinRange = (value: string, maxLength: number) => {
	const regex = new RegExp(`^(?:\\d{1,${maxLength}})?$`);
	return regex.test(value);
};

export default isNumberWithinRange;
