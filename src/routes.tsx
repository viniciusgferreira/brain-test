import { Routes as AppRoutes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Farms from './pages/Farms';

export default function Routes() {
  return (
    <AppRoutes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Farms />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </AppRoutes>
  );
}
