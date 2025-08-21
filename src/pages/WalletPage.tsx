import DashboardLayout from '../layouts/DashboardLayout';
import WalletBalanceCard from '../features/wallet/components/WalletBalanceCard';
import AddFundsForm from '../features/wallet/components/AddFundsForm';
import RecentTransactionsTable from '../features/wallet/components/RecentTransactionsTable';

const WalletPage = () => {
  return (
    <DashboardLayout title="Wallet">
      <div className="space-y-6">
        <WalletBalanceCard />
        <AddFundsForm />
        <RecentTransactionsTable />
      </div>
    </DashboardLayout>
  );
};

export default WalletPage;
