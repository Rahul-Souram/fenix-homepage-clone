import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
  labels: ['Asia','Africa','Antarctica', 'NorthAmerica','SouthAmerica','Europe','Austrailia'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [90, 50, 25, 70, 80, 40, 30],
      backgroundColor: [
        'darkgreen',
        'blue',
        'red',
        'green',
        'yellow',
        'orange',
        'white'
      ],
      borderColor: [
        'darkgreen',
        'blue',
        'red',
        'green',
        'yellow',
        'orange',
        'white'
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;