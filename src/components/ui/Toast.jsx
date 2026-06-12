'use client';
import Icon from './Icon';
import { useUIStore } from '@/lib/store';

export default function ToastHost() {
  const toasts = useUIStore(s => s.toasts);
  return (
    <div className="toast-wrap">
      {toasts.map(t => (
        <div className="toast" key={t.id}>
          <Icon name={t.icon} />
          <span>{t.msg}</span>
        </div>
      ))}
    </div>
  );
}
