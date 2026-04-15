import Chat from './pages/chat/Chat';
import Login from './pages/login/Login';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </>
  );
}

export default App;
