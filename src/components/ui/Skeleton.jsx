export default function Skeleton({ w = '100%', h = 14, r = 7, style }) {
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: r,
        background: 'linear-gradient(90deg,var(--bg-2) 25%,var(--border) 37%,var(--bg-2) 63%)',
        backgroundSize: '400% 100%',
        animation: 'shimmer 1.4s ease infinite',
        ...style,
      }}
    />
  );
}
