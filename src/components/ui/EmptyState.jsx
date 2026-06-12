import Icon from './Icon';

export default function EmptyState({ icon = 'coffee', title, body, action }) {
  return (
    <div className="col center" style={{ textAlign: 'center', padding: '56px 24px', gap: 6 }}>
      <div style={{ width: 60, height: 60, borderRadius: 18, background: 'var(--bg-2)', color: 'var(--faint)', display: 'grid', placeItems: 'center', marginBottom: 8 }}>
        <Icon name={icon} size={26} />
      </div>
      <div className="h3">{title}</div>
      {body && <div className="sm muted" style={{ maxWidth: 320 }}>{body}</div>}
      {action && <div style={{ marginTop: 10 }}>{action}</div>}
    </div>
  );
}
