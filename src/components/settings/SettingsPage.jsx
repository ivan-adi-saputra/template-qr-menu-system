'use client';
import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import SettingsProfile  from './SettingsProfile';
import SettingsHours    from './SettingsHours';
import SettingsBranches from './SettingsBranches';
import SettingsTeam     from './SettingsTeam';
import SettingsBranding from './SettingsBranding';

const TABS = [
  ['profile',  'Shop profile',      'store'],
  ['hours',    'Operating hours',   'clock'],
  ['branches', 'Branches',          'building'],
  ['team',     'Team',              'users'],
  ['branding', 'Branding',          'sparkles'],
];

export default function SettingsPage() {
  const [tab, setTab] = useState('profile');

  return (
    <div className="page" style={{ maxWidth: 1080 }}>
      <div className="st-tabs">
        {TABS.map(([id, label, icon]) => (
          <button
            key={id}
            className="st-tab"
            data-on={tab === id ? '1' : '0'}
            onClick={() => setTab(id)}
          >
            <Icon name={icon} size={17} />
            {label}
          </button>
        ))}
      </div>

      {tab === 'profile'  && <SettingsProfile />}
      {tab === 'hours'    && <SettingsHours />}
      {tab === 'branches' && <SettingsBranches />}
      {tab === 'team'     && <SettingsTeam />}
      {tab === 'branding' && <SettingsBranding />}
    </div>
  );
}
