import { useState } from "react";
import { CreditCard } from "../../type/CreditCard";
import Button from "../common/Button";
import CardPreview from "../common/CardPreview";
import Input from "../common/Input";
import { cardCompanyEnglishToKorean } from "../../type/CardCompany";
import styles from "./InputSuccessPage.module.css";
import { useNavigate } from "react-router-dom";

interface Props {
  card: CreditCard;
  setCardInfo: (info: Partial<CreditCard>) => void;
}

const InputSuccessPage = (props: Props) => {
  const { card, setCardInfo } = props;

  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const lengthParser = (value: string) => value.slice(0, 12);
  const clickHandler = () => {
    if (nickname) setCardInfo({ nickname });
    else setCardInfo({ nickname: `${cardCompanyEnglishToKorean(card.company)} ${card.number[3]}` });
  
    navigate("/");
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>카드 등록을 완료했어요!</h1>
      <CardPreview card={card} />
      <Input
        className={styles.input}
        placeholder="카드 별명을 설정해 주세요"
        parsers={[lengthParser]}
        valueChangeSubscribers={[setNickname]}
      />
      <Button className={styles.button} type="button" onClick={clickHandler}>확인</Button>
    </section>
  );
};

export default InputSuccessPage;
