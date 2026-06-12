'use client';
import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';
import Segmented from '@/components/ui/Segmented';
import { useOrderStore, useUIStore } from '@/lib/store';
import { ORDER_STATUS } from '@/components/ui/OrderStatusBadge';
import OrderBoard from './OrderBoard';
import OrderList from './OrderList';
import OrderDrawer from './OrderDrawer';

const COLS = [
  { id: 'new',       label: 'New',       icon: 'bell',  accent: 'var(--amber)' },
  { id: 'preparing', label: 'Preparing', icon: 'fire',  accent: 'var(--blue)' },
  { id: 'ready',     label: 'Ready',     icon: 'checkcircle', accent: 'var(--green)' },
];
const NEXT = { new: 'preparing', preparing: 'ready', ready: 'completed' };

export default function OrdersPage() {
  const { orders, updateOrderStatus } = useOrderStore();
  const { toast } = useUIStore();
  const [mode, setMode] = useState('board');
  const [openId, setOpenId] = useState(null);

  const detail = openId ? orders.find(o => o.id === openId) : null;
  const counts = COLS.reduce((m, c) => ({ ...m, [c.id]: orders.filter(o => o.status === c.id).length }), {});

  const advance = (o) => {
    const n = NEXT[o.status];
    if (!n) return;
    updateOrderStatus(o.id, n);
    toast(`${o.id} → ${ORDER_STATUS[n].label}`, ORDER_STATUS[n].icon);
  };

  return (
    <div className="page" style={{ maxWidth: 1400 }}>
      <div className="sec-hd">
        <div className="row gap-3 wrap">
          {COLS.map(c => (
            <div key={c.id} className="row gap-2 ob-pill">
              <Icon name={c.icon} size={15} style={{ color: c.accent }} />
              <b className="tnum">{counts[c.id]}</b>
              <span className="muted sm">{c.label}</span>
            </div>
          ))}
        </div>
        <div className="row gap-3">
          <Segmented
            value={mode}
            options={[
              { value: 'board', label: 'Board' },
              { value: 'list',  label: 'List'  },
            ]}
            onChange={setMode}
          />
          <Btn variant="ghost" icon="filter">Filter</Btn>
        </div>
      </div>

      {mode === 'board'
        ? <OrderBoard orders={orders} onAdvance={advance} onOpen={setOpenId} />
        : <OrderList  orders={orders} onAdvance={advance} onOpen={setOpenId} />}

      {detail && (
        <OrderDrawer
          detail={detail}
          onClose={() => setOpenId(null)}
          onAdvance={advance}
        />
      )}
    </div>
  );
}
