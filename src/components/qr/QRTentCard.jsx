import Icon from '@/components/ui/Icon';
import QRCode from '@/components/ui/QRCode';
import { SHOP } from '@/lib/data';

const logoInitials = SHOP.name.split(' ').map(w => w[0]).slice(0, 2).join('');
const urlFor = (tableId) => `ordio.id/m/kopisenja/${tableId}`;

export default function QRTentCard({ table, shopName, logoImg, size = 168, style }) {
  const name = shopName || SHOP.name;

  return (
    <div className="qr-tent" style={style}>
      <div className="qr-tent-top">
        <div className="qr-logo">
          {logoImg
            ? <img src={logoImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : logoInitials}
        </div>
        <div>
          <div style={{ fontWeight: 800 }}>{name}</div>
          <div className="xs" style={{ opacity: 0.8 }}>{table.label} · scan to order</div>
        </div>
      </div>
      <div className="qr-tent-body">
        <QRCode value={urlFor(table.id)} size={size} />
      </div>
      <div className="qr-tent-foot">
        <Icon name="qr" size={14} /> Point your camera · No app needed
      </div>
    </div>
  );
}
