// Static dummy data — migrated from template data.jsx

export const SHOP = {
  name: 'Kopi Senja',
  tagline: 'Slow-bar specialty coffee',
  location: 'Jepara',
  address: 'Jl. Pemuda No. 21, Jepara',
  rating: 4.9, reviews: 1284,
  hours: 'Open · 07:00 – 23:00',
};

export const CATEGORIES = [
  { id: 'signature', name: 'Signature', icon: 'sparkles' },
  { id: 'espresso', name: 'Espresso Bar', icon: 'coffee' },
  { id: 'manual', name: 'Manual Brew', icon: 'leaf' },
  { id: 'noncoffee', name: 'Non-Coffee', icon: 'heart' },
  { id: 'pastry', name: 'Pastry', icon: 'tag' },
  { id: 'brunch', name: 'All-Day Brunch', icon: 'star' },
];

export const MENU = [
  { id: 'm1', cat: 'signature', name: 'Senja Signature Latte', price: 42000, desc: 'Double shot, palm sugar, oat milk, sea-salt foam.', tag: 'best', sold: 1842, avail: true, prep: 4 },
  { id: 'm2', cat: 'signature', name: 'Pandan Coconut Latte', price: 45000, desc: 'House pandan syrup, toasted coconut, espresso.', tag: 'new', sold: 412, avail: true, prep: 5 },
  { id: 'm3', cat: 'signature', name: 'Es Kopi Senja', price: 38000, desc: 'Iced palm-sugar coffee with fresh milk — the local classic.', tag: 'best', sold: 2310, avail: true, prep: 3 },
  { id: 'm4', cat: 'espresso', name: 'Espresso', price: 28000, desc: 'Single origin, rotating. Ask the barista.', avail: true, prep: 2, sold: 640 },
  { id: 'm5', cat: 'espresso', name: 'Cappuccino', price: 36000, desc: 'Balanced, velvety microfoam.', avail: true, prep: 4, sold: 1120 },
  { id: 'm6', cat: 'espresso', name: 'Flat White', price: 38000, desc: 'Ristretto base, silky steamed milk.', avail: true, prep: 4, sold: 980 },
  { id: 'm7', cat: 'espresso', name: 'Cortado', price: 34000, desc: 'Equal parts espresso and warm milk.', avail: false, prep: 3, sold: 320 },
  { id: 'm8', cat: 'manual', name: 'V60 Pour Over', price: 48000, desc: 'Bright, clean. Single origin of the week.', avail: true, prep: 7, sold: 540 },
  { id: 'm9', cat: 'manual', name: 'Aeropress', price: 46000, desc: 'Full-bodied, low acidity.', avail: true, prep: 6, sold: 288 },
  { id: 'm10', cat: 'manual', name: 'Cold Brew', price: 44000, desc: '18-hour steep, smooth and chocolatey.', tag: 'best', avail: true, prep: 2, sold: 1460 },
  { id: 'm11', cat: 'noncoffee', name: 'Matcha Latte', price: 44000, desc: 'Ceremonial-grade Uji matcha.', avail: true, prep: 4, sold: 870 },
  { id: 'm12', cat: 'noncoffee', name: 'Hot Chocolate', price: 40000, desc: '70% dark Valrhona, steamed milk.', avail: true, prep: 4, sold: 510 },
  { id: 'm13', cat: 'noncoffee', name: 'Butterfly Pea Lemonade', price: 38000, desc: 'Color-changing, citrus-forward, refreshing.', tag: 'new', avail: true, prep: 3, sold: 240 },
  { id: 'm14', cat: 'pastry', name: 'Almond Croissant', price: 35000, desc: 'Twice-baked, frangipane, toasted almonds.', tag: 'best', avail: true, prep: 1, sold: 1320 },
  { id: 'm15', cat: 'pastry', name: 'Pain au Chocolat', price: 32000, desc: 'Laminated 27 layers, dark chocolate batons.', avail: true, prep: 1, sold: 940 },
  { id: 'm16', cat: 'pastry', name: 'Banana Bread', price: 30000, desc: 'Brown butter, walnuts, sea salt.', avail: true, prep: 1, sold: 680 },
  { id: 'm17', cat: 'brunch', name: 'Smashed Avocado Toast', price: 68000, desc: 'Sourdough, poached egg, chili, lime.', tag: 'best', avail: true, prep: 9, sold: 1140 },
  { id: 'm18', cat: 'brunch', name: 'Truffle Mushroom Eggs', price: 78000, desc: 'Scrambled eggs, truffle, wild mushrooms.', avail: true, prep: 11, sold: 620 },
  { id: 'm19', cat: 'brunch', name: 'Acai Senja Bowl', price: 62000, desc: 'Acai, granola, banana, coconut, honey.', tag: 'new', avail: true, prep: 6, sold: 380 },
];

