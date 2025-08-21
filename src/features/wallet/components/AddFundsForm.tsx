import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';

const AddFundsForm = () => {
  return (
    <Card>
      <CardHeader className='flex flex-col items-start'>
        <CardTitle>Add Funds</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
            <div className="space-y-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Input type="number" id="amount" placeholder="e.g., 50000" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="currency">Currency</Label>
              <select
                id="currency"
                className="w-full py-3 px-4 border border-border-color rounded-xl text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue bg-white"
              >
                <option value="NGN">NGN</option>
                <option value="GHS">GHS</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <select
                id="paymentMethod"
                className="w-full py-3 px-4 border border-border-color rounded-xl text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue bg-white"
              >
                <option>Bank Transfer</option>
                <option>Credit/Debit Card</option>
                <option>USSD</option>
              </select>
            </div>
            <div>
              <Button type="submit" className="w-full">Proceed to Payment</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddFundsForm;
