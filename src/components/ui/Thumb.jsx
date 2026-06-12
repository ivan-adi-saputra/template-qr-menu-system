export default function Thumb({ label, w = '100%', h = 64, r, style }) {
  return (
    <div
      className="ph thumb"
      style={{
        width: w,
        height: h,
        borderRadius: r != null ? r : 'var(--r-sm)',
        ...style,
      }}
    >
      <span>{label}</span>
    </div>
  );
}
