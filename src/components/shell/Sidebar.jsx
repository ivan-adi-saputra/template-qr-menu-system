'use client';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Wordmark from './Wordmark';

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/admin' },
  { id: 'orders',    label: 'Orders',    icon: 'orders',    href: '/admin/orders' },
  { id: 'menu',      label: 'Menu',      icon: 'book',      href: '/admin/menu' },
  { id: 'qr',        label: 'QR Codes',  icon: 'qr',        href: '/admin/qr' },
  { id: 'billing',   label: 'Billing',   icon: 'billing',   href: '/admin/billing' },
  { id: 'settings',  label: 'Settings',  icon: 'settings',  href: '/admin/settings' },
];

const isActive = (href, pathname) =>
  href === '/admin' ? pathname === '/admin' : pathname === href || pathname.startsWith(href + '/');

export default function Sidebar({ pathname, collapsed, newCount }) {
  return (
    <aside className="side">
      <div className="side-brand">
        <Wordmark mark />
        {!collapsed && <Wordmark text />}
      </div>

      <nav className="side-nav">
        {NAV.map(n => (
          <Link
            key={n.id}
            href={n.href}
            className="side-link"
            data-on={isActive(n.href, pathname) ? '1' : '0'}
            title={n.label}
          >
            <Icon name={n.icon} size={20} />
            {!collapsed && <span className="grow" style={{ textAlign: 'left' }}>{n.label}</span>}
            {n.id === 'orders' && newCount > 0 && (
              <span className="side-badge tnum">{newCount}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="side-foot">
        {!collapsed && (
          <div className="side-plan">
            <div className="row between">
              <span className="xs" style={{ fontWeight: 700, letterSpacing: '.04em' }}>PRO PLAN</span>
              <Icon name="bolt" size={14} style={{ color: 'var(--accent)' }} />
            </div>
            <div className="xs" style={{ color: 'var(--text-2)', margin: '6px 0 8px' }}>2 of 3 outlets active</div>
            <div className="bar"><i style={{ width: '66%' }} /></div>
            <Link href="/admin/billing" className="link xs" style={{ marginTop: 8, display: 'block' }}>
              Manage plan →
            </Link>
          </div>
        )}
        <Link
          href="/menu/t7"
          className="side-link"
          title="Customer menu"
        >
          <Icon name="external" size={20} />
          {!collapsed && <span style={{ textAlign: 'left' }}>Customer menu</span>}
        </Link>
      </div>
    </aside>
  );
}
