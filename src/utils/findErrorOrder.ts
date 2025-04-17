function findErrorOrder<T extends Record<string, string>>(error: T): string {
	for (const key in error) {
		if (error[key].length > 0) return error[key];
	}
	return "";
}

export default findErrorOrder;
