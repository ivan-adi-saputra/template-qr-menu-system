'use client';
import { useState } from 'react';
import Modal, { ModalHead } from '@/components/ui/Modal';
import Btn, { IconBtn } from '@/components/ui/Btn';
import Thumb from '@/components/ui/Thumb';
import Switch from '@/components/ui/Switch';
import { useMenuStore, useUIStore } from '@/lib/store';
import { CATEGORIES } from '@/lib/data';

const DEFAULT = { name: '', cat: 'signature', price: 35000, desc: '', prep: 4, avail: true, tag: '', img: 'menu photo' };

export default function MenuItemModal({ item, onClose }) {
  const { saveItem, deleteItem } = useMenuStore();
  const { toast } = useUIStore();
  const [f, setF] = useState(item || DEFAULT);
  const set = (k, v) => setF(p => ({ ...p, [k]: v }));
  const editing = !!item?.id;

  return (
    <Modal open onClose={onClose} width={620} align="top">
      <ModalHead
        title={editing ? 'Edit item' : 'Add menu item'}
        sub={editing ? f.name : 'Create a new item for your menu'}
        onClose={onClose}
      />

      <div className="modal-bd col gap-5">
        <div className="row gap-4" style={{ alignItems: 'stretch' }}>
          <div className="col gap-2" style={{ width: 150 }}>
            <Thumb label={f.img || 'photo'} w={150} h={130} r="var(--r-sm)" />
            <Btn
              variant="ghost" size="sm" icon="upload" block
              onClick={() => set('img', f.name ? f.name.toLowerCase().split(' ').slice(0, 2).join(' ') : 'photo')}
            >
              Upload photo
            </Btn>
          </div>

          <div className="grow col gap-4">
            <div>
              <div className="label" style={{ marginBottom: 6 }}>Item name</div>
              <input
                className="field"
                value={f.name}
                placeholder="e.g. Spanish Latte"
                onChange={e => set('name', e.target.value)}
              />
            </div>
            <div className="row gap-3">
              <div className="grow">
                <div className="label" style={{ marginBottom: 6 }}>Category</div>
                <select className="field" value={f.cat} onChange={e => set('cat', e.target.value)}>
                  {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div style={{ width: 150 }}>
                <div className="label" style={{ marginBottom: 6 }}>Price (IDR)</div>
                <input className="field tnum" type="number" value={f.price} onChange={e => set('price', +e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="label" style={{ marginBottom: 6 }}>Description</div>
          <textarea
            className="field"
            rows={2}
            value={f.desc}
            placeholder="Short, appetizing description…"
            onChange={e => set('desc', e.target.value)}
          />
        </div>

        <div className="row gap-4">
          <div className="grow">
            <div className="label" style={{ marginBottom: 6 }}>Prep time (min)</div>
            <input className="field tnum" type="number" value={f.prep} onChange={e => set('prep', +e.target.value)} />
          </div>
          <div className="grow">
            <div className="label" style={{ marginBottom: 6 }}>Tag</div>
            <select className="field" value={f.tag} onChange={e => set('tag', e.target.value)}>
              <option value="">None</option>
              <option value="best">Best seller</option>
              <option value="new">New</option>
            </select>
          </div>
          <div className="col gap-2" style={{ justifyContent: 'flex-end' }}>
            <div className="label">Available</div>
            <Switch on={f.avail} onChange={v => set('avail', v)} />
          </div>
        </div>
      </div>

      <div className="modal-ft" style={{ justifyContent: editing ? 'space-between' : 'flex-end' }}>
        {editing && (
          <Btn
            variant="ghost" icon="trash"
            style={{ color: 'var(--red)' }}
            onClick={() => { deleteItem(item.id); toast('Item deleted', 'trash'); onClose(); }}
          >
            Delete
          </Btn>
        )}
        <div className="row gap-3">
          <Btn variant="ghost" onClick={onClose}>Cancel</Btn>
          <Btn
            icon="check"
            onClick={() => { saveItem(f); toast(editing ? 'Item updated' : 'Item added'); onClose(); }}
          >
            {editing ? 'Save changes' : 'Add item'}
          </Btn>
        </div>
      </div>
    </Modal>
  );
}
