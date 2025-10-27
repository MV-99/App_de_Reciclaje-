import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '@user/login/Login.jsx'
import Register from '@user/Register/Register.jsx';
import Dashboard from '@home/dashboard.jsx';
import MainLayout from '@/layout/MainLayout.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={
        <MainLayout>
          <Dashboard />
        </MainLayout>
      } />
    </Routes>
  );
}