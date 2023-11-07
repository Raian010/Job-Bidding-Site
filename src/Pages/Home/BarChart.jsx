
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Success', value: 60 },
  { name: 'Pending', value: 22 },
  { name: 'Remaining', value: 18 },
];

const BarChartComponent = () => {
  return (
   <div className='my-24'>
    <div>
    <h2 className="text-4xl text-center font-bold mb-10">
        Our <span className="text-blue-600">Success</span></h2>
    </div>
     <ResponsiveContainer width="lg:100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
   </div>
  );
};

export default BarChartComponent;