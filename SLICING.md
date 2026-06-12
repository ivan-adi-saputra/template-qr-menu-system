# Slicing Order — QR Menu System

Urutan dari fondasi ke halaman. Setiap tahap bergantung pada tahap sebelumnya.

---

## Tahap 1 — CSS Foundation
> Semua halaman bergantung pada ini. Selesaikan dulu sebelum slicing komponen apapun.

- [ ] `src/styles/tokens.css` — expand dari `styles.css`: CSS vars (--accent, --r, --bg, --text-1, dst), base reset, typography scale, utility classes (.row, .col, .grow, .muted, .tnum, .sm, .xs, .h1–h3, .label, .eyebrow, .sub, .sep, .center, .wrap)
- [ ] `src/styles/tokens.css` — component tokens: .card, .card-hd, .card-bd, .btn (semua variant), .badge (semua tone), .field, .switch, .seg, .avatar, .divider, .bar, .chip, .tbl, .modal, .scrim, .drawer, .toast-wrap, .page, .sec-hd, .grid-2, .grid-3, .grid-stats, .delta, .stat, .search
- [ ] `src/styles/shell.css` — layout admin: .shell, .side, .side-brand, .side-nav, .side-link, .side-badge, .side-foot, .side-plan, .main, .topbar, .topbar-title, .topbar-dot, .content, .wm-mark
- [ ] `src/styles/customer.css` — layout customer: .cm, .cm-bar, .cm-back, .cm-scroll, .cm-cover, .cm-cover-img, .cm-logo, .cm-info, .cm-cats, .cm-cat, .cm-card, .cm-add, .cm-qbadge, .cm-cartbar, .cm-sheet-wrap, .cm-sheet, .cm-sheet-x, .cm-foot, .cm-pop, .cm-step, .cm-live, .cm-live-dot
- [ ] `src/styles/landing.css` — layout landing: .lp, .lp-nav, .lp-wrap, .lp-links, .lp-link, .lp-hero, .lp-hero-grid, .lp-hero-copy, .lp-h1, .lp-h2, .lp-lead, .lp-hero-visual, .lp-dash, .lp-mini, .lp-phone-mini, .lp-qr-float, .lp-sec, .lp-sec-hd, .lp-steps, .lp-step, .lp-step-n, .lp-step-i, .lp-showcase, .lp-showcase-grid, .lp-board-prev, .lp-board-col, .lp-ticket, .lp-benefits, .lp-benefit, .lp-benefit-i, .lp-tick, .lp-quotes-sec, .lp-quotes, .lp-quote, .lp-cta, .lp-foot, .lp-foot-grid, .lp-foot-bot, .bl-plan, .bl-pop, .bl-feat, .bl-note, .delta, .ph (placeholder)

---

## Tahap 2 — UI Components (Shared)
> Komponen ini dipakai di semua halaman. Buat semuanya sebelum mulai slicing halaman.

- [ ] `src/components/ui/Icon.jsx` — dari `icons.jsx`: SVG path map + `<Icon name="..." size={} style={} />`
- [ ] `src/components/ui/Btn.jsx` — dari primitives: `<Btn variant icon iconR size block />`
- [ ] `src/components/ui/Badge.jsx` — `<Badge tone dot />`
- [ ] `src/components/ui/Switch.jsx` — `<Switch on onChange />`
- [ ] `src/components/ui/Segmented.jsx` — `<Segmented value options onChange />`
- [ ] `src/components/ui/Avatar.jsx` — `<Avatar name size src />` + avatarColor()
- [ ] `src/components/ui/Thumb.jsx` — placeholder image dengan striped pattern
- [ ] `src/components/ui/Modal.jsx` — Modal + ModalHead (Escape key, backdrop click, animasi)
- [ ] `src/components/ui/QtyStepper.jsx` — `<QtyStepper value onChange size />`
- [ ] `src/components/ui/EmptyState.jsx` — `<EmptyState icon title body action />`
- [ ] `src/components/ui/Skeleton.jsx` — shimmer skeleton
- [ ] `src/components/ui/OrderStatusBadge.jsx` — ORDER_STATUS map + `<OrderStatusBadge status />`
- [ ] `src/components/ui/charts/AreaChart.jsx` — SVG area chart (smoothPath, gradient, labels)
- [ ] `src/components/ui/charts/BarChart.jsx` — SVG bar chart
- [ ] `src/components/ui/charts/Donut.jsx` — SVG donut chart
- [ ] `src/components/ui/charts/Sparkline.jsx` — SVG sparkline
- [ ] `src/components/ui/QRCode.jsx` — pseudo-QR generator (deterministic dari value string)
- [ ] `src/components/ui/Toast.jsx` — ToastHost + toast list (auto dismiss 2.6s)

