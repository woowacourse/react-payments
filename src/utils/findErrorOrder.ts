function findErrorOrder(error: Record<string, string>): string {
	for (const key in error) {
		if (error[key].length > 0) return error[key];
	}
	return "";
}

export default findErrorOrder;
