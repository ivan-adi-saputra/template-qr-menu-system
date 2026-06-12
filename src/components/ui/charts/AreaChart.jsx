function smoothPath(pts) {
  if (pts.length < 2) return '';
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return d;
}

export default function AreaChart({
  data,
  height = 200,
  valKey = 'v',
  labelKey = 'd',
  accent = 'var(--accent)',
}) {
  const W = 640, H = height, padB = 26, padT = 14, padX = 8;
  const vals = data.map(d => d[valKey]);
  const max = Math.max(...vals) * 1.12;
  const innerW = W - padX * 2;
  const innerH = H - padB - padT;
  const x = i => padX + (i / (data.length - 1)) * innerW;
  const y = v => padT + innerH - (v / max) * innerH;
  const pts = data.map((d, i) => [x(i), y(d[valKey])]);
  const line = smoothPath(pts);
  const area = `${line} L ${x(data.length - 1)} ${padT + innerH} L ${x(0)} ${padT + innerH} Z`;
  const gid = `ag${Math.round(height)}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height={H}
      style={{ overflow: 'visible' }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0.22" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map(f => (
        <line key={f} x1={padX} x2={W - padX} y1={padT + innerH * f} y2={padT + innerH * f} stroke="var(--border)" strokeWidth="1" />
      ))}
      <path d={area} fill={`url(#${gid})`} />
      <path d={line} fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 4 : 0} fill={accent} stroke="var(--surface)" strokeWidth="2" />
      ))}
      {data.map((d, i) => (
        <text key={i} x={x(i)} y={H - 6} textAnchor="middle" fontSize="11" fontFamily="var(--data)" fill="var(--muted)">
          {d[labelKey]}
        </text>
      ))}
    </svg>
  );
}
