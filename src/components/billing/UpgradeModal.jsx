'use client';
import Icon from '@/components/ui/Icon';
import Modal, { ModalHead } from '@/components/ui/Modal';
import Btn from '@/components/ui/Btn';
import { fmtIDR } from '@/lib/data';

export default function UpgradeModal({ plan, yearly, onConfirm, onClose }) {
  const isEnterprise = plan.id === 'enterprise';
  const price = plan.price == null ? null : yearly ? Math.round(plan.price * 10) : plan.price;

  return (
    <Modal open onClose={onClose} width={460}>
      <ModalHead
        title={isEnterprise ? 'Talk to sales' : `Switch to ${plan.name}`}
        onClose={onClose}
      />
      <div className="modal-bd col gap-4">
        {isEnterprise ? (
          <p className="sub" style={{ margin: 0 }}>
            Tell us about your outlets and we&apos;ll build a plan that fits. Our team replies within one business day.
          </p>
        ) : (
          <>
            <div className="card" style={{ background: 'var(--bg-2)', boxShadow: 'none' }}>
              <div className="card-bd row between">
                <div>
                  <div style={{ fontWeight: 700 }}>{plan.name} · {yearly ? 'Yearly' : 'Monthly'}</div>
                  <div className="xs muted">Prorated from today</div>
                </div>
                <b className="tnum h3">{price ? fmtIDR(price) : '—'}</b>
              </div>
            </div>
            <div className="col gap-2">
              {plan.features.slice(0, 4).map((f, i) => (
                <div key={i} className="row gap-2 sm">
                  <Icon name="check" size={15} style={{ color: 'var(--accent)' }} />
                  {f}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="modal-ft">
        <Btn variant="ghost" onClick={onClose}>Cancel</Btn>
        <Btn
          icon={isEnterprise ? 'arrowR' : 'check'}
          onClick={onConfirm}
        >
          {isEnterprise ? 'Request a call' : `Confirm — ${fmtIDR(price)}`}
        </Btn>
      </div>
    </Modal>
  );
}
