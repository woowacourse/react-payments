import type { Card, SendingData } from "../types/card";

export interface CardRepositoryShell {
  getCards(): Promise<Card[]>;
  postCard(sendingData: SendingData): Promise<{ id: string }>;
  deleteCard(id: string): Promise<void>;
}
