'use client';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';
import OrderStatusBadge from '@/components/ui/OrderStatusBadge';
import { fmtIDR, timeAgo } from '@/lib/data';

const NEXT = { new: 'preparing', preparing: 'ready', ready: 'completed' };
const ADVANCE_LABEL = { new: 'Start preparing', preparing: 'Mark ready', ready: 'Complete order' };

export default function OrderList({ orders, onAdvance, onOpen }) {
  return (
    <div className="card">
      <div style={{ overflowX: 'auto' }}>
        <table className="tbl">
          <thead>
            <tr>
              <th>Order</th>
              <th>Table</th>
              <th>Items</th>
              <th>Status</th>
              <th>Placed</th>
              <th className="num">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr
                key={o.id}
                className={o.fresh ? 'row-fresh' : ''}
                onClick={() => onOpen(o.id)}
                style={{ cursor: 'pointer' }}
              >
                <td style={{ fontWeight: 700 }}>{o.id}</td>
                <td>
                  <span className="row gap-2">
                    {o.type === 'Takeaway'
                      ? <Icon name="bag" size={15} style={{ color: 'var(--muted)' }} />
                      : <Icon name="store" size={15} style={{ color: 'var(--muted)' }} />}
                    {o.table}
                  </span>
                </td>
                <td className="muted">
                  {o.items.reduce((s, i) => s + i.qty, 0)} items · {o.items[0]?.name}
                  {o.items.length > 1 ? ` +${o.items.length - 1}` : ''}
                </td>
                <td><OrderStatusBadge status={o.status} /></td>
                <td className="muted">{timeAgo(o.placed)}</td>
                <td className="num" style={{ fontWeight: 700 }}>{fmtIDR(o.total)}</td>
                <td className="num">
                  {NEXT[o.status] && (
                    <Btn
                      size="sm"
                      variant="soft"
                      onClick={e => { e.stopPropagation(); onAdvance(o); }}
                    >
                      {ADVANCE_LABEL[o.status]}
                    </Btn>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
