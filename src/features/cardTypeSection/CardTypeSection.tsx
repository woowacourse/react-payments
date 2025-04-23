import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import Select from "../../shared/select/Select";
import { StyledContainer } from "./CardTypeSection.css";

export default function CardTypeSection() {
  return (
    <StyledContainer>
      <SectionTitle
        title="카드사를 선택해 주세요"
        subTitle="현재 국내 카드사만 가능합니다."
      />
      <Select
        isError={false}
        onChange={() => alert("Input changed")}
        value="string"
        width="100%"
        options={[
          { value: "", label: "카드사를 선택해주세요" },
          { value: "비자", label: "비자" },
          { value: "마스터카드", label: "마스터카드" },
          { value: "아멕스", label: "아멕스" },
        ]}
      />
    </StyledContainer>
  );
}