---

## Tahap 3 — Landing Page
> Surface: `/`

- [ ] `src/components/landing/LandingNav.jsx` — navbar: logo Ordio, nav links, CTA buttons
- [ ] `src/components/landing/LandingHero.jsx` — hero: copy, stats (1000+ shops, 2.4M orders), dashboard mini-preview, phone mini-preview, QR float
- [ ] `src/components/landing/HowItWorks.jsx` — 4 steps: Scan → Browse → Order → Serve
- [ ] `src/components/landing/Showcase.jsx` — "Kitchen in sync": copy + order board preview (3 kolom kanban mini)
- [ ] `src/components/landing/Benefits.jsx` — 6 benefit cards dengan icon
- [ ] `src/components/landing/Testimonials.jsx` — 3 quote cards + avatar + bintang
- [ ] `src/components/landing/Pricing.jsx` — 4 plan cards (Free, Starter, Pro, Enterprise) + toggle monthly/yearly
- [ ] `src/components/landing/LandingCTA.jsx` — CTA section (dark background, 2 buttons)
- [ ] `src/components/landing/LandingFooter.jsx` — footer: logo, 3 kolom links, copyright
- [ ] `src/app/page.js` — compose semua section di atas

---

## Tahap 4 — Customer Menu (Mobile)
> Surface: `/menu/[tableId]`

- [ ] `src/components/customer/CoverHero.jsx` — dari `CoverHero.jsx`: cover image, gradient overlay, logo, shop name, location, rating, table label
- [ ] `src/components/customer/BrowseView.jsx` — shop info bar, category tabs (sticky), menu list per kategori, cart bar (sticky bottom)
- [ ] `src/components/customer/ProductSheet.jsx` — bottom sheet: foto, nama, harga, deskripsi, prep time, sold count, special request input, qty stepper, add button
- [ ] `src/components/customer/CartView.jsx` — daftar cart items (qty stepper), subtotal + service 5% + tax 10% + total, place order button
- [ ] `src/components/customer/ConfirmView.jsx` — order placed animation, order ID, table, track button
- [ ] `src/components/customer/TrackView.jsx` — live status bar (4 steps), est. prep time, status update
- [ ] `src/app/menu/[tableId]/page.js` — compose: routing antar view (browse → cart → confirm → track), integrasi Zustand stores

---

## Tahap 5 — Admin Shell (Layout)
> Shared layout untuk semua `/admin/*`

- [ ] `src/components/admin/Sidebar.jsx` — logo/wordmark, nav items (Dashboard, Orders, Menu, QR, Billing, Settings), new-order badge, plan usage bar, "Customer menu" link, collapse toggle
- [ ] `src/components/admin/Topbar.jsx` — sidebar toggle, page title + subtitle, search bar, dark mode toggle, notification bell, "View menu" button, avatar
- [ ] `src/components/admin/Wordmark.jsx` — logo mark + text variant
- [ ] `src/app/admin/layout.js` — Shell wrapper: sidebar + topbar, `'use client'`, theme CSS vars dari Zustand (dark mode, accent)

---

## Tahap 6 — Dashboard
> Route: `/admin`

- [ ] `src/components/admin/dashboard/StatCard.jsx` — stat card: icon, value, delta/sparkline, flash animation saat order masuk
- [ ] `src/components/admin/dashboard/RevenueChart.jsx` — area chart 7 hari + segmented (7D/30D/90D)
- [ ] `src/components/admin/dashboard/ChannelChart.jsx` — donut chart + legend (QR Dine-in, Takeaway, Pre-order)
- [ ] `src/components/admin/dashboard/HourlyChart.jsx` — bar chart per jam
- [ ] `src/components/admin/dashboard/PopularItems.jsx` — top 5 items dengan progress bar + sold count
- [ ] `src/components/admin/dashboard/RecentOrders.jsx` — tabel 6 order terbaru, row highlight saat fresh
- [ ] `src/app/admin/page.js` — compose semua dashboard widget

---

## Tahap 7 — Order Management
> Route: `/admin/orders`

