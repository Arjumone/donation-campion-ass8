import React, { PureComponent } from 'react';
import { PieChart as PiChart, Pie, Cell, Legend } from 'recharts';


const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



const PieChart = () => {

    const donationItems = JSON.parse(localStorage.getItem("donation"));
    
    const yourDonates = donationItems.length;
    const data = [
      { name: 'Total Donation', value: (12 - yourDonates) },
      { name: 'your Donation', value: yourDonates },
    ];
    if(!donationItems){
      donationItems(yourDonates)
    }


    return (
        <div className='flex items-center justify-center mb-4 -mt-8'>
            <div>
            <PiChart width={300} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend></Legend>
            </PiChart>
            </div>
        </div>
    );
};

export default PieChart;