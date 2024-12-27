import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPageComponents/FrontPage.jsx';
import Main from './EditorComponents/Main.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/editor" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
