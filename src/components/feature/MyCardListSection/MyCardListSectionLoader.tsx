import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { COLOR_PALETTE } from "@styles/colorPalette";

const SKELETON_ITEM_COUNT = 3;

const MyCardListSectionLoader = () => {
  return (
    <Wrapper>
      <Header>보유 카드</Header>
      <CardContainer>
        {Array.from({ length: SKELETON_ITEM_COUNT }).map((_, index) => (
          <SkeletonCardItem key={index}>
            <SkeletonMiniCard />
            <SkeletonInfo>
              <SkeletonLine width="40%" height="14px" />
              <SkeletonLine width="80%" height="11px" />
              <SkeletonLine width="30%" height="11px" />
            </SkeletonInfo>
          </SkeletonCardItem>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;

const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

const skeletonBackground = css`
  background-color: #ededed;
  background-image: linear-gradient(
    90deg,
    #ededed 0px,
    #f5f5f5 40px,
    #ededed 80px
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;

const SkeletonCardItem = styled.li`
  display: flex;
  gap: 1rem;
  border: 1px solid ${COLOR_PALETTE.GRAY};
  border-radius: 8px;
  width: 100%;
  align-items: center;
  padding: 1rem;
`;

const SkeletonMiniCard = styled.div`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  flex-shrink: 0;
  ${skeletonBackground}
`;

const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const SkeletonLine = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 4px;
  ${skeletonBackground}
`;

export default MyCardListSectionLoader;
