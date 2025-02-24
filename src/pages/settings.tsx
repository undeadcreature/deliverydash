import React from 'react';

export function SettingsPage() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Notifications</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="email-notifications"
                  name="email-notifications"
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="email-notifications" className="text-sm font-medium text-gray-700">
                  Email notifications
                </label>
                <p className="text-sm text-gray-500">Receive email notifications for new orders and updates.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="push-notifications"
                  name="push-notifications"
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="push-notifications" className="text-sm font-medium text-gray-700">
                  Push notifications
                </label>
                <p className="text-sm text-gray-500">Receive push notifications for new orders and updates.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium">Theme</h3>
          <div className="mt-4">
            <select
              id="theme"
              name="theme"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}