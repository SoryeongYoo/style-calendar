import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import Closet from './pages/Closet';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import DateDetailPage from './pages/DateDetailPage';
import Join from './pages/Join';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={
          <PrivateRoute>
            <CalendarPage />
          </PrivateRoute>
          } 
        />
        <Route path="/closet" element={<Closet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/calendar/:date" element={<DateDetailPage />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
