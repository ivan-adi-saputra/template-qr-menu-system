import Icon from '@/components/ui/Icon';

const STEPS = [
  { icon: 'qr',   t: 'Scan',   d: 'Guest scans the table QR — no app, no sign-up. Your branded menu opens instantly.' },
  { icon: 'book', t: 'Browse', d: 'Beautiful photos, live availability and prices. Filter by category, see what\'s popular.' },
  { icon: 'bag',  t: 'Order',  d: 'Add to cart, leave notes, place the order. It lands on your board in real time.' },
  { icon: 'fire', t: 'Serve',  d: 'Baristas advance each ticket through the kitchen board. Guests track it live.' },
];

export default function HowItWorks() {
  return (
    <section className="lp-sec">
      <div className="lp-wrap">
        <div className="lp-sec-hd">
          <span className="eyebrow">How it works</span>
          <h2 className="lp-h2">From scan to served in four steps</h2>
        </div>
        <div className="lp-steps">
          {STEPS.map((s, i) => (
            <div key={s.t} className="lp-step">
              <div className="lp-step-n"><Icon name={s.icon} size={22} /></div>
              <div className="lp-step-i tnum">0{i + 1}</div>
              <div className="h3">{s.t}</div>
              <p className="sub sm" style={{ margin: 0, lineHeight: 1.5 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
