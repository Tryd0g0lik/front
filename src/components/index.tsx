import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "../css/style.css";
import { AppFC } from './App';
const root = document.getElementById('root');

if ((root !== null) && (root !== undefined)) {
  createRoot(root).render(
    <StrictMode>
      <AppFC />
    </StrictMode>
  );
}

