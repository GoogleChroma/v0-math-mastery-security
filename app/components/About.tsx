'use client';

import { Card } from '@/components/ui/card';

export function About() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">About Lab_OS</h2>
        <p className="text-slate-700 mb-6">
          Lab_OS is an educational platform designed to help users discover and
          learn from quality educational content. Our mission is to make learning
          accessible, engaging, and effective for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">
              Platform Features
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Video search across educational content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Personalized user settings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Secure authentication system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Easy-to-use interface</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Team
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="font-semibold text-slate-900">Owner</p>
                  <p className="text-slate-700">Valens</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold text-slate-900">Administrator</p>
                  <p className="text-slate-700">GoogleChroma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-slate-50">
        <h3 className="font-semibold text-slate-900 mb-2">
          {/* EASILY EDITABLE SECTION - Modify content below */}
          Mission Statement
        </h3>
        <p className="text-slate-700">
          {/* Edit this text to update the mission statement */}
          To provide a secure, user-friendly platform that connects learners with
          high-quality educational resources and empowers them to achieve their
          learning goals.
        </p>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold text-slate-900 mb-2">
          {/* EASILY EDITABLE SECTION */}
          Vision
        </h3>
        <p className="text-slate-700">
          {/* Edit this text to update the vision */}
          To become the leading educational platform where knowledge is accessible,
          affordable, and actionable for learners worldwide.
        </p>
      </Card>
    </div>
  );
}
