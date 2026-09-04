import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from '@sentry/react';
import { browserTracingIntegration, replayIntegration } from '@sentry/browser';

if (import.meta.env.PROD) {
    Sentry.init({
        dsn: import.meta.env.VITE_SENTRY_DSN,

        integrations: [
            browserTracingIntegration(),
            replayIntegration(),
        ],

        tracesSampleRate: 1.0,
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
    });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
