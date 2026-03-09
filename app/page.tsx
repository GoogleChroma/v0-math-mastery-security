'use client';

import { useState } from 'react';
import { LabOS } from './components/LabOS';
import { Entrance } from './components/Entrance';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginSuccess = (user: string) => {
    setUsername(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  if (!isAuthenticated) {
    return <Entrance onLoginSuccess={handleLoginSuccess} />;
  }

  return <LabOS username={username} onLogout={handleLogout} />;
}
