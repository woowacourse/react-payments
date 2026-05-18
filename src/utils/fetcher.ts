const parseJSON = async (response: Response) => {
    const text = await response.text();
    if (!text) return null;
    try {
        return JSON.parse(text);
    } catch {
        throw new Error(`JSON 파싱 실패: ${text}`);
    }
};

export const fetcher = async <ExpectedSuccessType, ExpectedErrorType>(endpoint: string, options: RequestInit = {}) => {
    const defaultOptions = {
        method: 'GET',
        ...options,
        headers: {
            accept: 'application/json',
            ...options.headers,
        },
    };

    const response = await fetch(endpoint, defaultOptions);
    if (response.ok) {
        const data: ExpectedSuccessType = await parseJSON(response);
        return data;
    }
    const error: ExpectedErrorType = await parseJSON(response);
    throw error;
};
