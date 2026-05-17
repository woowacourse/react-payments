import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export default function MyCardItemSkeleton() {
    return (
        <CardItemContainer>
            <CardIssuerColorBox />
            <CardInfoContainer>
                <SkeletonBox width="80px" height="14px" />
                <SkeletonBox width="140px" height="11px" />
                <SkeletonBox width="80px" height="9.5px" />
            </CardInfoContainer>
        </CardItemContainer>
    );
}

const shimmer = keyframes`
    0% { background-position: -300px 0; }
    100% { background-position: 300px 0; }
`;

const SkeletonBase = styled.div`
    background: linear-gradient(90deg, #ebebeb 25%, #f5f5f5 50%, #ebebeb 75%);
    background-size: 600px 100%;
    animation: ${shimmer} 1.5s infinite linear;
    border-radius: 4px;
`;

const SkeletonBox = styled(SkeletonBase)<{ width: string; height: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

const CardItemContainer = styled.div`
    width: 320px;
    height: 73px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    gap: 12px;
    align-items: center;
`;

const CardIssuerColorBox = styled(SkeletonBase)`
    width: 64px;
    height: 40px;
    flex-shrink: 0;
`;

const CardInfoContainer = styled.div`
    width: 178px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
