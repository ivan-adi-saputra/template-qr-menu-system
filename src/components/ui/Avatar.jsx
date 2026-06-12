const AV_COLORS = ['#D9730D', '#1F9D55', '#2563EB', '#7C3AED', '#DC2626', '#0891B2'];

export function avatarColor(s) {
  let h = 0;
  for (const c of String(s)) h = c.charCodeAt(0) + ((h << 5) - h);
  return AV_COLORS[Math.abs(h) % AV_COLORS.length];
}

export default function Avatar({ name, size = 36, src }) {
  const init = String(name).split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span
      className="avatar"
      style={{
        width: size,
        height: size,
        background: src ? 'transparent' : avatarColor(name),
        fontSize: size * 0.4,
      }}
    >
      {src
        ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : init}
    </span>
  );
}
