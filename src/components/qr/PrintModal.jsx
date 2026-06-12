'use client';
import Modal, { ModalHead } from '@/components/ui/Modal';
import Btn from '@/components/ui/Btn';
import QRTentCard from './QRTentCard';

export default function PrintModal({ table, onClose, onPrint }) {
  return (
    <Modal open onClose={onClose} width={420}>
      <ModalHead
        title="Print-ready tent card"
        sub={`${table.label} · A6 table tent`}
        onClose={onClose}
      />
      <div className="modal-bd col center" style={{ background: 'var(--bg-2)' }}>
        <QRTentCard table={table} size={196} style={{ width: 300 }} />
      </div>
      <div className="modal-ft">
        <Btn variant="ghost" icon="download" onClick={onClose}>Download PDF</Btn>
        <Btn icon="print" onClick={onPrint}>Print now</Btn>
      </div>
    </Modal>
  );
}
