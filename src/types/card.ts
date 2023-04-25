export interface CardType {
  id: string;
  numbers: string[];
  expiryDate: string;
  owner?: string;
  color: string;
  CVC: number;
  password: string[];
}
