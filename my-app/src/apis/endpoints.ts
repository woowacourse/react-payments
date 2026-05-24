export const API = {
  createCard: { method: "POST", pattern: "/api/cards" },
  listCards: { method: "GET", pattern: "/api/cards" },
  deleteCard: { method: "DELETE", pattern: "/api/cards/:id" },
} as const;

export const fillPath = (pattern: string, params: Record<string, string>): string =>
  pattern.replace(/:(\w+)/g, (_, key) => params[key]);
