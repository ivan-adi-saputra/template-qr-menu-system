'use client';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';
import Thumb from '@/components/ui/Thumb';
import EmptyState from '@/components/ui/EmptyState';
import QtyStepper from '@/components/ui/QtyStepper';
import { useCartStore, useMenuStore, useOrderStore } from '@/lib/store';
import { SHOP, fmtIDR } from '@/lib/data';

export default function CartView({ tableId, onBack, onConfirm }) {
  const { cart, setQty, clearCart } = useCartStore();
  const { menu } = useMenuStore();
  const { placeOrder } = useOrderStore();

  const tableName = `Table ${tableId?.replace(/\D/g, '') || '7'}`;

  const cartTotal = cart.reduce((s, i) => {
    const m = menu.find(x => x.id === i.id);
    return s + (m ? m.price * i.qty : 0);
  }, 0);
  const total = cartTotal * 1.15;

  const handlePlaceOrder = () => {
    const order = placeOrder(cart, menu, tableName, 'Dine-in');
    clearCart();
    onConfirm(order.id);
  };

  return (
    <div className="cm">
      <div className="cm-bar">
        <button className="cm-back" onClick={onBack}><Icon name="chevL" /></button>
        <b>Your order</b>
        <span className="muted sm">{SHOP.name}</span>
      </div>

      <div className="cm-scroll scroll" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {cart.length === 0 ? (
          <EmptyState
            icon="bag"
            title="Your cart is empty"
            body="Add a few things from the menu to get started."
            action={<Btn variant="soft" onClick={onBack}>Browse menu</Btn>}
          />
        ) : (
          <>
            <div className="card" style={{ padding: 0 }}>
              {cart.map((c, i) => {
                const m = menu.find(x => x.id === c.id);
                if (!m) return null;
                return (
                  <div
                    key={i}
                    className="row gap-3"
                    style={{ padding: 14, borderBottom: i < cart.length - 1 ? '1px solid var(--border)' : 0 }}
                  >
                    <Thumb label={m.img} w={52} h={52} />
                    <div className="grow">
                      <div style={{ fontWeight: 650 }}>{m.name}</div>
                      {c.note && <div className="xs muted">"{c.note}"</div>}
                      <div className="sm tnum" style={{ color: 'var(--accent-700)', fontWeight: 700, marginTop: 2 }}>
                        {fmtIDR(m.price)}
                      </div>
                    </div>
                    <QtyStepper size="sm" value={c.qty} onChange={v => setQty(c.id, c.note, v)} />
                  </div>
                );
              })}
            </div>

            <div className="card" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div className="row between sm">
                <span className="muted">Subtotal</span>
                <span className="tnum">{fmtIDR(cartTotal)}</span>
              </div>
              <div className="row between sm">
                <span className="muted">Service (5%)</span>
                <span className="tnum">{fmtIDR(cartTotal * 0.05)}</span>
              </div>
              <div className="row between sm">
                <span className="muted">PB1 tax (10%)</span>
                <span className="tnum">{fmtIDR(cartTotal * 0.10)}</span>
              </div>
              <hr className="divider" />
              <div className="row between">
                <b>Total</b>
                <b className="tnum" style={{ fontSize: 18 }}>{fmtIDR(total)}</b>
              </div>
            </div>
          </>
        )}
      </div>

      {cart.length > 0 && (
        <div className="cm-foot">
          <Btn block size="lg" iconR="arrowR" onClick={handlePlaceOrder}>
            Place order · {fmtIDR(total)}
          </Btn>
        </div>
      )}
    </div>
  );
}
