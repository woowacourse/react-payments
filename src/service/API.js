export const fetchOptions = (method, body) => ({
  method: method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});
