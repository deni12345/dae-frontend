import { memo } from "react";

export const Settings = memo(() => {
  return (
    <div className="user-setting-view">
      <h1>User Settings</h1>
      <p>Manage your user settings here.</p>
      {/* Additional user setting components can be added here */}
    </div>
  );
});
