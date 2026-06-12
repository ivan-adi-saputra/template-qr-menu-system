export default function QRCode({ value = 'ordio', size = 160, fg = '#1C1917', bg = '#fff', quiet = 2 }) {
  const N = 25;

  // deterministic hash → seed
  let seed = 0;
  for (const c of value) seed = (seed * 31 + c.charCodeAt(0)) >>> 0;
  const rng = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

  const finder = (gx, gy, x, y) => {
    const dx = x - gx, dy = y - gy;
    if (dx < 0 || dy < 0 || dx > 6 || dy > 6) return null;
    const ring = dx === 0 || dy === 0 || dx === 6 || dy === 6;
    const core = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
    return ring || core;
  };

  const cells = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      let on;
      const f = finder(0, 0, x, y) ?? finder(N - 7, 0, x, y) ?? finder(0, N - 7, x, y);
      if (f !== null && f !== undefined) {
        on = f;
      } else if ((x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9)) {
        on = false;
      } else {
        on = rng() > 0.5;
      }
      if (on) cells.push([x, y]);
    }
  }

  const total = N + quiet * 2;
  const s = size / total;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${total} ${total}`}
      style={{ display: 'block', borderRadius: 8 }}
      shapeRendering="crispEdges"
    >
      <rect width={total} height={total} fill={bg} />
      {cells.map(([x, y], i) => (
        <rect key={i} x={x + quiet} y={y + quiet} width={1.02} height={1.02} fill={fg} />
      ))}
    </svg>
  );
}
