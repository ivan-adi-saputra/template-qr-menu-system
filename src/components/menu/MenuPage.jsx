'use client';
import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import Btn from '@/components/ui/Btn';
import Segmented from '@/components/ui/Segmented';
import { useMenuStore } from '@/lib/store';
import { CATEGORIES } from '@/lib/data';
import CategoryFilter from './CategoryFilter';
import MenuGrid from './MenuGrid';
import MenuList from './MenuList';
import MenuItemModal from './MenuItemModal';

export default function MenuPage() {
  const { menu } = useMenuStore();
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');
  const [view, setView] = useState('grid');
  const [modal, setModal] = useState(null); // { item } | { isNew: true } | null

  const filtered = menu.filter(m =>
    (cat === 'all' || m.cat === cat) &&
    m.name.toLowerCase().includes(q.toLowerCase())
  );

  const counts = CATEGORIES.reduce(
    (a, c) => ({ ...a, [c.id]: menu.filter(m => m.cat === c.id).length }),
    { all: menu.length }
  );

  const openAdd  = () => setModal({ isNew: true });
  const openEdit = (item) => setModal({ item });

  return (
    <div className="page">
      <div className="sec-hd">
        <div className="search" style={{ width: 320 }}>
          <Icon name="search" />
          <input
            className="field"
            placeholder="Search menu items…"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>
        <div className="row gap-3">
          <Segmented
            value={view}
            options={[
              { value: 'grid', label: '▦ Grid' },
              { value: 'list', label: '☰ List' },
            ]}
            onChange={setView}
          />
          <Btn icon="plus" onClick={openAdd}>Add item</Btn>
        </div>
      </div>

      <CategoryFilter active={cat} counts={counts} onChange={setCat} />

      {view === 'grid'
        ? <MenuGrid  items={filtered} onEdit={openEdit} onAdd={openAdd} />
        : <MenuList  items={filtered} onEdit={openEdit} onAdd={openAdd} />}

      {modal && (
        <MenuItemModal
          item={modal.item}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
