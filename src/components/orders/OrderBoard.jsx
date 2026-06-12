'use client';
import Icon from '@/components/ui/Icon';
import OrderCard from './OrderCard';

const COLS = [
  { id: 'new',       label: 'New',       icon: 'bell',        accent: 'var(--amber)' },
  { id: 'preparing', label: 'Preparing', icon: 'fire',        accent: 'var(--blue)' },
  { id: 'ready',     label: 'Ready',     icon: 'checkcircle', accent: 'var(--green)' },
  { id: 'completed', label: 'Completed', icon: 'check',       accent: 'var(--muted)' },
];

export default function OrderBoard({ orders, onAdvance, onOpen }) {
  return (
    <div className="ob-board">
      {COLS.map(c => {
        const list = orders.filter(o => o.status === c.id);
        return (
          <div key={c.id} className="ob-col">
            <div className="ob-col-hd">
              <span className="row gap-2">
                <Icon name={c.icon} size={16} style={{ color: c.accent }} />
                <b>{c.label}</b>
              </span>
              <span className="ob-count tnum">{list.length}</span>
            </div>
            <div className="ob-col-bd scroll">
              {list.length === 0
                ? <div className="ob-empty">No orders</div>
                : list.map(o => (
                    <OrderCard key={o.id} o={o} onAdvance={onAdvance} onOpen={onOpen} />
                  ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
