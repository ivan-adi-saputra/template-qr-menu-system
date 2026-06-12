'use client';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';
import Badge from '@/components/ui/Badge';
import QRCode from '@/components/ui/QRCode';
import AreaChart from '@/components/ui/charts/AreaChart';
import { REV_7D, fmtIDR } from '@/lib/data';

const STATS = [
  ['1,000+', 'Coffee shops'],
  ['2.4M', 'Orders / month'],
  ['4.9★', 'Merchant rating'],
];

export default function LandingHero() {
  const router = useRouter();

  return (
    <section className="lp-hero">
      <div className="lp-wrap lp-hero-grid">
        {/* copy */}
        <div className="lp-hero-copy">
          <Badge tone="amber" style={{ height: 28, padding: '0 12px' }}>
            <Icon name="sparkles" size={14} /> Trusted by 1,000+ coffee shops
          </Badge>

          <h1 className="lp-h1">The QR menu that runs your whole coffee shop.</h1>

          <p className="lp-lead">
            Ordio turns every table into a self-order station — then routes orders straight to your
            kitchen board and analytics. No app for guests. No hardware for you.
          </p>

          <div className="row gap-3 wrap">
            <Btn size="lg" icon="rocket" onClick={() => router.push('/admin')}>Start free</Btn>
            <Btn size="lg" variant="ghost" icon="phone" onClick={() => router.push('/menu/t7')}>
              See the guest menu
            </Btn>
          </div>

          <div className="row gap-5" style={{ marginTop: 26 }}>
            {STATS.map(([v, l]) => (
              <div key={l}>
                <div className="tnum h2" style={{ fontSize: 22 }}>{v}</div>
                <div className="xs muted">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* visual */}
        <div className="lp-hero-visual">
          {/* dashboard preview */}
          <div className="lp-dash">
            <div className="row between" style={{ marginBottom: 14 }}>
              <div className="row gap-2">
                <div className="wm-mark" style={{ width: 24, height: 24, borderRadius: 7 }}>
                  <Icon name="coffee" size={14} />
                </div>
                <b className="sm">Dashboard</b>
              </div>
              <Badge tone="green" dot>Live</Badge>
            </div>
            <div style={{ display: 'grid', gap: 10, gridTemplateColumns: '1fr 1fr' }}>
              <div className="lp-mini">
                <div className="xs muted">Revenue today</div>
                <div className="tnum" style={{ fontSize: 19, fontWeight: 800 }}>Rp 4,2jt</div>
                <div className="delta up xs"><Icon name="arrowUp" size={11} />18%</div>
              </div>
              <div className="lp-mini">
                <div className="xs muted">Orders</div>
                <div className="tnum" style={{ fontSize: 19, fontWeight: 800 }}>121</div>
                <div className="delta up xs"><Icon name="arrowUp" size={11} />+12</div>
              </div>
            </div>
            <div className="lp-mini" style={{ marginTop: 10 }}>
              <AreaChart data={REV_7D} height={92} />
            </div>
          </div>

          {/* phone mini preview */}
          <div className="lp-phone-mini">
            <div className="cm-cover" style={{ height: 70, borderRadius: '18px 18px 0 0' }}>
              <div className="ph cm-cover-img" style={{ borderRadius: '18px 18px 0 0', height: '100%' }}>
                <span>cover</span>
              </div>
            </div>
            <div style={{ padding: 12 }}>
              <div className="row gap-2" style={{ marginTop: -22 }}>
                <div className="cm-logo" style={{ width: 40, height: 40, fontSize: 16, borderRadius: 12 }}>KS</div>
              </div>
              <div style={{ fontWeight: 800, marginTop: 8 }}>Kopi Senja</div>
              <div className="xs muted">Scan · Table 7</div>
              <div className="lp-mini" style={{ marginTop: 10, padding: 10 }}>
                <div className="row gap-2">
                  <div className="ph" style={{ width: 34, height: 34, borderRadius: 7 }} />
                  <div className="grow">
                    <div className="xs" style={{ fontWeight: 700 }}>Signature Latte</div>
                    <div className="xs" style={{ color: 'var(--accent-700)', fontWeight: 700 }}>
                      {fmtIDR(42000)}
                    </div>
                  </div>
                  <div className="cm-add" style={{ position: 'static', width: 26, height: 26, border: 0 }}>
                    <Icon name="plus" size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR float */}
          <div className="lp-qr-float">
            <QRCode value="ordio.id/m/kopisenja/t7" size={76} />
          </div>
        </div>
      </div>
    </section>
  );
}
