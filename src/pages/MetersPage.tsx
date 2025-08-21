import DashboardLayout from '../layouts/DashboardLayout';
import { Card, CardContent } from '../components/ui/card';
import MetersToolbar from '../features/meters/components/MetersToolbar';
import MetersTable from '../features/meters/components/MetersTable';
import Pagination from '../features/meters/components/Pagination';

const MetersPage = () => {
  return (
    <DashboardLayout title="Meter Management">
      <Card>
        <CardContent className="p-6">
          <MetersToolbar />
          <MetersTable />
          <Pagination />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default MetersPage;
