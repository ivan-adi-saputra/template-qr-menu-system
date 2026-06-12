'use client';
import Icon from './Icon';

export default function Btn({ variant = 'primary', size, block, icon, iconR, children, ...props }) {
  const cls = ['btn', `btn-${variant}`, size && `btn-${size}`, block && 'btn-block']
    .filter(Boolean)
    .join(' ');
  return (
    <button className={cls} {...props}>
      {icon && <Icon name={icon} />}
      {children}
      {iconR && <Icon name={iconR} />}
    </button>
  );
}

export function IconBtn({ name, ...props }) {
  return (
    <button className="iconbtn" {...props}>
      <Icon name={name} />
    </button>
  );
}
