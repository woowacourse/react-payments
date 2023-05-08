import { usePageContext } from '@contexts/usePageContext';
import { ROUTER } from '@constants/router';

export default function App() {
  const { page } = usePageContext();

  return <div className="app">{ROUTER[page]}</div>;
}
