import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

/**
 * V16.1 deployment shell. The interactive application is preserved from
 * the approved standalone design preview in public/application.html.
 * This ensures the deployed version matches the HTML the team reviewed.
 * The form logic itself is currently vanilla JavaScript; migrating individual
 * screens to React components is a separate future development step.
 */
function Application() {
  return <main className="application-shell">
    <iframe title="FNS Application Design V16.1 interactive demo"
      src="/application.html" className="application-frame"
      allow="clipboard-write" />
  </main>;
}

createRoot(document.getElementById('root')).render(<Application />);
