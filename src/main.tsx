import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (typeof global === 'undefined') {
  const globalProxy = new Proxy(window, {
    set(target, prop, value) {
      if (prop === 'fetch') {
        return true;
      }
      (target as any)[prop] = value;
      return true;
    },
    get(target, prop) {
      const value = (target as any)[prop];
      if (typeof value === 'function') {
        return value.bind(target);
      }
      return value;
    }
  });
  (window as any).global = globalProxy;
  (window as any).globalThis = (window as any).globalThis || globalProxy;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
