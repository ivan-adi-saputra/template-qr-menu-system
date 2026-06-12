'use client';
import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import Badge from '@/components/ui/Badge';
import Btn from '@/components/ui/Btn';
import { useUIStore } from '@/lib/store';
import { TABLES, SHOP } from '@/lib/data';
import QRTentCard from './QRTentCard';
import TableGrid from './TableGrid';
import PrintModal from './PrintModal';

const totalScans = TABLES.reduce((s, t) => s + t.scans, 0);

export default function QRPage() {
  const { toast } = useUIStore();
  const [sel, setSel] = useState(TABLES[0].id);
  const [printT, setPrintT] = useState(null);

  const active = TABLES.find(t => t.id === sel);

  return (
    <div className="page" style={{ maxWidth: 1320 }}>
      {/* Stats */}
      <div className="grid-stats" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="card stat">
          <div className="stat-top">
            <div className="stat-ico" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
              <Icon name="qr" />
            </div>
          </div>
          <div className="stat-val tnum">{TABLES.length}</div>
          <div className="stat-lbl">Active QR tables</div>
        </div>

        <div className="card stat">
          <div className="stat-top">
            <div className="stat-ico" style={{ background: 'var(--blue-soft)', color: 'var(--blue)' }}>
              <Icon name="scan" />
            </div>
            <span className="delta up"><Icon name="arrowUp" size={13} />+9.4%</span>
          </div>
          <div className="stat-val tnum">{totalScans.toLocaleString('id-ID')}</div>
          <div className="stat-lbl">Total scans this month</div>
        </div>

        <div className="card stat">
          <div className="stat-top">
            <div className="stat-ico" style={{ background: 'var(--green-soft)', color: 'var(--green)' }}>
              <Icon name="trending" />
            </div>
          </div>
          <div className="stat-val tnum">73%</div>
          <div className="stat-lbl">Scan → order conversion</div>
        </div>
      </div>

      {/* Main grid */}
      <div className="qr-page-grid">
        {/* QR preview */}
        <div className="card">
          <div className="card-hd">
            <div className="h3">QR preview</div>
            <Badge tone="green" dot>Live</Badge>
          </div>
          <div className="card-bd col center gap-4">
            <QRTentCard table={active} />
            <div className="row gap-3" style={{ width: '100%' }}>
              <Btn
                variant="ghost" icon="download" block
                onClick={() => toast(`${active.label} QR downloaded`, 'download')}
              >
                PNG
              </Btn>
              <Btn icon="print" block onClick={() => setPrintT(active)}>
                Print tent
              </Btn>
            </div>
          </div>
        </div>

        {/* Table list */}
        <div className="card">
          <div className="card-hd">
            <div>
              <div className="h3">Table codes</div>
              <div className="xs muted">{TABLES.length} tables · tap to preview</div>
            </div>
            <Btn
              size="sm" variant="soft" icon="plus"
              onClick={() => toast('New table added')}
            >
              Add table
            </Btn>
          </div>
          <div className="card-bd">
            <TableGrid tables={TABLES} selected={sel} onSelect={setSel} />
          </div>
        </div>
      </div>

      {printT && (
        <PrintModal
          table={printT}
          onClose={() => setPrintT(null)}
          onPrint={() => { setPrintT(null); toast('Sent to printer', 'print'); }}
        />
      )}
    </div>
  );
}
