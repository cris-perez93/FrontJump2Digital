import { 
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer 
} from 'recharts';

const data = [
  {name: 'january', uv: 400, pv: 2400, amt: 2400},
  {name: 'february', uv: 600, pv: 2000, amt: 2000},
  {name: 'march', uv: 1000, pv: 3000, amt: 2040}
];

function Chart(props) {
  return (
    <ResponsiveContainer width="45%" height={400}>
      <LineChart 
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
