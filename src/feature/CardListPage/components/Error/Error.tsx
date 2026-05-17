import styled from "styled-components";
import NextActionGuide from "../shared/NextActionGuide/NextActionGuide";
import BaseButton from "../../../../common/components/Button/BaseButton";

const Error = ({ onRetry }: { onRetry: () => void }) => {
  return (
    <ErrorLayout>
      <NextActionGuide
        visualElement={<ErrorIcon>!</ErrorIcon>}
        title="카드 목록을 불러올 수 없어요"
        description="잠시 후 다시 시도해 주세요"
        actionButton={
          <BaseButton onClick={onRetry} style="rounded">
            다시 시도
          </BaseButton>
        }
      />
    </ErrorLayout>
  );
};

export default Error;

const ErrorLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ErrorIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #333333;
  font-size: 32px;
  font-weight: 700;
  color: white;
`;
