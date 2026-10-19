import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePages';
import MenuPage from './pages/MenuPage';
import ScrollToHash from './components/scrollToHash';
import ScrollProgressBar from './components/ProgressionBar';

function App() {
  return (
    <>
      <ScrollProgressBar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </>
  );
}

export default App;