import { usePageContext } from '@hooks/usePageContext';
import { ROUTER } from '@constants/page';

export default function App() {
  const { page } = usePageContext();

  return <div className="app">{ROUTER[page]}</div>;
}
