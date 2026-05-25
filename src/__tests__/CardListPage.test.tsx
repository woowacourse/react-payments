import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardListPage from '../pages/CardListPage';
import { useMyCard } from '../hooks/useMyCard';

vi.mock('../hooks/useMyCard');

const mockUseMyCard = vi.mocked(useMyCard);

function renderCardListPage() {
    return render(
        <MemoryRouter>
            <CardListPage />
        </MemoryRouter>
    );
}

describe('CardListPage', () => {
    beforeEach(() => {
        mockUseMyCard.mockReturnValue({
            myCards: [],
            isLoading: false,
            isError: false,
            deleteMyCard: vi.fn(),
        });
    });

    it('로딩 중이면 에러 메세지를 보여주지 않는다', () => {
        mockUseMyCard.mockReturnValue({
            myCards: [],
            isLoading: true,
            isError: false,
            deleteMyCard: vi.fn(),
        });

        renderCardListPage();

        expect(screen.queryByText('카드 목록을 불러올 수 없어요')).not.toBeInTheDocument();
    });

    it('에러 발생 시 에러 메세지를 보여준다', () => {
        mockUseMyCard.mockReturnValue({
            myCards: [],
            isLoading: false,
            isError: true,
            deleteMyCard: vi.fn(),
        });

        renderCardListPage();

        expect(screen.getByText('카드 목록을 불러올 수 없어요')).toBeInTheDocument();
        expect(screen.getByText('잠시 후 다시 시도해 주세요.')).toBeInTheDocument();
    });

    it('카드가 없으면 빈 목록 안내를 보여준다', () => {
        renderCardListPage();

        expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: '카드 추가하기' })).toBeInTheDocument();
    });

    it('카드가 있으면 카드 목록을 보여준다', () => {
        mockUseMyCard.mockReturnValue({
            myCards: [
                { id: '1', issuerCode: '31', number: '551112******9012', expirationDate: '12/28' },
                { id: '2', issuerCode: '41', number: '411111******1111', expirationDate: '06/30' },
            ],
            isLoading: false,
            isError: false,
            deleteMyCard: vi.fn(),
        });

        renderCardListPage();

        expect(screen.getByText('551112******9012')).toBeInTheDocument();
        expect(screen.getByText('411111******1111')).toBeInTheDocument();
    });
});
