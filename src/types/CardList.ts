import CardType from './Card';

export default interface CardList {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}
