import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from '@sentry/react';
import { browserTracingIntegration, replayIntegration } from '@sentry/browser';

/*if (import.meta.env.PROD) {
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
}*/

Sentry.init({
    dsn: "https://0de229014267e915adc9c6de0c0aca02@o4512018279956480.ingest.de.sentry.io/4512027606777936",
    dataCollection: {
        // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
        // https://docs.sentry.io/platforms/javascript/guides/react/configuration/options/#dataCollection
        // userInfo: false,
        // httpBodies: []
    }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
