import React, { FunctionComponent } from "react";
import { LineChart, Line, ResponsiveContainer, LabelList } from "recharts";


const CustomizedLabel: FunctionComponent<any> = function(props: any) {
  const { x, y, value } = props;

  return (
    <text x={x} y={y} dy={-20} fontSize={14} textAnchor="middle" fill="#FFFFFF">
      {value}
    </text>
  );
};

interface IProps {
  selectedForecast: any;
}

const ForecastChart = function({ selectedForecast }: IProps) {


  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) =>
    <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;

  const forecastChartData = selectedForecast.map((forecast: any) => (
    {
      pv: forecast.Temperature.Maximum.Value,
      uv: forecast.Temperature.Minimum.Value
    }
  ));

  return (
    <ResponsiveContainer>
      <LineChart
        width={1100}
        height={500}
        data={forecastChartData}
        margin={{
          top: 40,
          right: 100,
          left: 100,
          bottom: 10
        }}
      >
        <Line isAnimationActive={false} dataKey="pv" stroke="#FFFFFF">
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line  label={renderCustomBarLabel} isAnimationActive={false} dataKey="uv" stroke="#FFFFFF">
          <LabelList content={<CustomizedLabel />} />
        </Line>
      </LineChart>
    </ResponsiveContainer>

  );
};

export default ForecastChart;