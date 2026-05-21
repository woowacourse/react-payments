import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router';
import { ROUTES } from '../../constants';
import AddCardCompletePage from '../AddCardCompletePage';

describe('카드 등록 완료 페이지 통합 테스트', () => {
  it('9. 완료 페이지에서 확인 버튼 클릭 시 목록 페이지로 이동한다.', async () => {
    // given
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: ROUTES.ADD_CARD_COMPLETE,
            state: { firstCardNumbers: '4444', cardCompany: '국민카드' },
          },
        ]}
      >
        <Routes>
          <Route path={ROUTES.ADD_CARD_COMPLETE} element={<AddCardCompletePage />} />
          <Route path={ROUTES.CARD_LIST} element={<div>Card List Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    // then
    expect(screen.getByText(/4444/)).toBeInTheDocument();
    expect(screen.getByText(/국민카드/)).toBeInTheDocument();

    // when
    fireEvent.click(screen.getByRole('button', { name: '확인' }));

    // then
    expect(screen.getByText('Card List Page')).toBeInTheDocument();
  });
});
