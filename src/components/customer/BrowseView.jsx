'use client';
import { useState, useRef } from 'react';
import Icon from '@/components/ui/Icon';
import Badge from '@/components/ui/Badge';
import Thumb from '@/components/ui/Thumb';
import CoverHero from './CoverHero';
import { useCartStore, useMenuStore, useUIStore } from '@/lib/store';
import { CATEGORIES, SHOP, fmtIDR } from '@/lib/data';

export default function BrowseView({ tableId, onViewCart, onOpenSheet }) {
  const [activeCat, setActiveCat] = useState(CATEGORIES[0].id);
  const scrollRef = useRef(null);

  const { cart, addToCart } = useCartStore();
  const { menu } = useMenuStore();
  const { toast } = useUIStore();

  const tableName = `Table ${tableId?.replace(/\D/g, '') || '7'}`;
  const qtyOf = (id) => cart.filter(c => c.id === id).reduce((s, c) => s + c.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => {
    const m = menu.find(x => x.id === i.id);
    return s + (m ? m.price * i.qty : 0);
  }, 0);

  const jumpCat = (cid) => {
    setActiveCat(cid);
    const el = scrollRef.current?.querySelector(`[data-cat="${cid}"]`);
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({ top: el.offsetTop - 116, behavior: 'smooth' });
    }
  };

  return (
    <div className="cm">
      <CoverHero
        shopName={SHOP.name}
        location={SHOP.location}
        rating={SHOP.rating}
        table={tableName}
        height={208}
      />
      <div className="cm-scroll scroll" ref={scrollRef}>
        <div className="cm-info">
          <span className="row">
            <Icon name="coffee" size={14} style={{ color: 'var(--accent)' }} /> {SHOP.tagline}
          </span>
          <span className="sep">·</span>
          <span className="muted">{SHOP.reviews.toLocaleString('id-ID')} reviews</span>
          <span className="sep">·</span>
          <span className="row muted"><Icon name="clock" size={14} /> 07:00 – 23:00</span>
        </div>

        <div className="cm-cats">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className="cm-cat"
              data-on={activeCat === c.id ? '1' : '0'}
              onClick={() => jumpCat(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div style={{ padding: '4px 16px 120px' }}>
          {CATEGORIES.map(cat => {
            const items = menu.filter(m => m.cat === cat.id);
            if (!items.length) return null;
            return (
              <div key={cat.id} data-cat={cat.id} style={{ paddingTop: 18 }}>
                <div className="row gap-2" style={{ marginBottom: 10 }}>
                  <Icon name={cat.icon} size={17} style={{ color: 'var(--accent)' }} />
                  <div className="h3">{cat.name}</div>
                  <span className="muted sm">· {items.length}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {items.map(m => {
                    const q = qtyOf(m.id);
                    return (
                      <div
                        key={m.id}
                        className={'cm-card' + (m.avail ? '' : ' off')}
                        onClick={() => m.avail && onOpenSheet(m)}
                      >
                        <div className="grow">
                          <div className="row gap-2" style={{ marginBottom: 2 }}>
                            <span style={{ fontWeight: 700 }}>{m.name}</span>
                            {m.tag === 'best' && <Badge tone="amber">★ Best</Badge>}
                            {m.tag === 'new' && <Badge tone="violet">New</Badge>}
                          </div>
                          <div
                            className="sm muted"
                            style={{ lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                          >
                            {m.desc}
                          </div>
                          <div className="tnum" style={{ fontWeight: 700, color: 'var(--accent-700)', marginTop: 7 }}>
                            {m.avail ? fmtIDR(m.price) : 'Sold out'}
                          </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                          <Thumb label={m.img} w={92} h={92} />
                          {m.avail && (q > 0
                            ? <div className="cm-qbadge tnum">{q}</div>
                            : (
                              <button
                                className="cm-add"
                                onClick={e => {
                                  e.stopPropagation();
                                  addToCart(m.id, 1);
                                  toast(`${m.name} added`, 'bag');
                                }}
                              >
                                <Icon name="plus" size={18} />
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {cartCount > 0 && (
        <button className="cm-cartbar" onClick={onViewCart}>
          <span className="cm-cartbar-n tnum">{cartCount}</span>
          <span className="grow" style={{ textAlign: 'left', fontWeight: 700 }}>View cart</span>
          <span className="tnum" style={{ fontWeight: 700 }}>{fmtIDR(cartTotal)}</span>
          <Icon name="arrowR" />
        </button>
      )}
    </div>
  );
}
