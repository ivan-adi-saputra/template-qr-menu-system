'use client';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';

export default function ConfirmView({ placedId, tableId, onTrack, onBack }) {
  const tableName = `Table ${tableId?.replace(/\D/g, '') || '7'}`;

  return (
    <div className="cm">
      <div
        className="cm-scroll scroll col center"
        style={{ padding: 28, textAlign: 'center', gap: 14, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <div className="cm-pop">
          <Icon name="check" size={40} />
        </div>
        <div className="h1">Order placed!</div>
        <p className="sub" style={{ margin: 0, maxWidth: 260 }}>
          Your order <b className="tnum">{placedId}</b> is on its way to the bar. We&apos;ll bring it to <b>{tableName}</b>.
        </p>
        <Btn size="lg" icon="clock" onClick={onTrack} style={{ marginTop: 8 }}>
          Track my order
        </Btn>
        <button className="link" onClick={onBack}>
          Order something else
        </button>
      </div>
    </div>
  );
}
