'use client';
import { useState } from 'react';
import Btn from '@/components/ui/Btn';
import Badge from '@/components/ui/Badge';
import Switch from '@/components/ui/Switch';
import { useUIStore } from '@/lib/store';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function SettingsHours() {
  const { toast } = useUIStore();
  const [hours, setHours] = useState(() =>
    DAYS.map((d, i) => ({ d, open: '07:00', close: i === 5 ? '24:00' : '23:00', closed: false }))
  );

  const toggle = (i, v) =>
    setHours(hh => hh.map((x, k) => k === i ? { ...x, closed: !v } : x));

  return (
    <div className="card">
      <div className="card-hd">
        <div>
          <div className="h3">Operating hours</div>
          <div className="xs muted">Customers see these on your menu page</div>
        </div>
        <Btn size="sm" icon="check" onClick={() => toast('Hours updated')}>Save</Btn>
      </div>
      <div className="card-bd col" style={{ gap: 0 }}>
        {hours.map((h, i) => (
          <div
            key={h.d}
            className="row gap-4"
            style={{ padding: '13px 0', borderBottom: i < 6 ? '1px solid var(--border)' : 0, flexWrap: 'wrap' }}
          >
            <div style={{ width: 130, fontWeight: 650 }}>{h.d}</div>
            <Switch on={!h.closed} onChange={v => toggle(i, v)} />
            {h.closed ? (
              <span className="muted sm">Closed</span>
            ) : (
              <div className="row gap-2">
                <input className="field tnum" style={{ width: 110 }} defaultValue={h.open} />
                <span className="muted">–</span>
                <input className="field tnum" style={{ width: 110 }} defaultValue={h.close} />
              </div>
            )}
            {i === 5 && <Badge tone="amber">Late night</Badge>}
          </div>
        ))}
      </div>
    </div>
  );
}
