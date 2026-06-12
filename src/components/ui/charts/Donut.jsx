export default function Donut({ data, size = 132, thickness = 18 }) {
  const total = data.reduce((s, d) => s + d.v, 0);
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let off = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        {data.map((d, i) => {
          const len = (d.v / total) * c;
          const el = (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={d.color}
              strokeWidth={thickness}
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={-off}
              strokeLinecap="round"
            />
          );
          off += len;
          return el;
        })}
      </g>
    </svg>
  );
}
