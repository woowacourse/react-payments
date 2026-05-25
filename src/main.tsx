import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';

async function enableMocking() {
    const { worker } = await import('./mocks/browser');
    return worker.start({
        serviceWorker: {
            url: '/react-payments/mockServiceWorker.js',
        },
    });
}
enableMocking().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <BrowserRouter basename="/react-payments">
                <App />
            </BrowserRouter>
        </StrictMode>
    );
});
