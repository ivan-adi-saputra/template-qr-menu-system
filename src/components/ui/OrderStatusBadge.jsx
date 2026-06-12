import Badge from './Badge';

export const ORDER_STATUS = {
  new:       { label: 'New',       tone: 'amber', icon: 'bell' },
  preparing: { label: 'Preparing', tone: 'blue',  icon: 'fire' },
  ready:     { label: 'Ready',     tone: 'green', icon: 'checkcircle' },
  completed: { label: 'Completed', tone: 'gray',  icon: 'check' },
};

export default function OrderStatusBadge({ status }) {
  const s = ORDER_STATUS[status] || ORDER_STATUS.new;
  return <Badge tone={s.tone} dot>{s.label}</Badge>;
}
