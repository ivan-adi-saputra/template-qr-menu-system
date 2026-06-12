'use client';
import { useRouter } from 'next/navigation';
import Btn from '@/components/ui/Btn';

export default function LandingCTA() {
  const router = useRouter();

  return (
    <section className="lp-sec">
      <div className="lp-wrap">
        <div className="lp-cta">
          <h2 className="lp-h2" style={{ color: '#fff', fontSize: 32 }}>
            Print a QR. Start taking orders today.
          </h2>
          <p style={{ color: 'rgba(255,255,255,.82)', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            Set up your menu in minutes and watch the first order land on your board.
            Free to start, no card required.
          </p>
          <div className="row gap-3 center" style={{ marginTop: 8 }}>
            <Btn
              size="lg"
              variant="dark"
              icon="rocket"
              style={{ background: '#fff', color: 'var(--accent-700)' }}
              onClick={() => router.push('/admin')}
            >
              Open the dashboard
            </Btn>
            <Btn
              size="lg"
              variant="ghost"
              icon="phone"
              style={{ borderColor: 'rgba(255,255,255,.5)', color: '#fff' }}
              onClick={() => router.push('/menu/t7')}
            >
              Try guest menu
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
