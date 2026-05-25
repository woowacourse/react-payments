import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CardAddPage from '../pages/CardAddPage';

function renderCardAddPage() {
    return render(
        <MemoryRouter initialEntries={['/add-card']}>
            <Routes>
                <Route path="/add-card" element={<CardAddPage />} />
                <Route path="/complete" element={<div>complete page</div>} />
            </Routes>
        </MemoryRouter>
    );
}

async function fillAllFields(
    user: ReturnType<typeof userEvent.setup>,
    options: { cardNumbers?: [string, string, string, string]; cvc?: string } = {}
) {
    const cardNumbers = options.cardNumbers ?? ['1234', '5678', '9012', '3456'];
    const cvc = options.cvc ?? '123';

    const cardInputs = screen.getAllByPlaceholderText('1234');
    for (let i = 0; i < 4; i++) {
        await user.type(cardInputs[i], cardNumbers[i]);
    }

    await user.click(await screen.findByText('카드사를 선택해주세요'));
    await user.click(screen.getByText('BC카드'));

    await user.type(await screen.findByPlaceholderText('MM'), '12');
    await user.type(screen.getByPlaceholderText('YY'), '29');

    await user.type(await screen.findByPlaceholderText('123'), cvc);

    await user.type(await screen.findByPlaceholderText(''), '12');
}

describe('CardAddPage', () => {
    it('초기 렌더 시 카드 번호 입력 섹션만 보인다', () => {
        renderCardAddPage();

        expect(screen.getByText('결제할 카드 번호를 입력해 주세요')).toBeInTheDocument();
        expect(screen.queryByText('카드사를 선택해 주세요')).not.toBeInTheDocument();
        expect(screen.queryByText('카드 유효기간을 입력해 주세요')).not.toBeInTheDocument();
    });

    it('카드 번호 입력 완료 시 카드사 선택 섹션이 나타난다', async () => {
        const user = userEvent.setup();
        renderCardAddPage();

        const cardInputs = screen.getAllByPlaceholderText('1234');
        for (let i = 0; i < 4; i++) {
            await user.type(cardInputs[i], ['1234', '5678', '9012', '3456'][i]);
        }

        expect(await screen.findByText('카드사를 선택해 주세요')).toBeInTheDocument();
    });

    it('서버에서 INVALID_CARD_NUMBER 에러 발생 시 카드 번호 에러 메세지를 보여준다', async () => {
        const user = userEvent.setup();
        renderCardAddPage();

        await fillAllFields(user, { cardNumbers: ['9999', '1234', '5678', '9012'] });

        await user.click(screen.getByRole('button', { name: '확인' }));

        expect(await screen.findByText('유효하지 않은 카드 번호입니다.')).toBeInTheDocument();
    });

    it('서버에서 INVALID_CVC 에러 발생 시 CVC 에러 메세지를 보여준다', async () => {
        const user = userEvent.setup();
        renderCardAddPage();

        await fillAllFields(user, { cvc: '000' });

        await user.click(screen.getByRole('button', { name: '확인' }));

        expect(await screen.findByText('유효하지 않은 CVC입니다.')).toBeInTheDocument();
    });

    it('카드 등록에 성공하면 /complete 페이지로 이동한다', async () => {
        const user = userEvent.setup();
        renderCardAddPage();

        await fillAllFields(user);

        await user.click(screen.getByRole('button', { name: '확인' }));

        expect(await screen.findByText('complete page')).toBeInTheDocument();
    });
});
