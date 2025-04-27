import { Outlet, Redirect } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import AdminDashboard from './AdminDashboard';
import ClientDashboard from './ClientDashboard';
import FreelancerDashboard from './FreelancerDashboard';

export default function DashboardLayout() {
  const { user } = useAuth();
  if (!user) return <Redirect to="/login" />; 
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export function MainDashboard() {
  const { user } = useAuth();
  if (!user) return null;
  switch (user.role) {
    case 'ADMIN':
      return <AdminDashboard />;
    case 'CLIENT':
      return <ClientDashboard />;
    default:
      return <FreelancerDashboard />;
  }
}
