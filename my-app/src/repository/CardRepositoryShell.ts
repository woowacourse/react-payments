import type { Card, SendingData } from "./HttpCardRepository";

export interface CardRepositoryShell {
  getCards(): Promise<Card[]>;
  postCard(sendingData: SendingData): Promise<{ id: string }>;
  deleteCard(id: string): Promise<void>;
}
