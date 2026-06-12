import Icon from '@/components/ui/Icon';
import Avatar from '@/components/ui/Avatar';

const QUOTES = [
  { q: 'We replaced paper menus on a Friday and saw our busiest Saturday ever — fewer mistakes, calmer baristas.',       n: 'Maya Pradnya', r: 'Owner · Kopi Senja, Bali' },
  { q: 'The kitchen board alone paid for the year. Tickets are clear, nothing gets lost at the pass.',                  n: 'Andre Wijaya',  r: 'Head Barista · Loka Coffee' },
  { q: 'Rolling Ordio across five outlets took an afternoon. The central menu sync is a lifesaver.',                    n: 'Tara Sutanto',  r: 'Operations · Senja Group' },
];

export default function Testimonials() {
  return (
    <section className="lp-sec lp-quotes-sec">
      <div className="lp-wrap">
        <div className="lp-sec-hd">
          <span className="eyebrow">Loved by operators</span>
          <h2 className="lp-h2">From one cafe to coffee groups</h2>
        </div>
        <div className="lp-quotes">
          {QUOTES.map(t => (
            <div key={t.n} className="lp-quote">
              <div className="row gap-1" style={{ color: 'var(--amber)', marginBottom: 12 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" size={15} />
                ))}
              </div>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, fontWeight: 500 }}>
                &ldquo;{t.q}&rdquo;
              </p>
              <div className="row gap-3" style={{ marginTop: 18 }}>
                <Avatar name={t.n} size={40} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 'var(--fs-sm)' }}>{t.n}</div>
                  <div className="xs muted">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
