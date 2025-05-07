import CardPasswordInputs from "../../../entities/cardPasswordInputs/ui/CardPasswordInputs";
import SectionTitle from "../../../entities/sectionTitle/ui/SectionTitle";
import { CardPasswordSectionProps } from "../types/CardPassword.types";
import { StyledContainer } from "../css/CardPasswordSection.css";

export default function CardPasswordSection({
  password,
  passwordError,
}: CardPasswordSectionProps) {
  return (
    <StyledContainer>
      <SectionTitle
        title="비밀번호를 입력해 주세요"
        subTitle="앞의 2자리를 입력해주세요"
      />
      <CardPasswordInputs {...password} {...passwordError} />
    </StyledContainer>
  );
}
