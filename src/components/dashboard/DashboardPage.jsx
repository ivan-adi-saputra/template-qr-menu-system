'use client';
import { useOrderStore, useMenuStore } from '@/lib/store';
import { fmtIDR } from '@/lib/data';
import StatCard from './StatCard';
import RevenueChart from './RevenueChart';
import ChannelChart from './ChannelChart';
import HourlyChart from './HourlyChart';
import PopularItems from './PopularItems';
import RecentOrders from './RecentOrders';

export default function DashboardPage() {
  const { today, pulse, orders } = useOrderStore();
  const { menu } = useMenuStore();

  const avg = today.orders ? today.revenue / today.orders : 0;

  return (
    <div className="page">
      <div className="grid-stats">
        <StatCard
          icon="wallet"
          tone="amber"
          label="Revenue today"
          value={fmtIDR(today.revenue, { short: true })}
          delta="+18.2%"
          up
          flash={pulse}
        />
        <StatCard
          icon="orders"
          tone="blue"
          label="Orders today"
          value={today.orders}
          delta="+12"
          up
          flash={pulse}
        />
        <StatCard
          icon="tag"
          tone="violet"
          label="Avg. order value"
          value={fmtIDR(avg, { short: true })}
          delta="+4.1%"
          up
        />
        <StatCard
          icon="users"
          tone="green"
          label="Guests served"
          value={today.guests}
          spark={[12, 18, 15, 22, 28, 24, 31]}
          up
        />
      </div>

      <div className="grid-2">
        <RevenueChart />
        <ChannelChart ordersToday={today.orders} />
      </div>

      <div className="grid-2">
        <HourlyChart />
        <PopularItems menu={menu} />
      </div>

      <RecentOrders orders={orders} />
    </div>
  );
}
