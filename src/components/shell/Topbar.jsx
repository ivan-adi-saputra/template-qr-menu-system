'use client';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Btn, { IconBtn } from '@/components/ui/Btn';
import Avatar from '@/components/ui/Avatar';
import { SHOP } from '@/lib/data';

const PAGE_TITLE = {
  '/admin':          ['Dashboard',       'Tuesday, 12 June 2026 · Jepara'],
  '/admin/orders':   ['Orders',          'Live kitchen & service board'],
  '/admin/menu':     ['Menu',            'Manage items, categories & availability'],
  '/admin/qr':       ['QR Codes',        'Table codes & print-ready layouts'],
  '/admin/billing':  ['Billing & Plans', 'Subscription, invoices & usage'],
  '/admin/settings': ['Settings',        'Shop profile, hours, team & branding'],
};

export default function Topbar({ pathname, dark, newCount, onToggleDark, onToggleCollapse }) {
  const [title, sub] = PAGE_TITLE[pathname] || ['', ''];

  return (
    <header className="topbar">
      <IconBtn name="sidebar" onClick={onToggleCollapse} title="Toggle sidebar" />

      <div className="topbar-title">
        <div className="h2" style={{ fontSize: 'var(--fs-h3)' }}>{title}</div>
        <div className="xs muted">{sub}</div>
      </div>

      <div className="search" style={{ width: 280, marginLeft: 'auto' }}>
        <Icon name="search" />
        <input className="field" placeholder="Search orders, menu, tables…" readOnly />
      </div>

      <IconBtn name={dark ? 'sun' : 'moon'} onClick={onToggleDark} title="Theme" />

      <div style={{ position: 'relative' }}>
        <IconBtn name="bell" title="Notifications" />
        {newCount > 0 && <span className="topbar-dot" />}
      </div>

      <Link href="/menu/t7">
        <Btn variant="dark" icon="qr">View menu</Btn>
      </Link>

      <div className="row gap-2" style={{ paddingLeft: 6 }}>
        <Avatar name={SHOP.name} size={36} />
      </div>
    </header>
  );
}
