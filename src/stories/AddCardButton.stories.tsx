import type { Meta } from '@storybook/react';
import AddCardButton from '../components/CardList/AddCardButton/AddCardButton';
import { MemoryRouter } from 'react-router-dom';

/**
 * `AddCardButton` 은 **카드 정보 작성 메뉴**로 사용자를 이동시키기 위한 버튼입니다.
 */
const meta = {
  title: 'AddCardButton',
  component: AddCardButton,
} satisfies Meta<typeof AddCardButton>;

const StandardTemplate = () => (
  <MemoryRouter>
    <AddCardButton showMessage={true} />
  </MemoryRouter>
);

const NoMessageTemplate = () => (
  <MemoryRouter>
    <AddCardButton showMessage={false} />
  </MemoryRouter>
);

export const Standard = StandardTemplate.bind({});

/**
 * 카드가 한 장이라도 카드 목록에 등록된 경우에는, 등록 가이드 메시지를 보여주지 않습니다.
 */
export const NoMessage = NoMessageTemplate.bind({});
export default meta;
