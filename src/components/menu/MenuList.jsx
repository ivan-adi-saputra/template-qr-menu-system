'use client';
import Thumb from '@/components/ui/Thumb';
import Switch from '@/components/ui/Switch';
import EmptyState from '@/components/ui/EmptyState';
import Btn, { IconBtn } from '@/components/ui/Btn';
import { useMenuStore } from '@/lib/store';
import { CATEGORIES, fmtIDR } from '@/lib/data';

export default function MenuList({ items, onEdit, onAdd }) {
  const { toggleAvail } = useMenuStore();

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
    <div className="card">
      <div style={{ overflowX: 'auto' }}>
        <table className="tbl">
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th className="num">Price</th>
              <th className="num">Sold</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(m => (
              <tr key={m.id}>
                <td>
                  <div className="row gap-3">
                    <Thumb label={m.img} w={40} h={40} />
                    <div>
                      <div style={{ fontWeight: 650 }}>{m.name}</div>
                      <div className="xs muted" style={{ maxWidth: 280, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.desc}</div>
                    </div>
                  </div>
                </td>
                <td className="muted">{CATEGORIES.find(c => c.id === m.cat)?.name}</td>
                <td className="num" style={{ fontWeight: 700 }}>{fmtIDR(m.price)}</td>
                <td className="num muted">{(m.sold || 0).toLocaleString('id-ID')}</td>
                <td><Switch on={m.avail} onChange={() => toggleAvail(m.id)} /></td>
                <td className="num"><IconBtn name="edit" onClick={() => onEdit(m)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
