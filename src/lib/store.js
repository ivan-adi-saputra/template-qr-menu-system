'use client';
import { create } from 'zustand';
import { MENU as INITIAL_MENU, seedOrders } from './data';

let _seq = 2419;

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (id, qty = 1, note = '') => set(state => {
    const existing = state.cart.find(x => x.id === id && x.note === note);
    if (existing) {
      return { cart: state.cart.map(x => x === existing ? { ...x, qty: x.qty + qty } : x) };
    }
    return { cart: [...state.cart, { id, qty, note }] };
  }),

  setQty: (id, note, qty) => set(state => ({
    cart: qty <= 0
      ? state.cart.filter(x => !(x.id === id && x.note === note))
      : state.cart.map(x => (x.id === id && x.note === note) ? { ...x, qty } : x),
  })),

  clearCart: () => set({ cart: [] }),

  get cartCount() {
    return get().cart.reduce((s, i) => s + i.qty, 0);
  },

  getCartTotal: (menu) => {
    return get().cart.reduce((s, i) => {
      const m = menu.find(x => x.id === i.id);
      return s + (m ? m.price * i.qty : 0);
    }, 0);
  },
}));

export const useOrderStore = create((set) => ({
  orders: seedOrders(),
  today: { revenue: 4280000, orders: 121, guests: 286 },
  pulse: 0,

  placeOrder: (cart, menu, table, type) => {
    const items = cart.map(i => {
      const m = menu.find(x => x.id === i.id);
      return { id: i.id, name: m.name, price: m.price, qty: i.qty, note: i.note };
    });
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    const order = {
      id: 'OR-' + (_seq++),
      table: table || 'Table 7',
      type: type || 'Dine-in',
      items, total,
      status: 'new',
      placed: Date.now(),
      name: 'You',
    };
    set(state => ({
      orders: [order, ...state.orders],
      today: {
        revenue: state.today.revenue + total,
        orders: state.today.orders + 1,
        guests: state.today.guests + 1,
      },
      pulse: state.pulse + 1,
    }));
    return order;
  },

  updateOrderStatus: (id, status) => set(state => ({
    orders: state.orders.map(x => x.id === id ? { ...x, status } : x),
  })),
}));

export const useMenuStore = create((set) => ({
  menu: INITIAL_MENU.map(m => ({ ...m })),

  saveItem: (item) => set(state => {
    if (item.id && state.menu.some(x => x.id === item.id)) {
      return { menu: state.menu.map(x => x.id === item.id ? { ...x, ...item } : x) };
    }
    return { menu: [...state.menu, { ...item, id: 'm' + (Date.now() % 100000), sold: 0 }] };
  }),

  deleteItem: (id) => set(state => ({ menu: state.menu.filter(x => x.id !== id) })),

  toggleAvail: (id) => set(state => ({
    menu: state.menu.map(x => x.id === id ? { ...x, avail: !x.avail } : x),
  })),
}));

export const useUIStore = create((set) => ({
  toasts: [],

  toast: (msg, icon = 'check') => {
    const id = Math.random().toString(36).slice(2);
    set(state => ({ toasts: [...state.toasts, { id, msg, icon }] }));
    setTimeout(() => {
      set(state => ({ toasts: state.toasts.filter(x => x.id !== id) }));
    }, 2600);
  },
}));
