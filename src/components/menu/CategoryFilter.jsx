'use client';
import Icon from '@/components/ui/Icon';
import { CATEGORIES } from '@/lib/data';

export default function CategoryFilter({ active, counts, onChange }) {
  return (
    <div className="row gap-2 wrap">
      <button
        className="chip accent"
        data-on={active === 'all' ? '1' : '0'}
        onClick={() => onChange('all')}
      >
        All items <span className="tnum muted">{counts.all}</span>
      </button>
      {CATEGORIES.map(c => (
        <button
          key={c.id}
          className="chip accent"
          data-on={active === c.id ? '1' : '0'}
          onClick={() => onChange(c.id)}
        >
          <Icon name={c.icon} size={15} />
          {c.name}
          <span className="tnum" style={{ opacity: 0.6 }}>{counts[c.id] || 0}</span>
        </button>
      ))}
    </div>
  );
}
