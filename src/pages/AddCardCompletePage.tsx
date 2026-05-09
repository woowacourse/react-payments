import completeCheckImage from "@assets/completeCheckImage.png";
import Button from "@/components/common/Button";
import styled from "@emotion/styled";
import { COLOR_PALETTE } from "@/styles/colorPalette";

const AddCardCompletePage = () => {
  return (
    <PageWrapper>
      <CompleteCheckImage src={completeCheckImage} alt="completeCheckImage" />
      <CompleteTitle>
        5511로 시작하는
        <br />
        BC카드가 등록되었어요.
      </CompleteTitle>
      <Button>확인</Button>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  max-width: 23rem;
  min-height: 100vh;
  margin-inline: auto;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CompleteCheckImage = styled.img`
  width: 4.75rem;
  height: 4.75rem;
`;

const CompleteTitle = styled.h1`
  margin: 2.5rem 0;
  text-align: center;
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${COLOR_PALETTE["BLACK-700"]};
`;

export default AddCardCompletePage;
