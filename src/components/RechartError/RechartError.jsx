import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  import { format, parseISO, subDays } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";

  
//   for (let num = 30; num >= 0; num--) {
//     data.push({
//       date: subDays(new Date(), num).toISOString().substr(0, 10),
//       value: 1 + Math.random(),
//     });
//   }
  
  export default function RechartError() {

    const [chartData,setChartData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3030/table-rows').then(
            res => {setChartData(res.data)
            console.log(res.data)}
            )
    },[])

    return (
        <>
            {chartData && chartData.length>0 && (
                <ResponsiveContainer width="100%" height={500}>
                <AreaChart data={chartData} >
                  <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                      <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
          
                  <Area dataKey="line" stroke="#2451B7" fill="url(#color)" type="monotone"/>
          
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    // tickFormatter={(str) => {
                    //   const date = parseISO(str);
                    //   if (date % 7 === 0) {
                    //     return format(date, "MMM, d");
                    //   }
                    //   return "";
                    // }}
                  />
          
                  <YAxis
                    datakey="line"
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
    )
}
