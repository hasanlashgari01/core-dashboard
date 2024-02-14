import propTypes from "prop-types";
import { Line, LineChart } from "recharts";

export default function TinyLineChart({ data, stroke }) {
  console.log(stroke);
  return (
    <LineChart width={80} height={40} data={data} ifOverflow="false">
      <Line type="monotone" dataKey="pv" stroke={stroke} strokeWidth={2} dot={false} />
    </LineChart>
  );
}

TinyLineChart.propTypes = {
  data: propTypes.object,
  stroke: propTypes.string
};
