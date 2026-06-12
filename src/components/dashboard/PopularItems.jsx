'use client';
import Link from 'next/link';
import Thumb from '@/components/ui/Thumb';

export default function PopularItems({ menu }) {
  const popular = [...menu].sort((a, b) => b.sold - a.sold).slice(0, 5);
  const maxSold = popular[0]?.sold || 1;

  return (
    <div className="card">
      <div className="card-hd">
        <div className="h3">Popular items</div>
        <Link href="/admin/menu" className="link xs">View menu →</Link>
      </div>
      <div className="card-bd col gap-4">
        {popular.map((m, i) => (
          <div key={m.id} className="row gap-3">
            <span className="tnum muted" style={{ width: 16, fontWeight: 700 }}>{i + 1}</span>
            <Thumb label={m.img} w={40} h={40} />
            <div className="grow" style={{ minWidth: 0 }}>
              <div className="row between">
                <span style={{ fontWeight: 600, fontSize: 'var(--fs-sm)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {m.name}
                </span>
                <b className="tnum sm">{m.sold.toLocaleString('id-ID')}</b>
              </div>
              <div className="bar" style={{ marginTop: 5, height: 6 }}>
                <i style={{ width: `${(m.sold / maxSold) * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
