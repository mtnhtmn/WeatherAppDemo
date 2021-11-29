import React, {FunctionComponent} from 'react';
import { LineChart, Line } from 'recharts';
import {LabelList} from "recharts/src/component/LabelList";


const CustomizedLabel: FunctionComponent<any> = (props: any) => {
    const { x, y, value } = props;

    return (
        <text x={x} y={y} dy={-4} fontSize={14} textAnchor="middle">
            {value}
        </text>
    );
};

interface IProps {
    selectedForecast: any
}

const ForecastChart = ({selectedForecast}: IProps ) => {

    const forecastChartData = selectedForecast.map((forecast: any) => (
        {
            pv: forecast.Temperature.Maximum.Value,
            uv: forecast.Temperature.Minimum.Value,
        }
    ))

    return (
        <LineChart
            width={500}
            height={300}
            data={forecastChartData}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10
            }}
        >
            <Line isAnimationActive={false} dataKey="pv" stroke="#FFFFFF">
                {/*<LabelList content={<CustomizedLabel />} />*/}
            </Line>
            <Line isAnimationActive={false} dataKey="uv" stroke="#FFFFFF"/>
        </LineChart>
    );
};

export default ForecastChart;