import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Link } from 'react-router-dom';

const vends = [
  { date: '2025-08-20 13:45', meter: '04123456789', amount: '5,000.00', status: 'Successful', token: '1234-5678-9012-3456' },
  { date: '2025-08-20 11:20', meter: '04987654321', amount: '10,000.00', status: 'Successful', token: '2345-6789-0123-4567' },
  { date: '2025-08-19 18:10', meter: '04555666777', amount: '2,500.00', status: 'Failed', token: '-' },
  { date: '2025-08-19 15:03', meter: '04112233445', amount: '5,000.00', status: 'Successful', token: '3456-7890-1234-5678' },
  { date: '2025-08-18 09:30', meter: '04123456789', amount: '1,000.00', status: 'Successful', token: '4567-8901-2345-6789' },
  { date: '2025-08-18 08:00', meter: '04987654321', amount: '20,000.00', status: 'Successful', token: '5678-9012-3456-7890' },
  { date: '2025-08-17 21:55', meter: '04112233445', amount: '3,000.00', status: 'Successful', token: '6789-0123-4567-8901' },
  { date: '2025-08-17 14:22', meter: '04555666777', amount: '5,000.00', status: 'Successful', token: '7890-1234-5678-9012' },
  { date: '2025-08-16 12:00', meter: '04123456789', amount: '2,500.00', status: 'Successful', token: '8901-2345-6789-0123' },
  { date: '2025-08-16 10:15', meter: '04987654321', amount: '1,500.00', status: 'Failed', token: '-' },
];

const StatusBadge = ({ status }: { status: string }) => {
  const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
  if (status === 'Successful') {
    return <span className={`${baseClasses} bg-green-100 text-green-800`}>Successful</span>;
  }
  return <span className={`${baseClasses} bg-red-100 text-red-800`}>Failed</span>;
};

const RecentVendsTable = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>Recent Vends</CardTitle>
        <Link to="/vending" className="text-sm text-primary-blue hover:underline">View All</Link>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left text-xs font-semibold text-text-light uppercase p-3">Date</th>
                <th className="text-left text-xs font-semibold text-text-light uppercase p-3">Meter Number</th>
                <th className="text-left text-xs font-semibold text-text-light uppercase p-3">Amount (NGN)</th>
                <th className="text-left text-xs font-semibold text-text-light uppercase p-3">Status</th>
                <th className="text-left text-xs font-semibold text-text-light uppercase p-3">Token</th>
              </tr>
            </thead>
            <tbody>
              {vends.map((vend, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="p-3 whitespace-nowrap">{vend.date}</td>
                  <td className="p-3">{vend.meter}</td>
                  <td className="p-3">{vend.amount}</td>
                  <td className="p-3"><StatusBadge status={vend.status} /></td>
                  <td className="p-3 font-mono">{vend.token}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentVendsTable;
