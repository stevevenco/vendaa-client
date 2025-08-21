import DashboardLayout from '../layouts/DashboardLayout';
import WalletCard from '../features/dashboard/components/WalletCard';
import VendHistoryChart from '../features/dashboard/components/VendHistoryChart';
import RecentVendsTable from '../features/dashboard/components/RecentVendsTable';

const DashboardPage = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        <WalletCard />
        <VendHistoryChart />
        <RecentVendsTable />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
