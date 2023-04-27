export interface CardType {
  id: string;
  company: string;
  numbers: string[];
  expiryDate: string;
  owner?: string;
  color: string;
  CVC: number;
  password: string[];
}
