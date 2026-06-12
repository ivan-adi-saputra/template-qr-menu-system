'use client';
import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';
import Segmented from '@/components/ui/Segmented';
import { useUIStore } from '@/lib/store';
import { PLANS, fmtIDR } from '@/lib/data';
import CurrentPlanCard from './CurrentPlanCard';
import BillingHistory from './BillingHistory';
import UpgradeModal from './UpgradeModal';

export default function BillingPage() {
  const { toast } = useUIStore();
  const [cycle, setCycle] = useState('monthly');
  const [current, setCurrent] = useState('pro');
  const [upgrade, setUpgrade] = useState(null);

  const yr = cycle === 'yearly';
  const priceOf = (p) => p.price == null ? null : yr ? Math.round(p.price * 10) : p.price;

  const handleConfirm = () => {
    if (upgrade.id !== 'enterprise') setCurrent(upgrade.id);
    setUpgrade(null);
    toast(
      upgrade.id === 'enterprise' ? 'Request sent to sales' : `Switched to ${upgrade.name}`,
      'rocket'
    );
  };

  return (
    <div className="page">
      <CurrentPlanCard
        onUpgrade={() => setUpgrade(PLANS.find(p => p.id === 'enterprise'))}
      />

      <div className="sec-hd" style={{ marginTop: 8 }}>
        <div>
          <div className="h2">Plans</div>
          <div className="sm muted">Scale as you grow. Switch or cancel anytime.</div>
        </div>
        <div className="row gap-3">
          <span className="sm muted">{yr ? 'Billed yearly' : 'Billed monthly'}</span>
          <Segmented
            value={cycle}
            options={[
              { value: 'monthly', label: 'Monthly' },
              { value: 'yearly',  label: 'Yearly −17%' },
            ]}
            onChange={setCycle}
          />
        </div>
      </div>

      <div className="grid-stats" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {PLANS.map(p => {
          const price = priceOf(p);
          const isCur = p.id === current;
          return (
            <div key={p.id} className={'card bl-plan' + (p.popular ? ' pop' : '')}>
              {p.popular && <div className="bl-pop">Most popular</div>}
              <div className="card-bd col gap-3" style={{ height: '100%' }}>
                <div>
                  <div className="h3">{p.name}</div>
                  <div className="xs muted">{p.tagline}</div>
                </div>
                <div className="row" style={{ alignItems: 'baseline', gap: 4, minHeight: 40 }}>
                  {price == null ? (
                    <div className="h2">Custom</div>
                  ) : (
                    <>
                      <div className="h1 tnum" style={{ fontSize: 28 }}>
                        {price === 0 ? 'Free' : fmtIDR(price, { short: true })}
                      </div>
                      {price !== 0 && <span className="xs muted">/{yr ? 'yr' : 'mo'}</span>}
                    </>
                  )}
                </div>
                <Btn
                  variant={isCur ? 'soft' : p.popular ? 'primary' : 'ghost'}
                  block
                  disabled={isCur}
                  onClick={() => !isCur && setUpgrade(p)}
                >
                  {isCur ? 'Current plan' : p.cta}
                </Btn>
                <hr className="divider" />
                <ul className="bl-feat">
                  {p.features.map((f, i) => (
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

      <BillingHistory />

      {upgrade && (
        <UpgradeModal
          plan={upgrade}
          yearly={yr}
          onConfirm={handleConfirm}
          onClose={() => setUpgrade(null)}
        />
      )}
    </div>
  );
}
