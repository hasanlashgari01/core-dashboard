import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import propTypes from "prop-types";

function Chart({ data, width, height }) {
  return (
    <ResponsiveContainer width={width ? width : "100%"} height={height} debounce={5}>
      <BarChart data={data} barSize={25}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={8} includeHidden />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip cursor={false} />
        <Bar dataKey="pv" name="Product veiws" fill="#B5E4CA" animationEasing="linear" animationBegin={1200} />
      </BarChart>
    </ResponsiveContainer>
  );
}

Chart.propTypes = {
  data: propTypes.array
};

export default Chart;
