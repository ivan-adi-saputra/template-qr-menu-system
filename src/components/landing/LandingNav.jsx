'use client';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';

export default function LandingNav() {
  return (
    <header className="lp-nav">
      <div className="lp-wrap row between">
        <div className="row gap-2">
          <div className="wm-mark" style={{ width: 30, height: 30 }}>
            <Icon name="coffee" size={18} />
          </div>
          <b style={{ fontSize: 17, letterSpacing: '-.02em' }}>Ordio</b>
        </div>

        <nav className="lp-links">
          <a className="lp-link">Product</a>
          <a className="lp-link">How it works</a>
          <a className="lp-link" href="#pricing">Pricing</a>
          <a className="lp-link">Customers</a>
        </nav>

        <div className="row gap-3">
          <Link href="/admin" className="lp-link">Sign in</Link>
          <Btn icon="arrowR" onClick={() => window.location.href = '/admin'}>
            Open dashboard
          </Btn>
        </div>
      </div>
    </header>
  );
}
