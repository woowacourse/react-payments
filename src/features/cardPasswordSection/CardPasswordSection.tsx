import CardPasswordInputs from "../../entities/cardPasswordInputs/CardPasswordInputs";
import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import { StyledContainer } from "./CardPasswordSection.css";

type CardPasswordSectionProps = {
  password: {
    values: { password: string };
    changeValues: (type: "password", password: string) => void;
  };
};

export default function CardPasswordSection({
  password,
}: CardPasswordSectionProps) {
  return (
    <StyledContainer>
      <SectionTitle
        title="비밀번호를 입력해 주세요"
        subTitle="앞의 2자리를 입력해주세요"
      />
      <CardPasswordInputs password={password} />
    </StyledContainer>
  );
}
