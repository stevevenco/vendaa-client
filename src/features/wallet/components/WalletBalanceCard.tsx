import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';

const WalletBalanceCard = () => {
  return (
    <Card>
      <CardHeader  className="flex flex-col items-start">
        <CardTitle>Wallet Balances</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-5">
          <div className="p-5 border border-border-color rounded-lg">
            <div className="text-sm text-text-light mb-2 flex justify-between items-center">
              <span>Nigerian Naira (NGN)</span>
              <span className="text-xs bg-blue-100 text-primary-blue px-2 py-1 rounded-full font-medium">PRIMARY</span>
            </div>
            <div className="text-3xl font-bold text-left">₦1,250,340.50</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletBalanceCard;
