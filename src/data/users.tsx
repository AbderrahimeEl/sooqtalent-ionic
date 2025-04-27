import { User } from '../context/AuthContext';

export const users: User[] = [
  { id: 1, email: 'admin@example.com', password: '123123', role: 'ADMIN' },
  { id: 2, email: 'client@example.com', password: '123123', role: 'CLIENT' },
  { id: 3, email: 'f@example.com', password: '123123', role: 'FREELANCER' },
];