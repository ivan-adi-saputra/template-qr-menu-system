'use client';

export default function Segmented({ value, options, onChange }) {
  return (
    <div className="seg">
      {options.map(o => {
        const v = typeof o === 'object' ? o.value : o;
        const l = typeof o === 'object' ? o.label : o;
        return (
          <button key={v} data-on={v === value ? '1' : '0'} onClick={() => onChange(v)}>
            {l}
          </button>
        );
      })}
    </div>
  );
}
