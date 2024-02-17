import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import moment from "jalali-moment";

export default function RechartError({ data, handlePointClick }) {

  const formatJalaliDate = (date) => {
    const formattedDate = moment(date).format("jYYYY/jMM/jDD  HH:mm:ss");
    return formattedDate;
  };



  return (
    <>
      {data && data.length > 0 && (
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart data={data} onClick={handlePointClick}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#82ca9d" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area
              dataKey="message"
              stroke="#2451B7"
              fill="url(#colorUv)"
              type="monotone"
            />
            <Area
              dataKey="errorLine"
              stroke="#82ca9d"
              // fillOpacity={1}
              fill="url(#colorPv)"
              type="monotone"
            />
            <XAxis
              dataKey="createOn"
              axisLine={false}
              tickLine={false}
              tickFormatter={formatJalaliDate}
            />

            <YAxis
              datakey="id"
              axisLine={false}
              tickLine={false}
              tickCount={30}
              tickFormatter={false}
            />

            <Tooltip />

            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
