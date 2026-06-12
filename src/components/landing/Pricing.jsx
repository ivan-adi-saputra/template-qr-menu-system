'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';
import Segmented from '@/components/ui/Segmented';
import { PLANS, fmtIDR } from '@/lib/data';

export default function Pricing() {
  const [cycle, setCycle] = useState('monthly');
  const router = useRouter();
  const yr = cycle === 'yearly';

  const priceOf = p => p.price == null ? null : yr ? Math.round(p.price * 10) : p.price;

  return (
    <section className="lp-sec" id="pricing">
      <div className="lp-wrap">
        <div className="lp-sec-hd">
          <span className="eyebrow">Pricing</span>
          <h2 className="lp-h2">Start free. Upgrade when it pays for itself.</h2>
          <Segmented
            value={cycle}
            options={[
              { value: 'monthly', label: 'Monthly' },
              { value: 'yearly',  label: 'Yearly −17%' },
            ]}
            onChange={setCycle}
          />
        </div>

        <div className="grid-stats" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {PLANS.map(p => {
            const price = priceOf(p);
            return (
              <div key={p.id} className={`card bl-plan${p.popular ? ' pop' : ''}`}>
                {p.popular && <div className="bl-pop">Most popular</div>}
                <div className="card-bd col gap-3" style={{ height: '100%' }}>
                  <div>
                    <div className="h3">{p.name}</div>
                    <div className="xs muted">{p.tagline}</div>
                  </div>
                  <div className="row" style={{ alignItems: 'baseline', gap: 4, minHeight: 38 }}>
                    {price == null
                      ? <div className="h2">Custom</div>
                      : <>
                          <div className="h1 tnum" style={{ fontSize: 26 }}>
                            {price === 0 ? 'Free' : fmtIDR(price, { short: true })}
                          </div>
                          {price !== 0 && <span className="xs muted">/{yr ? 'yr' : 'mo'}</span>}
                        </>
                    }
                  </div>
                  <Btn
                    variant={p.popular ? 'primary' : 'ghost'}
                    block
                    onClick={() => router.push('/admin/billing')}
                  >
                    {p.id === 'enterprise' ? 'Talk to sales' : 'Get started'}
                  </Btn>
                  <hr className="divider" />
                  <ul className="bl-feat">
                    {p.features.slice(0, 5).map((f, i) => (
                      <li key={i}>
                        <Icon name="check" size={15} style={{ color: 'var(--accent)' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
