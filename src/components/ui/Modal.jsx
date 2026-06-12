'use client';
import { useEffect } from 'react';
import { IconBtn } from './Btn';

export default function Modal({ open, onClose, children, width = 560, align = 'center' }) {
  useEffect(() => {
    if (!open) return;
    const handler = e => e.key === 'Escape' && onClose?.();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="scrim"
      style={{
        alignItems: align === 'center' ? 'center' : 'flex-start',
        justifyContent: 'center',
        padding: 24,
      }}
      onMouseDown={e => { if (e.target === e.currentTarget) onClose?.(); }}
    >
      <div
        className="modal"
        style={{ maxWidth: width, marginTop: align === 'center' ? 0 : '6vh' }}
      >
        {children}
      </div>
    </div>
  );
}

export function ModalHead({ title, sub, onClose }) {
  return (
    <div className="modal-hd">
      <div>
        <div className="h3">{title}</div>
        {sub && <div className="sm muted" style={{ marginTop: 2 }}>{sub}</div>}
      </div>
      {onClose && <IconBtn name="x" onClick={onClose} />}
    </div>
  );
}
