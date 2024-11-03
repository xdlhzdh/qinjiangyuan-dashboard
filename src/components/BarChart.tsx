import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import withoutSsr from '@hocs/withoutSsr';


export interface DataPoint {
    name: string;
    uv: number;
}

interface ICustomBarChar {
    width: number;
    height: number;
    data: DataPoint[];
}

const BarChartComponent: React.FC<ICustomBarChar> = ({ width, height, data = [] }) => {
    return (
        <BarChart width={width} height={height} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    );
};

const BarChartNoSsr = withoutSsr(BarChartComponent);

export default BarChartNoSsr;
