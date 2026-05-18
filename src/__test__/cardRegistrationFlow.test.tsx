import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/node';
import PaymentWidget from '../components/PaymentWidget';
import { CardListPage } from '../components/CardListPage/CardListPage';
import CompletePage from '../components/completePage/CompletePage';

const renderApp = (initialPath = '/cards') =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/cards" element={<CardListPage />} />
        <Route path="/addCard" element={<PaymentWidget />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
    </MemoryRouter>,
  );

const fillValidForm = () => {
  const numberInputs = screen.getAllByPlaceholderText('1234');
  fireEvent.change(numberInputs[0], { target: { value: '4111' } });
  fireEvent.change(numberInputs[1], { target: { value: '1111' } });
  fireEvent.change(numberInputs[2], { target: { value: '1111' } });
  fireEvent.change(numberInputs[3], { target: { value: '1111' } });

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'BC' } });

  fireEvent.change(screen.getByPlaceholderText('MM'), { target: { value: '12' } });
  fireEvent.change(screen.getByPlaceholderText('YY'), { target: { value: '30' } });

  fireEvent.change(screen.getByPlaceholderText('123'), { target: { value: '123' } });

  fireEvent.change(screen.getByPlaceholderText('**'), { target: { value: '12' } });
};

describe('카드 등록 한 사이클', () => {
  it('카드 추가 버튼 → 폼 제출 → 완료 페이지 → 확인 시 목록에 노출된다', async () => {
    renderApp('/cards');

    const addButton = await screen.findByRole('button', { name: '카드 추가하기' });
    fireEvent.click(addButton);

    fillValidForm();
    fireEvent.click(await screen.findByRole('button', { name: '확인' }));

    expect(await screen.findByText(/등록되었어요/)).toBeTruthy();
    expect(screen.getByText(/4111로 시작하는/)).toBeTruthy();
    expect(screen.getByText(/BC카드가 등록되었어요/)).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: '확인' }));

    expect(await screen.findByText('BC카드')).toBeTruthy();
    expect(screen.getByText('4111111111111111')).toBeTruthy();
  });

  it('등록 도중 400 응답을 받으면 완료 페이지로 넘어가지 않고 에러 메시지가 남는다', async () => {
    server.use(
      http.post('/cards', () =>
        HttpResponse.json(
          { code: 'cardBrand', message: '지원하지 않는 카드사입니다' },
          { status: 400 },
        ),
      ),
    );

    renderApp('/addCard');

    fillValidForm();
    fireEvent.click(await screen.findByRole('button', { name: '확인' }));

    expect(await screen.findByText('지원하지 않는 카드사입니다')).toBeTruthy();
    expect(screen.queryByText(/등록되었어요/)).toBeNull();
    expect(screen.getByRole('button', { name: '확인' })).toBeTruthy();
  });

  it('완료 페이지에 state 없이 직접 접근하면 목록 페이지로 리다이렉트된다', async () => {
    renderApp('/complete');

    expect(await screen.findByText(/등록된 카드가 없습니다|보유 카드/)).toBeTruthy();
    expect(screen.queryByText(/등록되었어요/)).toBeNull();
  });
});
