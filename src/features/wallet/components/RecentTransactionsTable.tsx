import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';

const transactions = [
  {
    date: '2025-08-20 13:45',
    type: 'Debit',
    description: 'Vend for meter 04123456789',
    amount: '-₦5,000.00',
    amountClass: 'text-danger',
    balance: '₦1,250,340.50',
  },
  {
    date: '2025-08-20 10:02',
    type: 'Credit',
    description: 'Wallet Top-up via Bank Transfer',
    amount: '+₦50,000.00',
    amountClass: 'text-green-600',
    balance: '₦1,255,340.50',
  },
  {
    date: '2025-08-20 11:20',
    type: 'Debit',
    description: 'Vend for meter 04987654321',
    amount: '-₦10,000.00',
    amountClass: 'text-danger',
    balance: '₦1,205,340.50',
  },
  {
    date: '2025-08-19 15:03',
    type: 'Debit',
    description: 'Vend for meter 04112233445',
    amount: '-₦5,000.00',
    amountClass: 'text-danger',
    balance: '₦1,215,340.50',
  },
];

const RecentTransactionsTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 text-left text-xs uppercase text-text-light font-semibold border-b border-border-color">Date</th>
              <th className="p-3 text-left text-xs uppercase text-text-light font-semibold border-b border-border-color">Type</th>
              <th className="p-3 text-left text-xs uppercase text-text-light font-semibold border-b border-border-color">Description</th>
              <th className="p-3 text-left text-xs uppercase text-text-light font-semibold border-b border-border-color">Amount</th>
              <th className="p-3 text-left text-xs uppercase text-text-light font-semibold border-b border-border-color">Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="last:border-b-0">
                <td className="p-4 text-left border-b border-border-color">{tx.date}</td>
                <td className="p-4 text-left border-b border-border-color">{tx.type}</td>
                <td className="p-4 text-left border-b border-border-color">{tx.description}</td>
                <td className={`p-4 text-left border-b border-border-color ${tx.amountClass}`}>{tx.amount}</td>
                <td className="p-4 text-left border-b border-border-color">{tx.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default RecentTransactionsTable;
