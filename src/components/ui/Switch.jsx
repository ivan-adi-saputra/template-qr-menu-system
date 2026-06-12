'use client';

export default function Switch({ on, onChange }) {
  return (
    <button
      className="switch"
      data-on={on ? '1' : '0'}
      onClick={() => onChange(!on)}
      role="switch"
      aria-checked={!!on}
    >
      <i />
    </button>
  );
}
