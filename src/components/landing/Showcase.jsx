'use client';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';

const CHECKS = [
  'Real-time kitchen workflow board',
  'Live order tracking for every guest',
  'Auto-updating revenue & insights',
];

const BOARD_COLS = [
  { label: 'New',       tone: 'amber', tickets: [{ id: 'OR-2418', table: 'Table 7' }, { id: 'OR-2417', table: 'Table 2' }] },
  { label: 'Preparing', tone: 'blue',  tickets: [{ id: 'OR-2416', table: 'Takeaway' }, { id: 'OR-2415', table: 'Table 11' }] },
  { label: 'Ready',     tone: 'green', tickets: [{ id: 'OR-2414', table: 'Table 4' }] },
];

export default function Showcase() {
  const router = useRouter();

  return (
    <section className="lp-sec lp-showcase">
      <div className="lp-wrap lp-showcase-grid">
        <div>
          <span className="eyebrow">One board, every order</span>
          <h2 className="lp-h2">Your kitchen, perfectly in sync</h2>
          <p className="lp-lead" style={{ fontSize: 16 }}>
            Every order — dine-in, takeaway, pre-order — lands on a single live board.
            Drag a ticket from New to Preparing to Ready. Guests see each change on their phone.
            Analytics update the second money comes in.
          </p>
          <div className="col gap-3" style={{ marginTop: 20 }}>
            {CHECKS.map(t => (
              <div key={t} className="row gap-3">
                <span className="lp-tick"><Icon name="check" size={14} /></span>
                <b className="sm">{t}</b>
              </div>
            ))}
          </div>
          <Btn icon="arrowR" style={{ marginTop: 24 }} onClick={() => router.push('/admin/orders')}>
            Explore the order board
          </Btn>
        </div>

        <div className="lp-board-prev">
          {BOARD_COLS.map(col => (
            <div key={col.label} className="lp-board-col">
              <div className="row between xs" style={{ marginBottom: 8, fontWeight: 700 }}>
                <span style={{ color: `var(--${col.tone})` }}>{col.label}</span>
                <span className="muted">{col.tickets.length}</span>
              </div>
              {col.tickets.map(t => (
                <div key={t.id} className="lp-ticket">
                  <div className="row between">
                    <b className="xs">{t.id}</b>
                    <span className="xs muted">{t.table}</span>
                  </div>
                  <div className="xs muted" style={{ marginTop: 4 }}>2 items · Rp 80.000</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
