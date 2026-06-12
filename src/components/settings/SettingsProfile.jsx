'use client';
import Btn from '@/components/ui/Btn';
import CoverHero from '@/components/customer/CoverHero';
import { useUIStore } from '@/lib/store';
import { SHOP } from '@/lib/data';

const logoInitials = SHOP.name.split(' ').map(w => w[0]).slice(0, 2).join('');

export default function SettingsProfile() {
  const { toast } = useUIStore();

  return (
    <div className="card">
      <div className="card-hd">
        <div className="h3">Shop profile</div>
        <Btn size="sm" icon="check" onClick={() => toast('Profile saved')}>Save changes</Btn>
      </div>
      <div className="card-bd col gap-5">
        <div>
          <div className="label" style={{ marginBottom: 8 }}>Cover image</div>
          <div style={{ position: 'relative', borderRadius: 'var(--r)', overflow: 'hidden' }}>
            <CoverHero
              shopName={SHOP.name}
              location={SHOP.location}
              rating={SHOP.rating}
              height={160}
              radius={0}
            />
            <Btn
              size="sm" variant="dark" icon="upload"
              style={{ position: 'absolute', top: 12, right: 12, zIndex: 3 }}
            >
              Change cover
            </Btn>
          </div>
          <div className="xs muted" style={{ marginTop: 8 }}>
            No photo? A premium branded cover is generated automatically. Upload a 16:9 photo of your cafe to personalize it.
          </div>
        </div>

        <div className="row gap-5" style={{ alignItems: 'flex-end' }}>
          <div className="col gap-2">
            <div className="label">Logo</div>
            <div style={{ width: 72, height: 72, borderRadius: 18, background: 'var(--accent)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 26, overflow: 'hidden' }}>
              {logoInitials}
            </div>
          </div>
          <div className="grow">
            <div className="label" style={{ marginBottom: 6 }}>Shop name</div>
            <input className="field" defaultValue={SHOP.name} />
          </div>
        </div>

        <div className="grid-2">
          <div>
            <div className="label" style={{ marginBottom: 6 }}>Tagline</div>
            <input className="field" defaultValue={SHOP.tagline} />
          </div>
          <div>
            <div className="label" style={{ marginBottom: 6 }}>Phone</div>
            <input className="field" defaultValue="+62 291 555 0192" />
          </div>
        </div>

        <div>
          <div className="label" style={{ marginBottom: 6 }}>Address</div>
          <input className="field" defaultValue={SHOP.address} />
        </div>
      </div>
    </div>
  );
}
