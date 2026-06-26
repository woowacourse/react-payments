import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CardRegistrationPage from '../pages/CardRegistrationPage';
import RegistrationCompletionPage from '../pages/RegistrationCompletionPage';

const renderRegistrationFlow = () =>
  render(
    <MemoryRouter initialEntries={['/registration']}>
      <Routes>
        <Route path="/registration" element={<CardRegistrationPage />} />
        <Route path="/registration/completion" element={<RegistrationCompletionPage />} />
      </Routes>
    </MemoryRouter>
  );

const fillValidForm = async (user: ReturnType<typeof userEvent.setup>) => {
  const cardNumberInputs = screen.getAllByPlaceholderText('1234');
  await user.type(cardNumberInputs[0], '4111');
  await user.type(cardNumberInputs[1], '1111');
  await user.type(cardNumberInputs[2], '1111');
  await user.type(cardNumberInputs[3], '1111');

  await user.selectOptions(await screen.findByLabelText('카드사 선택'), '국민카드');

  await user.type(await screen.findByPlaceholderText('MM'), '12');
  await user.type(screen.getByPlaceholderText('YY'), '30');

  await user.type(await screen.findByPlaceholderText('123'), '123');

  await user.type(await screen.findByPlaceholderText('**'), '12');
};

describe('CardRegistrationPage 통합 테스트', () => {
  it('필수 입력을 모두 정상 입력하면 제출 버튼이 활성화된다', async () => {
    const user = userEvent.setup();
    renderRegistrationFlow();

    expect(screen.queryByRole('button', { name: '확인' })).not.toBeInTheDocument();

    await fillValidForm(user);

    const submitButton = await screen.findByRole('button', { name: '확인' });
    expect(submitButton).toBeEnabled();
  });

  it('카드 번호 첫 자리에 4를 입력하면 VISA 브랜드 아이콘이 나타난다', async () => {
    const user = userEvent.setup();
    renderRegistrationFlow();

    expect(screen.queryByAltText('card-brand-image')).not.toBeInTheDocument();

    await user.type(screen.getAllByPlaceholderText('1234')[0], '4');

    const brandImage = await screen.findByAltText('card-brand-image');
    expect(brandImage).toHaveAttribute('src', expect.stringContaining('visa.svg'));
  });

  it('폼 제출이 성공하면 완료 페이지로 이동해 등록 결과를 보여준다', async () => {
    const user = userEvent.setup();
    renderRegistrationFlow();

    await fillValidForm(user);

    await user.click(await screen.findByRole('button', { name: '확인' }));

    expect(await screen.findByText(/4111로 시작하는/)).toBeInTheDocument();
    expect(screen.getByText(/국민카드가 등록되었어요/)).toBeInTheDocument();
    expect(screen.getByAltText('complete-icon')).toBeInTheDocument();
  });
});
