import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPageComponents/FrontPage.jsx';
import Main from './EditorComponents/Main.jsx';
import Overlay from './Overlay.jsx';

createRoot(document.getElementById('root')).render(
  <Overlay/>
);
