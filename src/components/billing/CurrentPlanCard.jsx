'use client';
import Icon from '@/components/ui/Icon';
import Badge from '@/components/ui/Badge';
import Btn from '@/components/ui/Btn';
import { fmtIDR } from '@/lib/data';

const USAGE = [
  { label: 'Outlets',      used: 2,  total: 3,   pct: (2 / 3) * 100 },
  { label: 'QR tables',    used: 18, total: '∞',  pct: 32 },
  { label: 'Menu items',   used: 19, total: '∞',  pct: 28 },
];

export default function CurrentPlanCard({ onUpgrade }) {
  return (
    <div className="card" style={{ background: 'linear-gradient(120deg, var(--accent-soft), var(--surface) 70%)' }}>
      <div className="card-bd row between wrap gap-4">
        <div className="row gap-4">
          <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--accent)', color: '#fff', display: 'grid', placeItems: 'center' }}>
            <Icon name="bolt" size={24} />
          </div>
          <div>
            <div className="row gap-2">
              <div className="h2">Pro plan</div>
              <Badge tone="green" dot>Active</Badge>
            </div>
            <div className="sm muted">Renews 1 July 2026 · {fmtIDR(399000)}/mo · 2 of 3 outlets used</div>
          </div>
        </div>
        <div className="row gap-3">
          <Btn variant="ghost">Cancel plan</Btn>
          <Btn icon="rocket" onClick={onUpgrade}>Upgrade to Enterprise</Btn>
        </div>
      </div>

      <div className="divider" />

      <div className="card-bd grid-3" style={{ gap: 28 }}>
        {USAGE.map(({ label, used, total, pct }) => (
          <div key={label}>
            <div className="row between sm" style={{ marginBottom: 7 }}>
              <span className="muted">{label}</span>
              <span className="tnum"><b>{used}</b> / {total}</span>
            </div>
            <div className="bar"><i style={{ width: `${pct}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
