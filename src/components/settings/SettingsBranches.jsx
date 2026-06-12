'use client';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';
import Badge from '@/components/ui/Badge';
import Thumb from '@/components/ui/Thumb';
import { useUIStore } from '@/lib/store';
import { BRANCHES, fmtIDR } from '@/lib/data';

const open = BRANCHES.filter(b => b.status === 'Open').length;

export default function SettingsBranches() {
  const { toast } = useUIStore();

  return (
    <div className="col gap-4">
      <div className="sec-hd">
        <div className="sm muted">{open} of {BRANCHES.length} outlets open now</div>
        <Btn size="sm" icon="plus" onClick={() => toast('Add outlet flow')}>Add outlet</Btn>
      </div>
      <div className="grid-3">
        {BRANCHES.map(b => (
          <div key={b.id} className="card">
            <div className="card-bd col gap-3">
              <Thumb label={b.name.toLowerCase()} h={92} />
              <div className="row between">
                <div>
                  <div style={{ fontWeight: 700 }}>{b.name}</div>
                  <div className="xs muted row gap-1">
                    <Icon name="pin" size={12} />{b.address}
                  </div>
                </div>
                <Badge tone={b.status === 'Open' ? 'green' : 'gray'} dot>{b.status}</Badge>
              </div>
              <hr className="divider" />
              <div className="row between sm">
                <span className="muted">{b.tables} tables</span>
                <span className="tnum" style={{ fontWeight: 700 }}>
                  {b.today ? fmtIDR(b.today, { short: true }) : '—'} today
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
