import Icon from '@/components/ui/Icon';

const BENEFITS = [
  { icon: 'zap',      t: 'Tables turn 23% faster',    d: 'No waiting to flag a server. Orders hit the bar the moment a guest is ready.' },
  { icon: 'wallet',   t: 'Higher average spend',       d: 'Photo-rich menus and smart suggestions lift basket size by up to 18%.' },
  { icon: 'chart',    t: 'Know your numbers',          d: 'Live revenue, peak hours, best-sellers and channel mix — across every outlet.' },
  { icon: 'refresh',  t: 'Update in seconds',          d: 'Sold out of croissants? Toggle availability and it reflects on every table at once.' },
  { icon: 'building', t: 'Built for multi-outlet',     d: 'Run Seminyak, Canggu and Ubud from one dashboard with role-based staff access.' },
  { icon: 'shield',   t: 'No hardware, no risk',       d: 'Works on the devices guests already carry. Print a QR, you\'re live today.' },
];

export default function Benefits() {
  return (
    <section className="lp-sec">
      <div className="lp-wrap">
        <div className="lp-sec-hd">
          <span className="eyebrow">Why coffee shops switch</span>
          <h2 className="lp-h2">Built for the morning rush</h2>
        </div>
        <div className="lp-benefits">
          {BENEFITS.map(b => (
            <div key={b.t} className="lp-benefit">
              <div className="lp-benefit-i"><Icon name={b.icon} size={20} /></div>
              <div className="h3" style={{ fontSize: 16 }}>{b.t}</div>
              <p className="sub sm" style={{ margin: 0, lineHeight: 1.55 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
