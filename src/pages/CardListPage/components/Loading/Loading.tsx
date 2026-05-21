import styled from "styled-components";
import CardItemSkeleton from "./CardItemSkeleton/CardItemSkeleton";

const Loading = () => {
  return (
    <LoadingLayout>
      <CardItemSkeleton />
      <CardItemSkeleton />
      <CardItemSkeleton />
      <ButtonSkeleton />
    </LoadingLayout>
  );
};

export default Loading;

const LoadingLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const ButtonSkeleton = styled.div`
  width: 100%;
  height: 44px;
  border: 1px dashed #f0f0f0;
  border-radius: 6px;
  background-color: #f7f7f7;
`;
