import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const WalletCard = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>Wallet Balance</CardTitle>
        <span className="font-medium">NGN</span>
      </CardHeader>
      <CardContent className="flex flex-col items-start">
        <p className="text-4xl font-bold text-primary-blue mb-6">
          ₦1,250,340.50
        </p>
        <Button className="w-auto px-6 self-start">Top-up Wallet</Button>
      </CardContent>
    </Card>
  );
};

export default WalletCard;
