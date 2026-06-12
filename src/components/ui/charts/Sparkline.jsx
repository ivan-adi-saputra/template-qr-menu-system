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

export default function Sparkline({ data, w = 90, h = 30, up = true }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * w,
    h - ((v - min) / (max - min || 1)) * h,
  ]);
  const col = up ? 'var(--green)' : 'var(--red)';
  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      <path d={smoothPath(pts)} fill="none" stroke={col} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
