import styled from "styled-components";
import NextActionGuide from "../shared/NextActionGuide/NextActionGuide";
import BaseButton from "../../../../common/components/Button/BaseButton";

const Empty = () => {
  return (
    <EmptyLayout>
      <NextActionGuide
        visualElement={<EmptyCard />}
        title="등록된 카드가 없습니다"
        description="아래 버튼을 눌러 첫 카드를 등록해보세요"
        actionButton={
          <BaseButton onClick={() => console.log("카드 추가")} style="rounded">
            카드 추가하기
          </BaseButton>
        }
      />
    </EmptyLayout>
  );
};

export default Empty;

const EmptyLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const EmptyCard = styled.div`
  width: 160px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 8px;
  background-color: #f5f5f5;
`;
