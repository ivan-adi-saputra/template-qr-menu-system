'use client';
import Icon from '@/components/ui/Icon';
import Btn, { IconBtn } from '@/components/ui/Btn';
import Avatar from '@/components/ui/Avatar';
import Thumb from '@/components/ui/Thumb';
import OrderStatusBadge from '@/components/ui/OrderStatusBadge';
import { MENU, fmtIDR, timeAgo } from '@/lib/data';

const COLS = [
  { id: 'new',       label: 'New' },
  { id: 'preparing', label: 'Preparing' },
  { id: 'ready',     label: 'Ready' },
  { id: 'completed', label: 'Completed' },
];
const NEXT = { new: 'preparing', preparing: 'ready', ready: 'completed' };
const ADVANCE_LABEL = { new: 'Start preparing', preparing: 'Mark ready', ready: 'Complete order' };

export default function OrderDrawer({ detail, onClose, onAdvance }) {
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const ci = COLS.findIndex(c => c.id === detail.status);

  return (
    <div className="drawer-scrim" onMouseDown={handleBackdrop}>
      <div className="drawer scroll">
        <div className="row between" style={{ marginBottom: 4 }}>
          <div>
            <div className="h2">{detail.id}</div>
            <div className="sm muted">{detail.table} · {detail.type} · {timeAgo(detail.placed)}</div>
          </div>
          <IconBtn name="x" onClick={onClose} />
        </div>

        <div className="row gap-3" style={{ margin: '12px 0 18px' }}>
          <OrderStatusBadge status={detail.status} />
          <span className="row gap-2 sm muted">
            <Avatar name={detail.name} size={24} />
            {detail.name}
          </span>
        </div>

        <div className="ob-steps">
          {COLS.map((c, i) => (
            <div
              key={c.id}
              className="ob-stepdot"
              data-on={i <= ci ? '1' : '0'}
              data-cur={i === ci ? '1' : '0'}
              title={c.label}
            >
              {i < ci ? <Icon name="check" size={13} /> : i + 1}
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 18 }}>
          <div className="card-bd col gap-3">
            {detail.items.map((item, k) => {
              const menuItem = MENU.find(m => m.id === item.id);
              return (
                <div key={k} className="row gap-3">
                  <Thumb label={menuItem?.img || item.name} w={44} h={44} />
                  <div className="grow">
                    <div style={{ fontWeight: 650 }}>{item.qty}× {item.name}</div>
                    {item.note && <div className="xs" style={{ color: 'var(--accent)' }}>"{item.note}"</div>}
                  </div>
                  <b className="tnum sm">{fmtIDR(item.price * item.qty)}</b>
                </div>
              );
            })}
            <hr className="divider" />
            <div className="row between">
              <span className="muted sm">Subtotal</span>
              <span className="tnum sm">{fmtIDR(detail.total)}</span>
            </div>
            <div className="row between">
              <span className="muted sm">Service + tax (15%)</span>
              <span className="tnum sm">{fmtIDR(detail.total * 0.15)}</span>
            </div>
            <div className="row between">
              <b>Total</b>
              <b className="tnum" style={{ fontSize: 17 }}>{fmtIDR(detail.total * 1.15)}</b>
            </div>
          </div>
        </div>

        <div className="row gap-3" style={{ marginTop: 18 }}>
          <Btn variant="ghost" icon="print" block>Print ticket</Btn>
          {NEXT[detail.status]
            ? <Btn block icon="arrowR" onClick={() => onAdvance(detail)}>{ADVANCE_LABEL[detail.status]}</Btn>
            : <Btn block variant="soft" icon="check" disabled>Completed</Btn>}
        </div>
      </div>
    </div>
  );
}
