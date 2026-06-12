import Icon from '@/components/ui/Icon';

export default function CoverHero({
  coverImg, logoImg,
  shopName = 'Kopi Senja',
  location = 'Jepara',
  rating = 4.9,
  open = true,
  table,
  height = 200,
  radius = 0,
  showMeta = true,
}) {
  const initials = String(shopName).split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

  return (
    <div className="cover" style={{ height, borderRadius: radius }}>
      {coverImg ? (
        <img src={coverImg} alt={`${shopName} cover`} className="cover-img" />
      ) : (
        <div className="cover-art" role="img" aria-label={`${shopName} cafe cover`}>
          <div className="cover-bokeh" />
          <div className="cover-steam" />
          <svg className="cover-grain" preserveAspectRatio="none" aria-hidden="true">
            <filter id="ordioGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#ordioGrain)" />
          </svg>
        </div>
      )}
      <div className="cover-scrim" />

      {table && (
        <div className="cover-pill">
          <Icon name="qr" size={14} /> {table} · Scan to order
        </div>
      )}

      {showMeta && (
        <div className="cover-meta">
          <div className="cover-logo">
            {logoImg
              ? <img src={logoImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : initials}
          </div>
          <div className="grow" style={{ minWidth: 0 }}>
            <div className="cover-name">{shopName}</div>
            <div className="cover-sub">
              <span className="row gap-1"><Icon name="pin" size={13} /> {location}</span>
              <span className="cover-dot">·</span>
              <span className="cover-open"><i />{open ? 'Open now' : 'Closed'}</span>
            </div>
          </div>
          <div className="cover-rating"><Icon name="star" size={14} /> {rating}</div>
        </div>
      )}
    </div>
  );
}
