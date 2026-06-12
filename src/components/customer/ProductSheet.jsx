'use client';
import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import Badge from '@/components/ui/Badge';
import Btn from '@/components/ui/Btn';
import Thumb from '@/components/ui/Thumb';
import QtyStepper from '@/components/ui/QtyStepper';
import { useCartStore, useUIStore } from '@/lib/store';
import { fmtIDR } from '@/lib/data';

export default function ProductSheet({ item, onClose }) {
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState('');
  const { addToCart } = useCartStore();
  const { toast } = useUIStore();

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="cm-sheet-wrap" onMouseDown={handleBackdrop}>
      <div className="cm-sheet">
        <Thumb label={item.img} h={200} r={0} style={{ margin: '-1px -1px 0' }} />
        <button className="cm-sheet-x" onClick={onClose}>
          <Icon name="x" />
        </button>
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="row between" style={{ alignItems: 'flex-start', gap: 12 }}>
            <div>
              <div className="h2">{item.name}</div>
              {item.tag === 'best' && <Badge tone="amber" dot>Best seller</Badge>}
              {item.tag === 'new' && <Badge tone="violet" dot>New</Badge>}
            </div>
            <div className="h3 tnum" style={{ whiteSpace: 'nowrap' }}>{fmtIDR(item.price)}</div>
          </div>
          <p className="sub" style={{ margin: 0, lineHeight: 1.55 }}>{item.desc}</p>
          <div className="row gap-3 sm muted">
            <span className="row gap-1"><Icon name="clock" size={14} /> {item.prep} min</span>
            <span className="row gap-1"><Icon name="fire" size={14} /> {item.sold.toLocaleString('id-ID')} sold</span>
          </div>
          <div>
            <div className="label" style={{ marginBottom: 6 }}>Special request</div>
            <input
              className="field"
              placeholder="e.g. less sugar, oat milk…"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
          </div>
          <div className="row gap-3" style={{ marginTop: 4 }}>
            <QtyStepper value={qty} onChange={v => setQty(Math.max(1, v))} />
            <Btn
              block
              onClick={() => {
                addToCart(item.id, qty, note);
                onClose();
                toast(`${qty} × ${item.name} added`, 'bag');
              }}
            >
              Add · {fmtIDR(item.price * qty)}
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
