'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useOrderStore } from '@/lib/store';

export default function AdminShell({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  const { orders } = useOrderStore();
  const newCount = orders.filter(o => o.status === 'new').length;

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : '';
  }, [dark]);

  return (
    <div className="shell" data-collapsed={collapsed ? '1' : '0'} style={{ height: '100dvh', overflow: 'hidden' }}>
      <Sidebar
        pathname={pathname}
        collapsed={collapsed}
        newCount={newCount}
      />
      <div className="main">
        <Topbar
          pathname={pathname}
          dark={dark}
          newCount={newCount}
          onToggleDark={() => setDark(d => !d)}
          onToggleCollapse={() => setCollapsed(c => !c)}
        />
        <main className="content scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
