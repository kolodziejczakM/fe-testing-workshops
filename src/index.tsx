import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
