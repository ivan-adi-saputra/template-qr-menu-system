'use client';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Btn from '@/components/ui/Btn';
import { IconBtn } from '@/components/ui/Btn';
import { useUIStore } from '@/lib/store';
import { STAFF } from '@/lib/data';

const ROLE_TONE = { Owner: 'amber', Manager: 'blue', Barista: 'violet', Cashier: 'gray' };
const active = STAFF.filter(s => s.active).length;

export default function SettingsTeam() {
  const { toast } = useUIStore();

  return (
    <div className="card">
      <div className="card-hd">
        <div>
          <div className="h3">Team members</div>
          <div className="xs muted">{active} active · role-based access</div>
        </div>
        <Btn size="sm" icon="plus" onClick={() => toast('Invite sent')}>Invite member</Btn>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="tbl">
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>Outlet</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {STAFF.map(s => (
              <tr key={s.id}>
                <td>
                  <div className="row gap-3">
                    <Avatar name={s.name} size={36} />
                    <div>
                      <div style={{ fontWeight: 650 }}>{s.name}</div>
                      <div className="xs muted">{s.email}</div>
                    </div>
                  </div>
                </td>
                <td><Badge tone={ROLE_TONE[s.role]}>{s.role}</Badge></td>
                <td className="muted">{s.branch}</td>
                <td>
                  <Badge tone={s.active ? 'green' : 'gray'} dot>
                    {s.active ? 'Active' : 'Invited'}
                  </Badge>
                </td>
                <td className="num"><IconBtn name="dots" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
