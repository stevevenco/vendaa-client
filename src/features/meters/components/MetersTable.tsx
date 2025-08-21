import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencil } from '@fortawesome/free-solid-svg-icons';

const metersData = [
  {
    meterNumber: '04234567890',
    customerName: 'Fatima Bello',
    address: '5, Ozumba Mbadiwe Avenue, VI, Lagos',
    status: 'Connected',
  },
  {
    meterNumber: '04345678901',
    customerName: 'Emeka Nwosu',
    address: '10, Admiralty Way, Lekki Phase 1, Lagos',
    status: 'Connected',
  },
  {
    meterNumber: '04456789012',
    customerName: 'Aisha Ibrahim',
    address: '99, Awolowo Road, Ikoyi, Lagos',
    status: 'Disconnected',
  },
  {
    meterNumber: '04567890123',
    customerName: 'Yusuf Aliyu',
    address: '33, Opebi Road, Ikeja, Lagos',
    status: 'Connected',
  },
  {
    meterNumber: '04678901234',
    customerName: 'Funmilayo Cole',
    address: '60, Broad Street, Lagos Island, Lagos',
    status: 'Connected',
  },
  {
    meterNumber: '04789012345',
    customerName: 'Tunde Okoro',
    address: '1, Kingsway Road, Ikoyi, Lagos',
    status: 'Connected',
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const isConnected = status === 'Connected';
  const badgeClass = isConnected
    ? 'bg-green-100 text-green-800'
    : 'bg-red-100 text-red-800';
  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${badgeClass}`}>
      {status}
    </span>
  );
};

const MetersTable = () => {
  return (
    <div className="overflow-x-auto">
        <table className="w-full border-collapse">
        <thead>
            <tr>
            <th className="p-4 text-left text-xs uppercase text-text-light font-semibold border-b border-border-color">Meter Number</th>
            <th className="p-4 text-left text-xs uppercase text-text-light font-semibold border-b border-border-color">Customer Name</th>
            <th className="p-4 text-left text-xs uppercase text-text-light font-semibold border-b border-border-color">Address</th>
            <th className="p-4 text-left text-xs uppercase text-text-light font-semibold border-b border-border-color">Status</th>
            <th className="p-4 text-left text-xs uppercase text-text-light font-semibold border-b border-border-color">Actions</th>
            </tr>
        </thead>
        <tbody>
            {metersData.map((meter, index) => (
            <tr key={index} className="hover:bg-secondary-gray">
                <td className="p-4 text-left border-b border-border-color">{meter.meterNumber}</td>
                <td className="p-4 text-left border-b border-border-color">{meter.customerName}</td>
                <td className="p-4 text-left border-b border-border-color">{meter.address}</td>
                <td className="p-4 text-left border-b border-border-color"><StatusBadge status={meter.status} /></td>
                <td className="p-4 text-left border-b border-border-color">
                <a href="#" title="View Details" className="text-text-light mx-2 text-lg hover:text-primary-blue"><FontAwesomeIcon icon={faEye} /></a>
                <a href="#" title="Edit" className="text-text-light mx-2 text-lg hover:text-primary-blue"><FontAwesomeIcon icon={faPencil} /></a>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};

export default MetersTable;
