export default function Badge({ tone = 'gray', dot, children }) {
  return (
    <span className={`badge badge-${tone}`}>
      {dot && <i className="dot" />}
      {children}
    </span>
  );
}
