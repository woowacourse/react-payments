import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CardListPage from '../pages/CardListPage';
import { cardDB } from '../mocks/db';
import { server } from '../mocks/server';

const renderCardListPage = () =>
  render(
    <MemoryRouter initialEntries={['/list']}>
      <Routes>
        <Route path="/list" element={<CardListPage />} />
      </Routes>
    </MemoryRouter>
  );

describe('CardListPage 통합 테스트', () => {
  it('등록된 카드가 없으면 빈 상태 UI와 카드 추가 버튼을 보여준다', async () => {
    renderCardListPage();

    expect(await screen.findByText('등록된 카드가 없습니다')).toBeInTheDocument();
    expect(screen.getByText('아래 버튼을 눌러 첫 카드를 등록해보세요')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '카드 추가하기' })).toBeInTheDocument();
  });

  it('등록된 카드가 있으면 카드사·번호·유효기간을 렌더링하고 개수를 표시한다', async () => {
    cardDB.add({
      number: '4111111111111111',
      expirationDate: '12/30',
      cvc: '123',
      issuerCode: '11',
    });
    cardDB.add({
      number: '5555555555554444',
      expirationDate: '06/28',
      cvc: '456',
      issuerCode: '41',
    });

    renderCardListPage();

    expect(await screen.findByText('국민카드')).toBeInTheDocument();
    expect(screen.getByText('신한카드')).toBeInTheDocument();
    expect(screen.getByText('4111 **** **** 1111')).toBeInTheDocument();
    expect(screen.getByText('5555 **** **** 4444')).toBeInTheDocument();
    expect(screen.getByText('유효기간 12/30')).toBeInTheDocument();
    expect(screen.getByText('유효기간 06/28')).toBeInTheDocument();
    expect(screen.getByText('보유 카드 (2)')).toBeInTheDocument();
  });

  it('카드 목록 API가 실패하면 에러 UI와 다시 시도 버튼을 보여준다', async () => {
    server.use(http.get('*/cards', () => new HttpResponse(null, { status: 500 })));

    renderCardListPage();

    expect(await screen.findByText('카드 목록을 불러올 수 없어요')).toBeInTheDocument();
    expect(screen.getByText('잠시 후 다시 시도해 주세요.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '다시 시도' })).toBeInTheDocument();
  });
});
