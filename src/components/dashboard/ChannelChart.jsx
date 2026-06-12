import Donut from '@/components/ui/charts/Donut';
import { CHANNELS } from '@/lib/data';

export default function ChannelChart({ ordersToday }) {
  return (
    <div className="card">
      <div className="card-hd">
        <div className="h3">Order channels</div>
        <span className="xs muted">today</span>
      </div>
      <div className="card-bd row gap-5" style={{ alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <Donut data={CHANNELS} />
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
            <div>
              <div className="tnum" style={{ fontSize: 24, fontWeight: 800 }}>{ordersToday}</div>
              <div className="xs muted">orders</div>
            </div>
          </div>
        </div>
        <div className="grow col gap-3">
          {CHANNELS.map(c => (
            <div key={c.label} className="row between">
              <span className="row gap-2 sm">
                <span style={{ width: 10, height: 10, borderRadius: 3, background: c.color, display: 'inline-block' }} />
                {c.label}
              </span>
              <b className="tnum sm">{c.v}%</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
