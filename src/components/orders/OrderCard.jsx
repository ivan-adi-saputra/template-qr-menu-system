'use client';
import Icon from '@/components/ui/Icon';
import Badge from '@/components/ui/Badge';
import Btn from '@/components/ui/Btn';
import { fmtIDR, timeAgo } from '@/lib/data';

const NEXT = { new: 'preparing', preparing: 'ready', ready: 'completed' };

export default function OrderCard({ o, onAdvance, onOpen, compact }) {
  const count = o.items.reduce((s, i) => s + i.qty, 0);

  return (
    <div className={'ob-card' + (o.fresh ? ' fresh' : '')} onClick={() => onOpen(o.id)}>
      <div className="row between">
        <div className="row gap-2">
          <b style={{ fontSize: 'var(--fs-sm)' }}>{o.id}</b>
          {o.fresh && <Badge tone="amber">New</Badge>}
        </div>
        <span className="xs muted tnum">{timeAgo(o.placed)}</span>
      </div>

      <div className="row gap-2 xs muted" style={{ marginTop: 3 }}>
        <span className="row gap-1">
          {o.type === 'Takeaway'
            ? <Icon name="bag" size={13} />
            : <Icon name="store" size={13} />}
          {o.table}
        </span>
        <span>·</span>
        <span>{count} items</span>
        <span>·</span>
        <span>{o.name}</span>
      </div>

      <div className="ob-items">
        {o.items.slice(0, compact ? 2 : 4).map((i, k) => (
          <div key={k} className="row gap-2 sm" style={{ padding: '2px 0' }}>
            <span className="tnum muted" style={{ width: 18 }}>{i.qty}×</span>
            <span className="grow" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {i.name}
              {i.note && <i className="xs" style={{ color: 'var(--accent)' }}> · {i.note}</i>}
            </span>
          </div>
        ))}
        {o.items.length > (compact ? 2 : 4) && (
          <div className="xs muted" style={{ paddingLeft: 26 }}>
            +{o.items.length - (compact ? 2 : 4)} more
          </div>
        )}
      </div>

      <div className="row between" style={{ marginTop: 10 }}>
        <b className="tnum">{fmtIDR(o.total)}</b>
        {NEXT[o.status] && (
          <Btn
            size="sm"
            variant={o.status === 'ready' ? 'soft' : 'primary'}
            onClick={e => { e.stopPropagation(); onAdvance(o); }}
          >
            {o.status === 'new' ? 'Accept' : o.status === 'preparing' ? 'Ready' : 'Complete'}
          </Btn>
        )}
      </div>
    </div>
  );
}
