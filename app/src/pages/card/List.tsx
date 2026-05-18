import { useEffect } from "react";
import { getCards } from "../../features/card/Api";

export default function CardList() {
  useEffect(() => {
    const cards = getCards();
  }, []);
  return <div>hello world</div>;
}
