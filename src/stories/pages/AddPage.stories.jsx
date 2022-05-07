import { MemoryRouter } from 'react-router-dom';
import { screen, userEvent } from '@storybook/testing-library';

import { AddPage } from '../../pages';

export default {
  title: 'Example/Page',
  component: [AddPage],
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

function AddTemplate() {
  return <AddPage />;
}

const Add = AddTemplate.bind({});

Add.play = async () => {
  const cardNumberInput = screen.getByTestId('cardNumber');
  await userEvent.type(cardNumberInput, '1111222233334444', {
    delay: 100,
  });

  const CVCInput = screen.getByTestId('CVC');
  await userEvent.type(CVCInput, '123', { delay: 100 });

  const firstPasswordInput = screen.getByTestId('firstPassword');
  await userEvent.type(firstPasswordInput, '1', { delay: 100 });
  const secondPasswordInput = screen.getByTestId('secondPassword');
  await userEvent.type(secondPasswordInput, '2', { delay: 100 });

  // 위에서 제대로 입력되었을 경우에만 다음 버튼이 나타나므로 여기에서 에러가 나지 않으면 통과
  screen.getByRole('button', { name: '다음' });
};

export { Add };
