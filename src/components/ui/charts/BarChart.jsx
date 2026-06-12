export default function BarChart({
  data,
  height = 170,
  valKey = 'v',
  labelKey = 'h',
  accent = 'var(--accent)',
}) {
  const max = Math.max(...data.map(d => d[valKey])) * 1.1;
  return (
    <div className="row" style={{ alignItems: 'flex-end', gap: 6, height, paddingTop: 8 }}>
      {data.map((d, i) => (
        <div key={i} className="col" style={{ flex: 1, alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
          <div
            title={d[valKey]}
            style={{
              width: '74%',
              maxWidth: 30,
              height: `${(d[valKey] / max) * 100}%`,
              background: i === data.length - 4 ? accent : 'var(--accent-soft-2)',
              borderRadius: '6px 6px 0 0',
              transition: 'height .5s var(--tap)',
            }}
          />
          <span className="xs muted" style={{ fontFamily: 'var(--data)' }}>{d[labelKey]}</span>
        </div>
      ))}
    </div>
  );
}