export const REV_7D = [
  { d: 'Mon', v: 4180000, o: 118 }, { d: 'Tue', v: 3920000, o: 109 },
  { d: 'Wed', v: 4760000, o: 134 }, { d: 'Thu', v: 5210000, o: 147 },
  { d: 'Fri', v: 6840000, o: 192 }, { d: 'Sat', v: 8120000, o: 241 },
  { d: 'Sun', v: 7390000, o: 218 },
];

export const CHANNELS = [
  { label: 'QR Dine-in', v: 64, color: 'var(--accent)' },
  { label: 'Takeaway', v: 24, color: 'var(--blue)' },
  { label: 'Pre-order', v: 12, color: 'var(--violet)' },
];

export const PLANS = [
  { id: 'free', name: 'Free', price: 0, tagline: 'Test the waters', features: ['1 outlet', 'Up to 20 menu items', '5 QR tables', 'Basic order list', 'Ordio branding'], cta: 'Current plan' },
  { id: 'starter', name: 'Starter', price: 149000, tagline: 'New cafes finding rhythm', features: ['1 outlet', 'Unlimited menu items', '15 QR tables', 'Live order board', 'Daily analytics', 'Remove Ordio branding'], cta: 'Choose Starter' },
  { id: 'pro', name: 'Pro', price: 399000, tagline: 'Busy specialty shops', popular: true, features: ['Up to 3 outlets', 'Everything in Starter', 'Unlimited QR tables', 'Kitchen workflow board', 'Customer insights & cohorts', 'Promo & loyalty tools', 'Priority support'], cta: 'Choose Pro' },
  { id: 'enterprise', name: 'Enterprise', price: null, tagline: 'Multi-outlet groups', features: ['Unlimited outlets', 'Everything in Pro', 'Central menu sync', 'Role-based staff access', 'API & POS integrations', 'Dedicated success manager', '99.9% uptime SLA'], cta: 'Talk to sales' },
];

export const TABLES = Array.from({ length: 18 }, (_, i) => ({
  id: 't' + (i + 1),
  label: 'Table ' + (i + 1),
  seats: [2, 2, 4, 4, 2, 6, 4, 2, 4, 8, 2, 4][i % 12] || 4,
  scans: [142, 88, 210, 176, 64, 320, 198, 73, 156, 244, 51, 188, 95, 132, 77, 168, 109, 84][i],
}));

const NAMES = ['Maya P.', 'Arif R.', 'Sienna T.', 'Dewi K.', 'Lukas B.', 'Tara W.', 'Joel S.', 'Citra M.'];

export function seedOrders() {
  const mk = (id, table, items, status, mins, type) => {
    const list = items.map(([mid, qty]) => {
      const m = MENU.find(x => x.id === mid);
      return { id: mid, name: m.name, price: m.price, qty };
    });
    const total = list.reduce((s, i) => s + i.price * i.qty, 0);
    return {
      id, table, type: type || 'Dine-in', items: list, total, status,
      placed: Date.now() - mins * 60000,
      name: NAMES[id.charCodeAt(2) % NAMES.length],
    };
  };
  return [
    mk('OR-2418', 'Table 7', [['m1', 2], ['m14', 1]], 'new', 1),
    mk('OR-2417', 'Table 2', [['m17', 1], ['m3', 1], ['m13', 1]], 'new', 3),
    mk('OR-2416', 'Takeaway', [['m10', 2]], 'preparing', 6, 'Takeaway'),
    mk('OR-2415', 'Table 11', [['m18', 1], ['m6', 1], ['m11', 1]], 'preparing', 9),
    mk('OR-2414', 'Table 4', [['m5', 1], ['m15', 2]], 'ready', 12),
    mk('OR-2413', 'Table 9', [['m8', 1], ['m16', 1]], 'completed', 26),
    mk('OR-2412', 'Takeaway', [['m3', 3], ['m14', 2]], 'completed', 34, 'Takeaway'),
    mk('OR-2411', 'Table 1', [['m19', 1], ['m11', 1]], 'completed', 41),
  ];
}

export function fmtIDR(n, opt = {}) {
  const v = Math.round(n);
  if (opt.short && v >= 1000000) return 'Rp ' + (v / 1000000).toFixed(v % 1000000 === 0 ? 0 : 1) + 'jt';
  if (opt.short && v >= 1000) return 'Rp ' + Math.round(v / 1000) + 'rb';
  return 'Rp ' + v.toLocaleString('id-ID');
}

export function timeAgo(ts) {
  const m = Math.floor((Date.now() - ts) / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return m + 'm ago';
  return Math.floor(m / 60) + 'h ago';
}

const AV_COLORS = ['#D9730D', '#1F9D55', '#2563EB', '#7C3AED', '#DC2626', '#0891B2'];
export function avatarColor(s) {
  let h = 0;
  for (const c of String(s)) h = c.charCodeAt(0) + ((h << 5) - h);
  return AV_COLORS[Math.abs(h) % AV_COLORS.length];
}
