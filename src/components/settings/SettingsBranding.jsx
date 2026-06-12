import Icon from '@/components/ui/Icon';
import { SHOP } from '@/lib/data';

const ACCENTS = ['#D9730D', '#E8821E', '#C2410C', '#1F9D55', '#2563EB', '#7C3AED'];

export default function SettingsBranding() {
  return (
    <div className="card">
      <div className="card-hd">
        <div>
          <div className="h3">Branding</div>
          <div className="xs muted">Accent, logo, cover & theme</div>
        </div>
      </div>
      <div className="card-bd col gap-5">
        <div className="bl-note row gap-3">
          <Icon name="sparkles" size={20} style={{ color: 'var(--accent)' }} />
          <div>
            <b>Accent color, logo & cover</b> can be changed here.
            {' '}Changes preview instantly across the whole product — customer menu, admin shell, and QR tent cards.
          </div>
        </div>

        <div className="grid-2">
          <div>
            <div className="label" style={{ marginBottom: 8 }}>Accent color</div>
            <div className="row gap-3" style={{ flexWrap: 'wrap' }}>
              {ACCENTS.map((c, i) => (
                <div
                  key={c}
                  style={{
                    width: 38, height: 38, borderRadius: 11, background: c,
                    boxShadow: i === 0
                      ? '0 0 0 2px var(--surface), 0 0 0 4px var(--text)'
                      : 'var(--shadow-xs)',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="label" style={{ marginBottom: 8 }}>Menu theme preview</div>
            <div className="row gap-3">
              <div className="card" style={{ flex: 1, padding: 12, boxShadow: 'none' }}>
                <div className="row gap-2">
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--accent)' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{SHOP.name}</div>
                    <div className="xs muted">{SHOP.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
