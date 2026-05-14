import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './common/styles/reset.css';

async function main() {
  // 배포 환경에서도 MSW를 시작해 미션용 API 경계를 모킹
  const {worker} = await import('./mocks/browser');

  await worker.start({
    onUnhandledRequest: 'bypass',
  });

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

main();
