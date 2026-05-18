import { CardCompanySkeleton, CardDeleteSkeleton, CardInfoSkeleton, CardListPageLayout, CardNumberSkeleton, CardPreviewSkeleton, ExpirationDateSkeleton, ItemSkeleton, LoadingContainer, Title } from "./CardListLoading.styles";

const CardItemSkeleton = () => {
  return (
    <ItemSkeleton>
      <CardPreviewSkeleton />
      <CardInfoSkeleton>
        <CardCompanySkeleton />
        <CardNumberSkeleton />
        <ExpirationDateSkeleton />
      </CardInfoSkeleton>
      <CardDeleteSkeleton />
    </ItemSkeleton>
  );
};

const CardListLoading = () => {
  const skeletonPlaceholder = 3;
  return (
    <CardListPageLayout>
      <Title>보유 카드</Title>
      <LoadingContainer>
        {[...Array(skeletonPlaceholder)].map((_, index) => (
          <CardItemSkeleton key={`skeleton-${index}`} />
        ))}
      </LoadingContainer>
    </CardListPageLayout>
  );
};

export default CardListLoading;
