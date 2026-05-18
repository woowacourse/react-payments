import CheckBtn from "../components/button/CheckBtn";
import styled from "@emotion/styled";

interface Props {
  type: "success" | "error";
  onClick: () => void;
}

const CONTENT = {
  success: {
    img: `${import.meta.env.BASE_URL}GhostCard.svg`,
    title: "등록된 카드가 없습니다",
    description: "아래 버튼을 눌러 첫 카드를 등록해보세요",
    buttonLabel: "카드 추가하기",
  },
  error: {
    img: `${import.meta.env.BASE_URL}ErrorIcon.svg`,
    title: "카드 목록을 불러올 수 없어요",
    description: "잠시 후 다시 시도해 주세요",
    buttonLabel: "다시 시도",
  },
};

export default function EmptyCardList({ type, onClick }: Props) {
  const { img, title, description, buttonLabel } = CONTENT[type];
  return (
    <Container>
      <img src={img} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CheckBtn onClick={onClick}>{buttonLabel}</CheckBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 320px;
  height: 330px;
  padding-top: 100px;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  font-family: sans-serif;
  line-height: 100%;
`;

const Description = styled.p`
  color: #8c8c8c;
  font-weight: 400;
  font-size: 12px;
  font-family: sans-serif;
  line-height: 100%;
`;
