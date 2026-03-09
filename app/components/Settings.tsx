'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface SettingsProps {
  currentUsername: string;
  onUsernameChange: (newUsername: string) => void;
}

export function Settings({
  currentUsername,
  onUsernameChange
}: SettingsProps) {
  const [newUsername, setNewUsername] = useState(currentUsername);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleSaveUsername = () => {
    if (!newUsername.trim()) {
      setMessage('Username cannot be empty');
      setMessageType('error');
      return;
    }

    if (newUsername === currentUsername) {
      setMessage('New username is the same as current');
      setMessageType('error');
      return;
    }

    // Save username change
    onUsernameChange(newUsername);
    setMessage('Username updated successfully');
    setMessageType('success');

    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  const handleReset = () => {
    setNewUsername(currentUsername);
    setMessage('');
    setMessageType('');
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Account Settings
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Current Username
            </label>
            <div className="p-3 bg-slate-100 rounded-md border border-slate-200 text-slate-900">
              {currentUsername}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              New Username
            </label>
            <Input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="Enter new username"
            />
          </div>

          {message && (
            <div
              className={`p-3 rounded-md ${
                messageType === 'success'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}
            >
              {message}
            </div>
          )}

          <div className="flex gap-2">
            <Button
              onClick={handleSaveUsername}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Save Changes
            </Button>
            <Button onClick={handleReset} variant="outline">
              Reset
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-slate-50">
        <h3 className="font-semibold text-slate-900 mb-2">Lab_OS Info</h3>
        <p className="text-sm text-slate-600">
          Version 1.0 - Educational Video Platform
        </p>
      </Card>
    </div>
  );
}
