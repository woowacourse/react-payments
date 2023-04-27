export const useCard = (newCard: any, setCard: any) => {
  const setNewCard = (key: string, value: string) => {
    newCard[key] = value;
    setCard(newCard);
  };

  return [newCard, setNewCard];
};
