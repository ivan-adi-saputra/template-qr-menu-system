'use client';
import { useState } from 'react';
import BrowseView from './BrowseView';
import ProductSheet from './ProductSheet';
import CartView from './CartView';
import ConfirmView from './ConfirmView';
import TrackView from './TrackView';
import ToastHost from '@/components/ui/Toast';

export default function CustomerMenuClient({ tableId }) {
  const [view, setView] = useState('browse');
  const [sheetItem, setSheetItem] = useState(null);
  const [placedId, setPlacedId] = useState(null);

  const handleConfirm = (orderId) => {
    setPlacedId(orderId);
    setView('confirm');
  };

  return (
    <div className="phone-screen" style={{ position: 'relative' }}>
      {view === 'browse' && (
        <BrowseView
          tableId={tableId}
          onViewCart={() => setView('cart')}
          onOpenSheet={setSheetItem}
        />
      )}
      {view === 'cart' && (
        <CartView
          tableId={tableId}
          onBack={() => setView('browse')}
          onConfirm={handleConfirm}
        />
      )}
      {view === 'confirm' && (
        <ConfirmView
          placedId={placedId}
          tableId={tableId}
          onTrack={() => setView('track')}
          onBack={() => setView('browse')}
        />
      )}
      {view === 'track' && (
        <TrackView
          placedId={placedId}
          tableId={tableId}
          onBack={() => setView('browse')}
        />
      )}

      {sheetItem && (
        <ProductSheet item={sheetItem} onClose={() => setSheetItem(null)} />
      )}

      <ToastHost />
    </div>
  );
}
