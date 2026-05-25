import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CardAddCompletePage from '../pages/CardAddCompletePage';

function renderWithRoutes(initialEntry: string | { pathname: string; state: unknown }) {
    return render(
        <MemoryRouter initialEntries={[initialEntry]}>
            <Routes>
                <Route path="/complete" element={<CardAddCompletePage />} />
                <Route path="/list" element={<div>list page</div>} />
            </Routes>
        </MemoryRouter>
    );
}

describe('CardAddCompletePage', () => {
    it('state 없이 접근하면 /list로 리다이렉트한다', () => {
        renderWithRoutes('/complete');

        expect(screen.getByText('list page')).toBeInTheDocument();
    });

    it('올바른 state로 접근하면 카드 정보를 표시한다', () => {
        renderWithRoutes({ pathname: '/complete', state: { cardNumberPrefix: '1234', cardBrand: 'BC' } });

        expect(screen.getByText(/1234로 시작하는/)).toBeInTheDocument();
        expect(screen.getByText(/BC카드/)).toBeInTheDocument();
    });

    it('확인 버튼을 클릭하면 /list로 이동한다', async () => {
        const user = userEvent.setup();
        renderWithRoutes({ pathname: '/complete', state: { cardNumberPrefix: '1234', cardBrand: 'BC' } });

        await user.click(screen.getByRole('link', { name: '확인' }));

        expect(screen.getByText('list page')).toBeInTheDocument();
    });
});
