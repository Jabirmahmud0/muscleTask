import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthPage variant="login" />} />
      <Route path="/register" element={<AuthPage variant="register" />} />
      <Route path="/verify-otp" element={<AuthPage variant="verifyOtp" />} />
      <Route path="/forgot-password" element={<AuthPage variant="forgotPassword" />} />
      <Route path="/reset-password" element={<AuthPage variant="resetPassword" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
