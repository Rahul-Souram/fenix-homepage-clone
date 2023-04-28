import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {SlideTop } from '../components/SlideTop';
import { SlideInAnimation } from './SlideInAnimation';
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'gray',
      tension: 0.1,
    },
  ],
};

const LineGraph = () => {
  return (
    <SlideInAnimation direction="right">
    <div className='bg-white mt-3 p-4 second'>
      <h2 className='text-secondary'>Line Graph Example</h2>
      <Line data={data} />
    </div>
    </SlideInAnimation>

  );
};

export default LineGraph;