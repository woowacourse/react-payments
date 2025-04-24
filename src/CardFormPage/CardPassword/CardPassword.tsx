import styles from "./CardPassword.module.css";
import Input from "../../components/Input/Input";
import Text from "../../components/Text/Text";
import { useState } from "react";

interface CardPasswordProps {
  handleChange: (value: string) => void;
}

const CARD_PASSWORD_LABEL = {
  TITLE: "비밀번호를 입력해주세요",
  DESCRIPTION: "앞의 2자리를 입력해주세요",
  SUBTITLE: "비밀번호 앞 2자리",
} as const;

export default function CardPassword({ handleChange }: CardPasswordProps) {
  const [password, setPassword] = useState("");

  const onPasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <section className={styles["card-password"]}>
      <Text textType="title">{CARD_PASSWORD_LABEL.TITLE}</Text>
      <Text textType="description">{CARD_PASSWORD_LABEL.DESCRIPTION}</Text>
      <Text textType="subtitle">{CARD_PASSWORD_LABEL.SUBTITLE}</Text>
      <Input
        onChange={onPasswordChange}
        value={password}
        textType="password"
        placeholder=""
        // errorMessage={errorMessage}
      />
      <Text textType="error">{""}</Text>
    </section>
  );
}
