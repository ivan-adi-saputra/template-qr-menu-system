'use client';
import Icon from '@/components/ui/Icon';
import Badge from '@/components/ui/Badge';
import { useOrderStore, useMenuStore } from '@/lib/store';

const STEPS = ['new', 'preparing', 'ready', 'completed'];
const LABELS = {
  new: 'Order received',
  preparing: 'Barista is making it',
  ready: 'Ready — coming to your table',
  completed: 'Delivered. Enjoy!',
};

export default function TrackView({ placedId, tableId, onBack }) {
  const { orders } = useOrderStore();
  const { menu } = useMenuStore();

  const tableName = `Table ${tableId?.replace(/\D/g, '') || '7'}`;
  const placed = orders.find(o => o.id === placedId);
  const ci = STEPS.indexOf(placed?.status || 'new');

  const estMin = placed
    ? Math.max(1, Math.round(placed.items.reduce((s, i) => {
        const m = menu.find(x => x.id === i.id);
        return Math.max(s, m?.prep || 4);
      }, 0)))
    : 5;

  return (
    <div className="cm">
      <div className="cm-bar">
        <button className="cm-back" onClick={onBack}><Icon name="chevL" /></button>
        <b>Order {placedId}</b>
        <span className="muted sm">{tableName}</span>
      </div>

      <div className="cm-scroll scroll" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
          <div className="cm-live">
            <span className="cm-live-dot" /> Live
          </div>
          <div className="h2" style={{ marginTop: 4 }}>{LABELS[placed?.status || 'new']}</div>
          <div className="sm muted">Est. {estMin} min · we&apos;ll update you here</div>
        </div>

        <div className="card" style={{ padding: '0 16px' }}>
          {STEPS.map((s, i) => (
            <div
              key={s}
              className="row gap-3"
              style={{ padding: '10px 0', opacity: i <= ci ? 1 : 0.4, borderBottom: i < STEPS.length - 1 ? '1px solid var(--border)' : 0 }}
            >
              <div
                className="cm-step"
                data-on={i <= ci ? '1' : '0'}
                data-cur={i === ci ? '1' : '0'}
              >
                {i < ci ? <Icon name="check" size={15} /> : i + 1}
              </div>
              <div className="grow" style={{ fontWeight: i === ci ? 700 : 500 }}>{LABELS[s]}</div>
              {i === ci && <Badge tone="amber" dot>Now</Badge>}
            </div>
          ))}
        </div>

        <div className="sm muted" style={{ textAlign: 'center' }}>
          Watching the merchant board? Change this order&apos;s status there and it updates here instantly.
        </div>
      </div>
    </div>
  );
}
