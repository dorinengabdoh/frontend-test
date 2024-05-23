import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './chart.css';

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Apr",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "May",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jun",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Jul",
    uv: 2000,
    pv: 6800,
    amt: 2200,
  },
  {
    name: "Aug",
    uv: 2181,
    pv: 3800,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 3246,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 2100,
    pv: 3490,
    amt: 2210,
  },
  {
    name: "Nov",
    uv: 1200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Dec",
    uv: 9800,
    pv: 4800,
    amt: 2000,
  },
];
class AppChart extends PureComponent {
  render() {
    return (
      <LineChart width={600} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          padding={{ left: 30, right: 20 }}
          tick={{ fontSize: "0.8rem" }}
        />
        <YAxis tick={{ fontSize: "0.8rem" }} />
        <Tooltip />
        <Legend
          wrapperStyle={{
            fontSize: "0.8rem",
            padding: "0.5rem",
          }}
        />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          strokeWidth={3}
          activeDot={{ r: 8 }}
          accentHeight={10}
        />
      </LineChart>
    );
  }
}

export default AppChart;