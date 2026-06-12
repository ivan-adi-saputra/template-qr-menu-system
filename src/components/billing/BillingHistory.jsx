'use client';
import Badge from '@/components/ui/Badge';
import Btn from '@/components/ui/Btn';
import { IconBtn } from '@/components/ui/Btn';
import { useUIStore } from '@/lib/store';
import { BILLING_HISTORY, fmtIDR } from '@/lib/data';

export default function BillingHistory() {
  const { toast } = useUIStore();

  return (
    <div className="card">
      <div className="card-hd">
        <div className="h3">Billing history</div>
        <Btn size="sm" variant="ghost" icon="download">Export all</Btn>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="tbl">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Date</th>
              <th>Plan</th>
              <th className="num">Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {BILLING_HISTORY.map(b => (
              <tr key={b.id}>
                <td style={{ fontWeight: 700 }}>{b.id}</td>
                <td className="muted">{b.date}</td>
                <td>{b.plan}</td>
                <td className="num" style={{ fontWeight: 700 }}>{fmtIDR(b.amount)}</td>
                <td><Badge tone="green" dot>{b.status}</Badge></td>
                <td className="num">
                  <IconBtn name="download" onClick={() => toast('Invoice downloaded', 'download')} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
