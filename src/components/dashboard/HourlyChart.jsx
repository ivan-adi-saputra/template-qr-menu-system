import BarChart from '@/components/ui/charts/BarChart';
import { HOURLY } from '@/lib/data';

export default function HourlyChart() {
  return (
    <div className="card">
      <div className="card-hd">
        <div>
          <div className="h3">Orders by hour</div>
          <div className="xs muted">Peak at 9–10 AM</div>
        </div>
      </div>
      <div className="card-bd">
        <BarChart data={HOURLY} />
      </div>
    </div>
  );
}
