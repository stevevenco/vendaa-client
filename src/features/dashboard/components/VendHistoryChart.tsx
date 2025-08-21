import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ['Aug 14', 'Aug 15', 'Aug 16', 'Aug 17', 'Aug 18', 'Aug 19', 'Today'],
  datasets: [{
    label: 'Vends (NGN)',
    data: [12000, 19000, 4000, 8000, 21000, 2500, 15000],
    backgroundColor: 'rgba(29, 78, 216, 0.8)',
    borderColor: 'rgba(29, 78, 216, 1)',
    borderWidth: 1,
    borderRadius: 5
  }]
};

const chartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function(value: any) {
          return '₦' + value / 1000 + 'k';
        }
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

const VendHistoryChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vend History</CardTitle>
      </CardHeader>
      <CardContent style={{ height: '400px' }}>
        <Bar data={chartData} options={chartOptions} />
      </CardContent>
    </Card>
  );
};

export default VendHistoryChart;
