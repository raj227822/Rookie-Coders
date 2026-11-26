import React from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ReferenceDot} from 'recharts'
const money = n => `₹${Math.round(n).toLocaleString('en-IN')}`
export default function WeeklyProfitChart({data,bestWeek}) {
  const chartData = data.map(d=>({...d, sellNowProfit:data[0].netProfit, laterProfit:d.week===0?null:d.netProfit}))
  return <div className="panel p-5">
    <div className="mb-4"><h3 className="font-semibold text-slate-900">Week-by-week net profit</h3><p className="mt-1 text-xs text-slate-500">Estimated values · illustrative future price curve</p></div>
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{top:12,right:12,left:8,bottom:4}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8eee9"/>
          <XAxis dataKey="week" tickFormatter={v=>`Week ${v}`} tick={{fontSize:11,fill:'#64748b'}}/>
          <YAxis tickFormatter={money} width={88} tick={{fontSize:11,fill:'#64748b'}}/>
          <Tooltip formatter={(v,name)=>[money(v),name==='sellNowProfit'?'Sell now':'Store & sell later']} labelFormatter={v=>`Week ${v}`}/>
          <Legend formatter={v=>v==='sellNowProfit'?'Sell now':'Store & sell later'}/>
          <Line type="monotone" dataKey="sellNowProfit" name="sellNowProfit" stroke="#94a3b8" strokeDasharray="5 5" strokeWidth={2} dot={false}/>
          <Line type="monotone" dataKey="laterProfit" name="laterProfit" stroke="#16834a" strokeWidth={3} activeDot={{r:6}} connectNulls={false}/>
          {bestWeek>0&&<ReferenceDot x={bestWeek} y={data[bestWeek].netProfit} r={6} fill="#eab308" stroke="#fff" strokeWidth={2}/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
    <p className="mt-2 text-xs text-slate-500">The dashed line is the constant sell-now profit. The green line shows the estimated net profit if sold at each later week.</p>
  </div>
}