- [ ] `src/components/admin/orders/OrderCard.jsx` — kanban card: order ID, table, items list, total, advance button, fresh highlight
- [ ] `src/components/admin/orders/OrderBoard.jsx` — 4 kolom kanban (New, Preparing, Ready, Completed) + header pill counts
- [ ] `src/components/admin/orders/OrderList.jsx` — view list (tabel) dengan advance button di tiap row
- [ ] `src/components/admin/orders/OrderDrawer.jsx` — detail drawer kanan: order summary, step progress, items + total, print + advance buttons
- [ ] `src/app/admin/orders/page.js` — toggle board/list view, open/close drawer, advance order status

---

## Tahap 8 — Menu Management
> Route: `/admin/menu`

- [ ] `src/components/admin/menu/MenuGrid.jsx` — grid card: foto, tag badges, edit button (hover), nama, kategori, harga, sold, availability switch
- [ ] `src/components/admin/menu/MenuList.jsx` — view tabel: foto mini, nama, kategori, harga, sold, availability switch, edit button
- [ ] `src/components/admin/menu/MenuItemModal.jsx` — modal tambah/edit: upload foto, nama, kategori, harga, deskripsi, prep time, tag, available switch, delete button
- [ ] `src/components/admin/menu/CategoryFilter.jsx` — chip filter tabs per kategori + "All items" dengan count
- [ ] `src/app/admin/menu/page.js` — search, filter, toggle grid/list, open modal

---

## Tahap 9 — QR Management
> Route: `/admin/qr`

- [ ] `src/components/admin/qr/QRTentCard.jsx` — tent card preview: header aksen (logo + nama + label meja), QR code, footer "Point your camera"
- [ ] `src/components/admin/qr/TableGrid.jsx` — grid semua meja: mini QR, nama meja, seats, scan count, selected state
- [ ] `src/components/admin/qr/PrintModal.jsx` — modal print-ready: tent card 300px, download PDF + print buttons
- [ ] `src/app/admin/qr/page.js` — 3 stat cards, preview panel kiri, table grid kanan, print modal

---

## Tahap 10 — Settings
> Route: `/admin/settings`

- [ ] `src/components/admin/settings/ProfileTab.jsx` — cover hero editable, logo, shop name, tagline, phone, address
- [ ] `src/components/admin/settings/HoursTab.jsx` — 7 baris hari, toggle open/closed, input jam buka–tutup
- [ ] `src/components/admin/settings/BranchesTab.jsx` — 3 outlet cards: foto placeholder, nama, alamat, status badge, tables count, revenue today
- [ ] `src/components/admin/settings/TeamTab.jsx` — tabel staff: avatar, nama/email, role badge, outlet, status badge, dots menu
- [ ] `src/components/admin/settings/BrandingTab.jsx` — info tweaks panel, accent color swatches, menu theme preview
- [ ] `src/app/admin/settings/page.js` — tab navigation (Profile, Hours, Branches, Team, Branding)

---

## Tahap 11 — Billing
> Route: `/admin/billing`

- [ ] `src/components/admin/billing/CurrentPlanCard.jsx` — plan aktif (Pro), renewal date, outlet/table/menu usage bars
- [ ] `src/components/admin/billing/PlanCard.jsx` — plan card: nama, harga, tagline, CTA button, feature list, "Most popular" badge
- [ ] `src/components/admin/billing/BillingHistory.jsx` — tabel invoice: ID, tanggal, plan, amount, status, download button
- [ ] `src/components/admin/billing/UpgradeModal.jsx` — modal konfirmasi upgrade plan
- [ ] `src/app/admin/billing/page.js` — current plan card, toggle monthly/yearly, 4 plan cards, billing history

---

## Ringkasan

| Tahap | Scope | File |
|-------|-------|------|
| 1 | CSS Foundation | 5 CSS files |
| 2 | UI Components | 18 komponen |
| 3 | Landing | 9 + 1 page |
| 4 | Customer Menu | 6 + 1 page |
| 5 | Admin Shell | 3 + 1 layout |
| 6 | Dashboard | 6 + 1 page |
| 7 | Orders | 4 + 1 page |
| 8 | Menu | 4 + 1 page |
| 9 | QR | 3 + 1 page |
| 10 | Settings | 5 + 1 page |
| 11 | Billing | 4 + 1 page |
| **Total** | | **~63 file** |
