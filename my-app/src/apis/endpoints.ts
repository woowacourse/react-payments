const API_BASE = `${import.meta.env.BASE_URL}api`;

export const API = {
  createCard: { method: "POST", pattern: `${API_BASE}/cards` },
  listCards: { method: "GET", pattern: `${API_BASE}/cards` },
  deleteCard: { method: "DELETE", pattern: `${API_BASE}/cards/:id` },
} as const;

export const fillPath = (pattern: string, params: Record<string, string>): string =>
  pattern.replace(/:(\w+)/g, (_, key) => params[key]);
