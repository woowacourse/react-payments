import styled from "@emotion/styled";
import Flex from "../Common/Flex";
import { useNavigate } from "react-router-dom";

const CardPlaceholder = styled.div`
  width: 160px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-black);
`;

const Description = styled.span`
  font-size: 12px;
  color: var(--color-description);
`;

const AddButton = styled.button`
  margin-top: 14px;
  width: 100%;
  padding: 15px;
  background-color: #333333;
  color: var(--color-white);
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Noto Sans KR;
  font-style: Bold;
  font-size: 15px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
`;

function EmptyCardList() {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      gap={24}
      style={{ height: "100%", color: "#F5F5F5" }}
    >
      <Flex
        direction="column"
        gap={16}
        justifyContent="center"
        style={{ flex: 1, alignItems: "center", color: "#F5F5F5" }}
      >
        <CardPlaceholder />
        <Flex direction="column" gap={8} style={{ alignItems: "center" }}>
          <Title>등록된 카드가 없습니다</Title>
          <Description>아래 버튼을 눌러 첫 카드를 등록해보세요</Description>
        </Flex>
        <AddButton onClick={() => navigate("/cards/register")}>
          카드 추가하기
        </AddButton>
      </Flex>
    </Flex>
  );
}

export default EmptyCardList;
