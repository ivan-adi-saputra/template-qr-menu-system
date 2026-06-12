import Icon from '@/components/ui/Icon';
import { SHOP } from '@/lib/data';

export default function Wordmark({ logoImg, shopName, mark, text }) {
  if (text) {
    return (
      <div className="col" style={{ lineHeight: 1.1 }}>
        <b style={{ fontSize: 15, letterSpacing: '-.01em' }}>Ordio</b>
        <span className="xs muted">{shopName || SHOP.name}</span>
      </div>
    );
  }
  return (
    <div className="wm-mark">
      {logoImg
        ? <img src={logoImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : <Icon name="coffee" size={20} />}
    </div>
  );
}
