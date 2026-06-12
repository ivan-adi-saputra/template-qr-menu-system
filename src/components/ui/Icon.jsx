const ICON_PATHS = {
  dashboard:   'M3 13h8V3H3v10zm10 8h8V3h-8v18zM3 21h8v-6H3v6z',
  orders:      'M9 3h6l1 3H8l1-3zM5 6h14l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6z M9 11v6 M15 11v6',
  menu:        'M4 5h16 M4 12h16 M4 19h10',
  book:        'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z M19 3v16 M8 7h7 M8 11h5',
  qr:          'M4 4h6v6H4V4z M14 4h6v6h-6V4z M4 14h6v6H4v-6z M14 14h3v3h-3z M20 14v6 M17 20h3',
  billing:     'M3 6h18v12H3V6z M3 10h18 M7 15h4',
  settings:    'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M19.4 13a7.5 7.5 0 0 0 0-2l2-1.5-2-3.5-2.4 1a7.5 7.5 0 0 0-1.7-1L14 1h-4l-.3 2.5a7.5 7.5 0 0 0-1.7 1l-2.4-1-2 3.5L3.6 11a7.5 7.5 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7.5 7.5 0 0 0 1.7 1L10 23h4l.3-2.5a7.5 7.5 0 0 0 1.7-1l2.4 1 2-3.5L19.4 13z',
  users:       'M16 19v-2a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2 M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M21 19v-2a3 3 0 0 0-2.2-2.9 M16 4.1A3 3 0 0 1 16 10',
  user:        'M19 20v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  store:       'M4 9l1-5h14l1 5 M4 9v10h16V9 M4 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 M9 19v-5h6v5',
  search:      'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.3-4.3',
  plus:        'M12 5v14 M5 12h14',
  minus:       'M5 12h14',
  edit:        'M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z',
  trash:       'M3 6h18 M8 6V4h8v2 M6 6l1 14h10l1-14 M10 11v6 M14 11v6',
  x:           'M18 6L6 18 M6 6l12 12',
  check:       'M20 6L9 17l-5-5',
  checkcircle: 'M22 11.5V12a10 10 0 1 1-5.9-9.1 M22 4L12 14l-3-3',
  chevR:       'M9 6l6 6-6 6',
  chevL:       'M15 6l-6 6 6 6',
  chevD:       'M6 9l6 6 6-6',
  chevU:       'M18 15l-6-6-6 6',
  arrowUp:     'M12 19V5 M5 12l7-7 7 7',
  arrowDown:   'M12 5v14 M19 12l-7 7-7-7',
  arrowR:      'M5 12h14 M13 5l7 7-7 7',
  bell:        'M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9 M13.7 21a2 2 0 0 1-3.4 0',
  sun:         'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 1v2 M12 21v2 M4.2 4.2l1.4 1.4 M18.4 18.4l1.4 1.4 M1 12h2 M21 12h2 M4.2 19.8l1.4-1.4 M18.4 5.6l1.4-1.4',
  moon:        'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
  sidebar:     'M3 4h18v16H3V4z M9 4v16',
  download:    'M12 3v12 M7 10l5 5 5-5 M5 21h14',
  print:       'M6 9V3h12v6 M6 18H4v-7h16v7h-2 M8 14h8v7H8v-7z',
  coffee:      'M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z M17 9h2.5a2.5 2.5 0 0 1 0 5H17 M7 4c0-.8.5-1.2.5-2 M11 4c0-.8.5-1.2.5-2',
  clock:       'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
  star:        'M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2z',
  trending:    'M22 7l-8.5 8.5-5-5L2 17 M16 7h6v6',
  wallet:      'M3 7a2 2 0 0 1 2-2h14v4 M3 7v10a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2z M16 13h.01',
  cart:        'M3 4h2l2.5 12h10L20 8H6 M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z M17 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
  bag:         'M6 8h12l1 12H5L6 8z M9 8V6a3 3 0 0 1 6 0v2',
  filter:      'M3 5h18 M6 12h12 M10 19h4',
  image:       'M3 5h18v14H3V5z M8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M21 16l-5-5L5 19',
  upload:      'M12 16V4 M7 9l5-5 5 5 M5 20h14',
  dots:        'M5 12h.01 M12 12h.01 M19 12h.01',
  eye:         'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  phone:       'M7 2h10v20H7V2z M11 18h2',
  pin:         'M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  calendar:    'M5 5h14v15H5V5z M5 9h14 M9 3v4 M15 3v4',
  leaf:        'M4 20c0-9 7-16 16-16 0 9-7 16-16 16z M4 20c4-4 8-7 12-9',
  fire:        'M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C9 9 12 8 12 2z M12 22a6 6 0 0 0 6-6c0-2-1-4-2-5 .5 4-2 6-4 6s-3-1-3-3c-2 1-3 3-3 5a6 6 0 0 0 6 3z',
  sparkles:    'M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z',
  logout:      'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9',
  external:    'M14 4h6v6 M20 4l-9 9 M19 13v6H5V5h6',
  scan:        'M4 7V5a1 1 0 0 1 1-1h2 M17 4h2a1 1 0 0 1 1 1v2 M20 17v2a1 1 0 0 1-1 1h-2 M7 20H5a1 1 0 0 1-1-1v-2 M3 12h18',
  grid:        'M3 3h8v8H3V3z M13 3h8v8h-8V3z M3 13h8v8H3v-8z M13 13h8v8h-8v-8z',
  list:        'M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01',
  heart:       'M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z',
  info:        'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 11v5 M12 8h.01',
  chart:       'M3 3v18h18 M7 14l3-3 3 3 5-6',
  zap:         'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
  bolt:        'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
  building:    'M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17 M15 9h4a1 1 0 0 1 1 1v11 M8 7h3 M8 11h3 M8 15h3',
  globe:       'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M2 12h20 M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z',
  tag:         'M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9z M8 8h.01',
  refresh:     'M21 12a9 9 0 1 1-3-6.7L21 8 M21 4v4h-4',
  shield:      'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  rocket:      'M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8.8-2 0-3s-2.2-.8-3 0z M9 13l-2-2c1-5 5-8 11-9-1 6-4 10-9 11z M14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  link:        'M9 15l6-6 M11 6l1-1a4 4 0 0 1 6 6l-1 1 M13 18l-1 1a4 4 0 0 1-6-6l1-1',
  copy:        'M9 9h11v11H9V9z M5 15H4V4h11v1',
  flag:        'M4 22V4h11l-1.5 4H20v8H9l-1-4H4',
  truck:       'M3 6h11v9H3V6z M14 9h4l3 3v3h-7V9z M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
};

const SOLID = { star: true, heart: true, fire: true };

export default function Icon({ name, size, style, className, strokeWidth = 1.75 }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  const solid = SOLID[name];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size || '1em'}
      height={size || '1em'}
      fill={solid ? 'currentColor' : 'none'}
      stroke={solid ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', flex: 'none', ...style }}
      className={className}
      aria-hidden="true"
    >
      {d.split(' M').map((seg, i) => (
        <path key={i} d={(i ? 'M' : '') + seg} />
      ))}
    </svg>
  );
}
