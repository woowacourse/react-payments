import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router';
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers';
import AddCardFormTemplate from '../components/AddCardForm/AddCardFormTemplate';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithRoutes = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<AddCardFormTemplate />} />
        <Route path="/cards" element={<div>카드 목록</div>} />
      </Routes>
    </MemoryRouter>,
  );

const fillCardNumber = async (
  user: ReturnType<typeof userEvent.setup>,
  segments = ['4111', '1111', '1111', '1111'],
) => {
  const inputs = screen.getAllByPlaceholderText('1234');
  for (let i = 0; i < segments.length; i++) {
    await user.type(inputs[i], segments[i]);
  }
};

test('카드 번호 입력 섹션이 렌더링된다', () => {
  renderWithRoutes();
  expect(screen.getByText('결제할 카드 번호를 입력해 주세요')).toBeInTheDocument();
});

test('카드 번호 입력이 끝나면 카드사 입력 섹션이 렌더링된다', async () => {
  const user = userEvent.setup();
  renderWithRoutes();

  await fillCardNumber(user);

  expect(screen.getAllByText('카드사를 선택해 주세요')[0]).toBeInTheDocument();
});

test('카드사 입력이 끝나면 유효기간 입력 섹션이 렌더링된다', async () => {
  const user = userEvent.setup();
  renderWithRoutes();

  await fillCardNumber(user);
  await user.selectOptions(screen.getByRole('combobox'), 'BC카드');

  expect(screen.getByText('카드 유효기간을 입력해 주세요')).toBeInTheDocument();
});

test('유효기간 입력이 끝나면 CVC 입력 섹션이 렌더링된다', async () => {
  const user = userEvent.setup();
  renderWithRoutes();

  await fillCardNumber(user);
  await user.selectOptions(screen.getByRole('combobox'), 'BC카드');
  await user.type(screen.getByPlaceholderText('MM'), '12');
  await user.type(screen.getByPlaceholderText('YY'), '26');

  expect(screen.getByText('CVC 번호를 입력해 주세요')).toBeInTheDocument();
});

test('CVC 입력이 끝나면 비밀번호 입력 섹션이 렌더링된다', async () => {
  const user = userEvent.setup();
  renderWithRoutes();

  await fillCardNumber(user);
  await user.selectOptions(screen.getByRole('combobox'), 'BC카드');
  await user.type(screen.getByPlaceholderText('MM'), '12');
  await user.type(screen.getByPlaceholderText('YY'), '26');
  await user.type(screen.getByPlaceholderText('CVC'), '123');

  expect(screen.getByText('비밀번호를 입력해 주세요')).toBeInTheDocument();
});

test('카드가 등록되면 /cards 경로로 이동한다', async () => {
  const user = userEvent.setup();
  renderWithRoutes();

  await fillCardNumber(user);
  await user.selectOptions(screen.getByRole('combobox'), 'BC카드');
  await user.type(screen.getByPlaceholderText('MM'), '12');
  await user.type(screen.getByPlaceholderText('YY'), '26');
  await user.type(screen.getByPlaceholderText('CVC'), '123');
  await user.type(screen.getByPlaceholderText('**'), '12');

  await user.click(screen.getByRole('button', { name: '확인' }));

  await waitFor(() => {
    expect(screen.getByText('카드 목록')).toBeInTheDocument();
  });
});

test('카드 번호가 잘못된 경우 카드 번호 입력 필드 아래 에러 메시지가 출력된다', async () => {
  const user = userEvent.setup();
  renderWithRoutes();

  await fillCardNumber(user, ['9999', '1234', '5678', '9012']);
  await user.selectOptions(screen.getByRole('combobox'), 'BC카드');
  await user.type(screen.getByPlaceholderText('MM'), '12');
  await user.type(screen.getByPlaceholderText('YY'), '12');
  await user.type(screen.getByPlaceholderText('CVC'), '123');
  await user.type(screen.getByPlaceholderText('**'), '12');

  await user.click(screen.getByRole('button', { name: '확인' }));

  await waitFor(() => {
    const section = screen.getByText('결제할 카드 번호를 입력해 주세요').parentElement!;
    expect(within(section).getByText('유효하지 않은 카드 번호입니다.')).toBeInTheDocument();
  });
});

test('카드 유효기간이 잘못된 경우 카드 유효기간 입력 필드 아래 에러 메시지가 출력된다', async () => {
  const user = userEvent.setup();
  renderWithRoutes();

  await fillCardNumber(user, ['5511', '1234', '5678', '9012']);
  await user.selectOptions(screen.getByRole('combobox'), 'BC카드');
  await user.type(screen.getByPlaceholderText('MM'), '13');
  await user.type(screen.getByPlaceholderText('YY'), '28');
  await user.tab();

  await waitFor(() => {
    const section = screen.getByText('카드 유효기간을 입력해 주세요').parentElement!;
    expect(within(section).getByText('유효한 월을 입력해주세요. (01 ~ 12)')).toBeInTheDocument();
  });
});

test('CVC가 잘못된 경우 CVC 입력 필드 아래 에러 메시지가 출력된다', async () => {
  const user = userEvent.setup();
  renderWithRoutes();

  await fillCardNumber(user, ['4111', '1111', '1111', '1111']);
  await user.selectOptions(screen.getByRole('combobox'), 'BC카드');
  await user.type(screen.getByPlaceholderText('MM'), '12');
  await user.type(screen.getByPlaceholderText('YY'), '12');
  await user.type(screen.getByPlaceholderText('CVC'), '000');
  await user.type(screen.getByPlaceholderText('**'), '12');

  await user.click(screen.getByRole('button', { name: '확인' }));

  await waitFor(() => {
    const section = screen.getByText('CVC 번호를 입력해 주세요').parentElement!;
    expect(within(section).getByText('유효하지 않은 CVC입니다.')).toBeInTheDocument();
  });
});
