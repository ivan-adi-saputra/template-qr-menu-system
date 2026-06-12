import AreaChart from '@/components/ui/charts/AreaChart';
import Segmented from '@/components/ui/Segmented';
import { REV_7D, fmtIDR } from '@/lib/data';

const total = REV_7D.reduce((s, d) => s + d.v, 0);

export default function RevenueChart() {
  return (
    <div className="card span-2" style={{ gridColumn: 'span 1' }}>
      <div className="card-hd">
        <div>
          <div className="h3">Revenue</div>
          <div className="xs muted">Last 7 days · {fmtIDR(total, { short: true })} total</div>
        </div>
        <div className="row gap-3">
          <span className="row gap-1 xs muted">
            <span style={{ width: 9, height: 9, borderRadius: 3, background: 'var(--accent)', display: 'inline-block' }} />
            Revenue
          </span>
          <Segmented
            value="7d"
            options={[
              { value: '7d', label: '7D' },
              { value: '30d', label: '30D' },
              { value: '90d', label: '90D' },
            ]}
            onChange={() => {}}
          />
        </div>
      </div>
      <div className="card-bd">
        <AreaChart data={REV_7D} height={210} />
      </div>
    </div>
  );
}
