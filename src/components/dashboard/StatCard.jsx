'use client';
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/Icon';
import Sparkline from '@/components/ui/charts/Sparkline';

export default function StatCard({ icon, tone, label, value, delta, spark, up = true, flash }) {
  const [flashing, setFlashing] = useState(false);

  useEffect(() => {
    if (!flash) return;
    setFlashing(true);
    const t = setTimeout(() => setFlashing(false), 900);
    return () => clearTimeout(t);
  }, [flash]);

  return (
    <div className={'card stat' + (flashing ? ' flash' : '')}>
      <div className="stat-top">
        <div className="stat-ico" style={{ background: `var(--${tone}-soft)`, color: `var(--${tone})` }}>
          <Icon name={icon} />
        </div>
        {spark ? (
          <Sparkline data={spark} up={up} />
        ) : delta != null && (
          <span className={'delta ' + (up ? 'up' : 'down')}>
            <Icon name={up ? 'arrowUp' : 'arrowDown'} size={13} />
            {delta}
          </span>
        )}
      </div>
      <div className="stat-val tnum">{value}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}
