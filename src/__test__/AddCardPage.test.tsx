import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/node';
import AddCardPage from '../components/AddCardPage/AddCardPage';

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

describe('AddCardPage', () => {
  it('등록 400 응답을 받으면 해당 필드 아래에 메시지를 표시한다', async () => {
    server.use(
      http.post('/cards', () =>
        HttpResponse.json(
          { code: 'cardBrand', message: '지원하지 않는 카드사입니다' },
          { status: 400 },
        ),
      ),
    );

    render(
      <MemoryRouter initialEntries={['/addCard']}>
        <AddCardPage />
      </MemoryRouter>,
    );

    fillValidForm();

    const confirmButton = await screen.findByRole('button', { name: '확인' });
    fireEvent.click(confirmButton);

    expect(await screen.findByText('지원하지 않는 카드사입니다')).toBeTruthy();
  });
});
