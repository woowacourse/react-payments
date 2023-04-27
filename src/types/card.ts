export interface CardType {
  id: string;
  nickname: string;
  company: string;
  numbers: string[];
  expiryDate: string;
  owner?: string;
  color: string;
  CVC: number;
  password: string[];
}
