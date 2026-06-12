'use client';
import Icon from './Icon';

export default function QtyStepper({ value, onChange, size = 'md' }) {
  const h = size === 'sm' ? 30 : 38;
  return (
    <div
      className="row"
      style={{
        border: '1px solid var(--border-2)',
        borderRadius: 'var(--r-pill)',
        height: h,
        padding: '0 4px',
        gap: 2,
        background: 'var(--surface)',
      }}
    >
      <button
        className="iconbtn"
        style={{ width: h - 6, height: h - 6, border: 0, background: 'transparent', borderRadius: '50%' }}
        onClick={() => onChange(value - 1)}
        aria-label="Decrease"
      >
        <Icon name="minus" />
      </button>
      <span
        className="tnum"
        style={{ minWidth: 22, textAlign: 'center', fontWeight: 700, fontSize: 'var(--fs-sm)' }}
      >
        {value}
      </span>
      <button
        className="iconbtn"
        style={{ width: h - 6, height: h - 6, border: 0, background: 'transparent', borderRadius: '50%' }}
        onClick={() => onChange(value + 1)}
        aria-label="Increase"
      >
        <Icon name="plus" />
      </button>
    </div>
  );
}
