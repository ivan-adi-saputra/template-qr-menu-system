'use client';
import Icon from '@/components/ui/Icon';
import Badge from '@/components/ui/Badge';
import Thumb from '@/components/ui/Thumb';
import Switch from '@/components/ui/Switch';
import EmptyState from '@/components/ui/EmptyState';
import Btn from '@/components/ui/Btn';
import { useMenuStore, useUIStore } from '@/lib/store';
import { CATEGORIES, fmtIDR } from '@/lib/data';

export default function MenuGrid({ items, onEdit, onAdd }) {
  const { toggleAvail } = useMenuStore();
  const { toast } = useUIStore();

  if (items.length === 0) {
    return (
      <div className="card">
        <EmptyState
          icon="book"
          title="No items found"
          body="Try a different search or category, or add a new item."
          action={<Btn icon="plus" onClick={onAdd}>Add item</Btn>}
        />
      </div>
    );
  }

  return (
    <div className="mm-grid">
      {items.map(m => (
        <div key={m.id} className={'card mm-card' + (m.avail ? '' : ' off')}>
          <div style={{ position: 'relative' }}>
            <Thumb label={m.img} h={132} r={0} />
            <div className="mm-tags">
              {m.tag === 'best' && <Badge tone="amber">★ Best</Badge>}
              {m.tag === 'new'  && <Badge tone="violet">New</Badge>}
              {!m.avail         && <Badge tone="red">Sold out</Badge>}
            </div>
            <button className="mm-edit" onClick={() => onEdit(m)}>
              <Icon name="edit" size={15} />
            </button>
          </div>
          <div style={{ padding: 14 }}>
            <div className="row between" style={{ alignItems: 'flex-start', gap: 8 }}>
              <div className="grow" style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.name}</div>
                <div className="xs muted">{CATEGORIES.find(c => c.id === m.cat)?.name}</div>
              </div>
              <b className="tnum" style={{ color: 'var(--accent-700)', whiteSpace: 'nowrap' }}>{fmtIDR(m.price)}</b>
            </div>
            <div className="row between" style={{ marginTop: 12 }}>
              <span className="xs muted row gap-1">
                <Icon name="fire" size={13} />{(m.sold || 0).toLocaleString('id-ID')} sold
              </span>
              <span
                className="row gap-2 xs"
                style={{ fontWeight: 650, color: m.avail ? 'var(--green)' : 'var(--muted)' }}
              >
                {m.avail ? 'Available' : 'Hidden'}
                <Switch
                  on={m.avail}
                  onChange={() => {
                    toggleAvail(m.id);
                    toast(m.avail ? `${m.name} hidden` : `${m.name} available`);
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
