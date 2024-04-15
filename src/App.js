import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/App.css';
import MainPage from './pages/MainPage';
import StoryList from './pages/StoryList';
import Stry1 from './pages/story/StoryTelegram';
import December2023 from './pages/gallery/December2023';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/list' element={<StoryList />} />
        <Route path='/list/stry1' element={<Stry1 />} />
        <Route path='/des23' element={<December2023/>}/>
        <Route path='*' element={< NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
