import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import MyCardItemSkeleton from './MyCardItem/MyCardItemSkeleton';

export default function CardListLoading() {
    return (
        <CardListLoadingContainer>
            <MyCardItemSkeleton />
            <MyCardItemSkeleton />
            <MyCardItemSkeleton />
            <SkeletonButton />
        </CardListLoadingContainer>
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

const CardListLoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 320px;
`;

const SkeletonButton = styled(SkeletonBase)`
    width: 100%;
    height: 48px;
    border-radius: 8px;
`;
