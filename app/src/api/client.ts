const serverBaseUrl = 'https://api.example.com';

export async function request(path: string, options?: RequestInit) {
  const response = await fetch(`${serverBaseUrl}${path}`, {
    ...options,
    headers: {
      ...(options?.body ? { 'Content-Type': 'application/json' } : {}),
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response;
}
