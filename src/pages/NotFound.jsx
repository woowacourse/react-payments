import Button from "components/Button";
import { NotFoundPageWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageWrapper>
      <div>존재하지 않는 페이지입니다.</div>
      <Button onClick={() => navigate("/")}>홈으로 이동하기</Button>
    </NotFoundPageWrapper>
  );
};

export default NotFound;
