import {
  CardListLoadingContainer,
  GlobalAnimation,
  SkeletonAddButton,
  SkeletonCardInfo,
  SkeletonCardItem,
  SkeletonCardPreview,
  SkeletonLine,
} from './CardListLoading.styles';

const SKELETON_ITEMS = Array.from({ length: 3 });

function CardListLoading() {
  return (
    <CardListLoadingContainer data-testid="card-list-loading">
      <GlobalAnimation />
      {SKELETON_ITEMS.map((_, index) => (
        <SkeletonCardItem key={index}>
          <SkeletonCardPreview />
          <SkeletonCardInfo>
            <SkeletonLine width="42%" />
            <SkeletonLine width="74%" />
            <SkeletonLine width="32%" />
          </SkeletonCardInfo>
        </SkeletonCardItem>
      ))}
      <SkeletonAddButton />
    </CardListLoadingContainer>
  );
}

export default CardListLoading;
