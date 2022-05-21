import { Routes as AppRoutes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

export default function Routes() {
  return (
    <AppRoutes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </AppRoutes>
  );
}
