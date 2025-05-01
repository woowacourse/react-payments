import styles from "./CardPasswordInput.module.css";
import Input from "../../../components/Input/Input";
import Text from "../../../components/Text/Text";
import { CARD_INPUT_LIMIT } from "../../../constants/CardInputLimit";

interface CardPasswordProps {
  handleChange: (value: string, step: number) => void;
  step: number;
  password: string;
  errorMessage: string;
}

const CARD_PASSWORD_LABEL = {
  TITLE: "비밀번호를 입력해주세요",
  DESCRIPTION: `앞의 ${CARD_INPUT_LIMIT.PASSWORD_MAX_LENGTH}자리를 입력해주세요`,
  SUBTITLE: `비밀번호 앞 ${CARD_INPUT_LIMIT.PASSWORD_MAX_LENGTH}자리`,
} as const;

export default function CardPasswordInput({
  handleChange,
  step,
  password,
  errorMessage,
}: CardPasswordProps) {
  return (
    <section className={styles["card-password"]}>
      <Text textType="title">{CARD_PASSWORD_LABEL.TITLE}</Text>
      <Text textType="description">{CARD_PASSWORD_LABEL.DESCRIPTION}</Text>
      <Text textType="subtitle">{CARD_PASSWORD_LABEL.SUBTITLE}</Text>
      <Input
        onChange={(value) => handleChange(value, step)}
        value={password}
        textType="password"
        placeholder=""
        errorMessage={errorMessage}
        autoFocus={true}
      />
      <Text textType="error">{errorMessage}</Text>
    </section>
  );
}
