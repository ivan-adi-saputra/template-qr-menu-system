import CustomerMenuClient from '@/components/customer/CustomerMenuClient';

export default async function MenuPage({ params }) {
  const { tableId } = await params;

  return (
    <div className="stage">
      <div className="stage-bar">
        <div className="row gap-2">
          <div className="wm-mark" style={{ width: 28, height: 28 }}>
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" style={{ width: 16, height: 16 }}>
              <path d="M4 6h12M4 10h8M4 14h10" strokeLinecap="round" />
            </svg>
          </div>
          <b style={{ fontSize: 15 }}>Ordio</b>
        </div>
        <span className="xs muted">Guest menu · Table {tableId?.replace(/\D/g, '') || '7'}</span>
      </div>
      <div className="stage-body">
        <div className="phone">
          <div className="phone-notch"><span /></div>
          <CustomerMenuClient tableId={tableId} />
        </div>
      </div>
    </div>
  );
}
