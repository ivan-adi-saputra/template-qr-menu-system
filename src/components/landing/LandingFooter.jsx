import Icon from '@/components/ui/Icon';

const LINKS = [
  ['Product',   ['Menu builder', 'Order board', 'QR codes', 'Analytics']],
  ['Company',   ['About', 'Customers', 'Careers', 'Blog']],
  ['Resources', ['Help center', 'Setup guide', 'API docs', 'Status']],
];

export default function LandingFooter() {
  return (
    <footer className="lp-foot">
      <div className="lp-wrap lp-foot-grid">
        <div style={{ maxWidth: 260 }}>
          <div className="row gap-2" style={{ marginBottom: 12 }}>
            <div className="wm-mark" style={{ width: 28, height: 28 }}>
              <Icon name="coffee" size={16} />
            </div>
            <b style={{ fontSize: 16 }}>Ordio</b>
          </div>
          <p className="sm muted" style={{ margin: 0, lineHeight: 1.6 }}>
            The QR menu & self-ordering platform built for coffee shops and restaurants.
          </p>
        </div>

        {LINKS.map(([heading, items]) => (
          <div key={heading}>
            <div className="label" style={{ marginBottom: 12 }}>{heading}</div>
            <div className="col gap-2">
              {items.map(l => (
                <a key={l} className="lp-link sm">{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="lp-wrap row between lp-foot-bot">
        <span className="xs muted">© 2026 Ordio. Crafted for great coffee.</span>
        <div className="row gap-3">
          <a className="lp-link xs">Privacy</a>
          <a className="lp-link xs">Terms</a>
          <span className="xs muted row gap-1">
            <Icon name="globe" size={13} /> Bahasa · EN
          </span>
        </div>
      </div>
    </footer>
  );
}
