'use client';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import OrderStatusBadge from '@/components/ui/OrderStatusBadge';
import { fmtIDR, timeAgo } from '@/lib/data';

export default function RecentOrders({ orders }) {
  const recent = orders.slice(0, 6);

  return (
    <div className="card">
      <div className="card-hd">
        <div className="h3">Recent orders</div>
        <Link href="/admin/orders" className="link xs">Go to order board →</Link>
      </div>
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
            </tr>
          </thead>
          <tbody>
            {recent.map(o => (
              <tr key={o.id} className={o.fresh ? 'row-fresh' : ''}>
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
                  {o.items.reduce((s, i) => s + i.qty, 0)} items · {o.items[0]?.name}{o.items.length > 1 ? ` +${o.items.length - 1}` : ''}
                </td>
                <td><OrderStatusBadge status={o.status} /></td>
                <td className="muted">{timeAgo(o.placed)}</td>
                <td className="num" style={{ fontWeight: 700 }}>{fmtIDR(o.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
