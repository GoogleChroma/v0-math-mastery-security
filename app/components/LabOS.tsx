'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VideoSearch } from './VideoSearch';
import { Settings } from './Settings';
import { About } from './About';

interface LabOSProps {
  username: string;
  onLogout: () => void;
}

export function LabOS({ username, onLogout }: LabOSProps) {
  const [currentUsername, setCurrentUsername] = useState(username);
  const [activeTab, setActiveTab] = useState('home');

  const handleUsernameChange = (newUsername: string) => {
    setCurrentUsername(newUsername);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Lab_OS</h1>
            <p className="text-sm text-slate-600">Welcome, {currentUsername}</p>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="text-red-600 hover:bg-red-50"
          >
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="home">Video Search</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="mt-6">
            <VideoSearch />
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <About />
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Settings
              currentUsername={currentUsername}
              onUsernameChange={handleUsernameChange}
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
