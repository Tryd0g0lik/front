import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "../css/style.css";
import "../js/jcarousel.basic.js";
import "../js/respond.js";
import "../js/ie.js";

import { AppFC } from './App';
const root = document.getElementById('root');

if ((root !== null) && (root !== undefined)) {
  createRoot(root).render(
    <StrictMode>
      <AppFC />
    </StrictMode>
  );
}

