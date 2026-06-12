'use client';
import Icon from '@/components/ui/Icon';
import QRCode from '@/components/ui/QRCode';

const urlFor = (tableId) => `ordio.id/m/kopisenja/${tableId}`;

export default function TableGrid({ tables, selected, onSelect }) {
  return (
    <div className="qr-grid">
      {tables.map(t => (
        <button
          key={t.id}
          className="qr-cell"
          data-on={selected === t.id ? '1' : '0'}
          onClick={() => onSelect(t.id)}
        >
          <QRCode value={urlFor(t.id)} size={64} />
          <div className="grow" style={{ textAlign: 'left', minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 'var(--fs-sm)' }}>{t.label}</div>
            <div className="xs muted">{t.seats} seats</div>
            <div className="xs row gap-1" style={{ color: 'var(--accent-700)', marginTop: 2 }}>
              <Icon name="scan" size={12} />{t.scans} scans
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
