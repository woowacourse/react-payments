export interface CardType {
  id: string;
  name: string;
  company: string;
  numbers: string[];
  expiryDate: string;
  owner?: string;
  color: string;
  CVC: number;
  password: string[];
}
